<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('0')

const menu_items = ref([
  {
    key: "1",
    item_name: "应用场景",
    sub_items: [
      {
        key: "1-1",
        item_name: "材料力学",
        sub_url: "/application-scenarios/mechanics-materials"
      },
      {
        key: "1-2",
        item_name: "奇异值分解",
        sub_url: "/application-scenarios/singular-value-decomposition"
      }
    ]
  },
  {
    key: "2",
    item_name: "有限元",
    sub_items: [
      {
        key: "2-1",
        item_name: "连续元",
        sub_url: "/finite-element/continuous-elements"
      },
      {
        key: "2-2",
        item_name: "间断元",
        sub_url: "/finite-element/discontinuous-elements"
      },
      {
        key: "2-3",
        item_name: "弱有限元",
        sub_url: "/finite-element/weak-finite-elements"
      }
    ]
  },
  {
    key: "3",
    item_name: "粒子动力学",
    sub_items: [
      {
        key: "3-1",
        item_name: "分子动力学",
        sub_url: "/particle-dynamics/molecular-dynamics"
      },
      {
        key: "3-2",
        item_name: "粗粒子动力学",
        sub_url: "/particle-dynamics/coarse-particle-dynamics"
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
        item_name: "计算机视觉",
        sub_url: "/machine-learning/computer-vision"
      },
      {
        key: "5-2",
        item_name: "自然语言处理",
        sub_url: "/machine-learning/natural-language-processing"
      },
      {
        key: "5-3",
        item_name: "科学计算",
        sub_url: "/machine-learning/scientific-computing"
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
        item_name: "平台研发团队",
        sub_url: "/about-us/platform-r-d-team"
      }
    ]
  }
])
</script>

<template>
  <el-header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      :ellipsis="true"
    >
      <div class="flex-grow-left" />
      <img
        src="./assets/logo-title.jpg"
        alt="logo with title"
      />
      <div class="flex-grow-middle" />
      <router-link to="/home">
        <el-menu-item class="menu-item" index="0">
          首页
        </el-menu-item>
      </router-link>
      <template v-for="item in menu_items">
          <el-sub-menu class="menu-item" :index=item.key>
          <template #title>{{ item.item_name }}</template>
          <template v-for="sub_item in item.sub_items">
            <router-link :to=sub_item.sub_url>
              <el-menu-item :index=sub_item.key>
                {{ sub_item.item_name }}
              </el-menu-item>
            </router-link>
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
  </el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
</template>

<style>
.flex-grow-left {
  flex-grow: 0.2;
}
.flex-grow-middle {
  flex-grow: 0.3;
}
</style>