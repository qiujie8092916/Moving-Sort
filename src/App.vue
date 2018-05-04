<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="bubbleSort">
            <router-link to="/bubbleSort">冒泡排序</router-link>
          </el-menu-item>
          <el-menu-item index="selectionSort">
            <router-link to="/selectionSort">选择排序</router-link>
          </el-menu-item>
          <el-menu-item index="insertionSort">
            <router-link to="/insertionSort">插入排序</router-link>
          </el-menu-item>
          <el-menu-item index="shellSort">
            <router-link to="/shellSort">希尔排序</router-link>
          </el-menu-item>
          <el-menu-item index="quickSort">
            <router-link to="/quickSort">快速排序</router-link>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import bubbleSort from './components/bubbleSort'
import selectionSort from './components/selectionSort'
import insertionSort from './components/insertionSort'
import shellSort from './components/shellSort'
import quickSort from './components/quickSort'

export default {
  name: 'App',
  components: {
    bubbleSort,
    selectionSort,
    insertionSort,
    shellSort,
    quickSort
  },
  computed: {
    activeIndex () {
      return this.$route.path.slice(1)
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scopeds>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'PingFang sc', 'Microsoft Yahei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-menu-item {
  padding: 0;
  a {
    display: block;
    padding: 0 20px;
    text-decoration: none;
  }
}
</style>
