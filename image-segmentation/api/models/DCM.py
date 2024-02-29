import torch
import torch.nn as nn

class DCM(nn.Module):
    def __init__(self, cluster_num, dc=0.1, rhob=1) -> None:
        super(DCM, self).__init__()
        self.cluster_num = cluster_num
        self.dc = dc
        self.rhob = rhob
        self.N = 0
        self.x = None
        self.y = None
        self.d = None
        self.rho = None
        self.delta = None
    
    def forward(self, x:torch.tensor):
        N,dim = x.shape
        d = (torch.ones([N,self.N,dim]) * self.x[None,:,:] - x[:,None,:]).norm(dim=-1)
        ind = d.argmin(dim=-1)
        return self.y[ind]
        
    def fit(self, x:torch.tensor):
        N,dim = x.shape
        self.N = N
        self.x = x
        d = self.distance(x)
        rho = self.local_density(d)
        delta = self.higher_density_distance(d,rho)
        # 选择簇中心
        y = torch.zeros(N) - 1 # -1表示未聚类
        # 噪声
        y[rho < self.rhob] = 0
        # 按照delta和rho从大到小的原则选取簇中心
        delta_unique = torch.flip(torch.unique(delta),dims=[0])
        c = 1
        for deltai in delta_unique:
            if c > k:
                break
            deltai_flags = delta == deltai
            inds = torch.cumsum(deltai_flags,dim=0)
            _, rho_delta_inds = torch.sort(rho[deltai_flags],descending=True)
            for j in rho_delta_inds + 1:
                indj = (inds == j).int().argmax() # 从大到小选取当前的delta对应的rho
                if rho[indj] >= self.rhob:
                    d_labeled = d[indj,y>0] # 当前rho对应点与已标记中心之间的距离
                    if d_labeled.shape[0] > 0 and d_labeled.min() < self.dc: # 最小距离如果小于dc，则与其并为统一簇
                        d_labeled_inds = torch.cumsum(y>0,dim=0)
                        min_ind = d_labeled.argmin()+1
                        d_labeled_indsk = (d_labeled_inds == min_ind).int().argmax()
                        y[indj] = y[d_labeled_indsk]
                    else:
                        y[indj] = c
                        c += 1
                else:
                    break
        # 聚类
        _,ind = rho.sort(descending=True)
        for i in ind:
            if y[i] >= 0:
                continue
            ind_dmin = torch.argmin(d[i][rho > rho[i]])
            y[i] = y[rho > rho[i]][ind_dmin]
        self.y = y
        return self.y

    def distance(self, x:torch.tensor):
        N,dim = x.shape
        d = torch.ones([N,N,dim]) * x[None,:,:] - x[:,None,:]
        self.d = d.norm(p=2,dim=-1,keepdim=False)
        return self.d
    
    def local_density(self, d:torch.tensor):
        self.rho = torch.relu(torch.sign(self.dc - d)).sum(dim=1)
        return self.rho
    
    def higher_density_distance(self, d:torch.tensor, rho:torch.tensor):
        len = d.shape[0]
        delta = []
        for i in range(len):
            index = rho > rho[i]
            if index.sum() > 0:
                di = d[i][index]
                delta.append(torch.min(di))
            else:
                delta.append(torch.max(d[i]))
        self.delta = torch.tensor(delta)
        return self.delta