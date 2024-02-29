import flask
import torch
from models.UNet import UNet

predict = flask.Blueprint('predict',__name__)

@predict.route('/machine-learning/computer-vision/image-segmentation/u-net')
def predict_unet():
    network = UNet(n_channels=3,n_classes=3).cuda()
    network.load_state_dict(torch.load('./model_per.pth')) # 修改
    # pre = network(？？？)