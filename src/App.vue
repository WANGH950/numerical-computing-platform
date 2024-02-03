<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('0')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const menu_items = ref([
  {
    key: "1",
    item_name: "应用场景",
    sub_items: [
      {
        key: "1-1",
        item_name: "水泥/沥青材料力学"
      },
      {
        key: "1-2",
        item_name: "矩阵奇异值分解"
      }
    ]
  },
  {
    key: "2",
    item_name: "有限元",
    sub_items: [
      {
        key: "2-1",
        item_name: "连续元"
      },
      {
        key: "2-2",
        item_name: "间断元"
      },
      {
        key: "2-3",
        item_name: "弱有限元"
      }
    ]
  },
  {
    key: "3",
    item_name: "粒子动力学",
    sub_items: [
      {
        key: "3-1",
        item_name: "分子动力学"
      },
      {
        key: "3-2",
        item_name: "粗粒子动力学"
      }
    ]
  },
  {
    key: "4",
    item_name: "统计计算",
    sub_items: []
  },
  {
    key: "5",
    item_name: "机器学习",
    sub_items: [
      {
        key: "5-1",
        item_name: "计算机视觉"
      },
      {
        key: "5-2",
        item_name: "自然语言处理"
      },
      {
        key: "5-3",
        item_name: "科学计算"
      }
    ]
  },
  {
    key: "6",
    item_name: "数据与机理融合",
    sub_items: []
  },
  {
    key: "7",
    item_name: "关于我们",
    sub_items: [
      {
        key: "7-1",
        item_name: "平台研发团队"
      }
    ]
  }
])
</script>

<template>
  <header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      :ellipsis="true"
      @select="handleSelect"
    >
      <img
          src="./assets/logo-title.jpg"
          alt="logo with title"
          style="vertical-align:middle;margin:0px 200px"
      />
      <el-menu-item class="menu-item" index="0">首页</el-menu-item>
      <template v-for="item in menu_items">
          <el-sub-menu class="menu-item" :index=item.key>
          <template #title>{{ item.item_name }}</template>
          <template v-for="sub_item in item.sub_items">
            <el-menu-item :index=sub_item.key>{{ sub_item.item_name }}</el-menu-item>
          </template>
        </el-sub-menu>
      </template>
      <a href="https://github.com/WANGH950/numerical-computing-platform" title="github" target="_blank">
        <img
          src="./assets/github-mark.svg"
          alt="github"
          width="30pt"
          height="30pt"
          style="vertical-align:middle;margin:10px 20px;"
      />
      </a>
    </el-menu>
  </header>
  
</template>

<style>
</style>