<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="menubar" mode="horizontal" @select="handleSelect">
          <el-menu-item v-for="n in nav" :index="Object.keys(n)[0]" :key="Object.keys(n)[0]">
            <router-link :to="'/' + Object.keys(n)[0]">{{Object.values(n)[0]}}</router-link>
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

import Nav from '@/utils/nav'

// const Sort

export default {
  name: 'App',
  data () {
    return {
      nav: Nav
    }
  },
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
.menubar {
  display: flex;
  justify-content: center;
  .el-menu-item {
    padding: 0;
    a {
      display: block;
      padding: 0 20px;
      text-decoration: none;
    }
  }
}
</style>
