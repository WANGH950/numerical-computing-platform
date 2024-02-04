<script lang="ts" setup>
</script>

<template>
  <el-header>
    <el-button>上传图片</el-button>
    <el-button>显示设置</el-button>
    <el-button>开始识别</el-button>
    <el-button>保存图片</el-button>
    <el-button>帮助</el-button>
  </el-header>
  <el-main>
    <div class="image-left">
      <!-- <img
        src="@/assets/math_logo.png"
        alt="logo with title"
        style="display: inline"
      /> -->
      1
    </div>
    <div class="image-right">
      <!-- <img
        src="@/assets/math_logo.png"
        alt="logo with title"
        style="display: inline"
      /> -->
      2
    </div>
    <div class="model-select">
      <!-- <h2> 模型选择 </h2>
      <el-radio-group>
        <el-radio-button label="K-means" />
        <el-radio-button label="密度聚类" />
        <el-radio-button label="U-Net" />
        <el-radio-button label="Mask-RCNN" />
      </el-radio-group> -->
      3
    </div>
  </el-main>
</template>

<style>
.image-left {
  width: 500px;
  height: 20%;
  backgrand:blue;
}
</style>