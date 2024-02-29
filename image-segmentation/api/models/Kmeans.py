import torch
import torch.nn as nn

class Kmeans(nn.Module):
    def __init__(self, dim, cluster_num, init_centers) -> None:
        super(Kmeans,self).__init__()
        self.dim = dim
        self.cluster_num = cluster_num
        self.cluster_centers = init_centers
    
    def forward(self, x:torch.tensor):
        d = (x[:,None,:] - self.cluster_centers).norm(p=2,dim=-1)
        c = torch.argmin(d,dim=-1)
        return c

    def fit(self, x:torch.tensor):
        while True:
            cluster_centers_old = self.cluster_centers.clone()
            d = (x[:,None,:] - self.cluster_centers).norm(p=2,dim=-1)
            c = torch.argmin(d,dim=-1)
            for i in range(self.cluster_num):
                self.cluster_centers[i] = x[c == i].mean(dim=0)
            if (cluster_centers_old != self.cluster_centers).sum() == 0:
                break
        return self.cluster_centers