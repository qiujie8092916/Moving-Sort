<template>
  <div class="container">
    <div class="frame">
      <div class="charts">
        <div class="bar"
          :key="idx"
          v-for="(value, idx) in arr"
          :style="{height: 5 * value+'px'}"></div>
      </div>
      <p class="mt20 mb20 fs13">耗时: {{spend | toFixed}} s</p>
    </div>
    <el-radio-group class="mt10" v-model="velocity">
      <el-radio :label="1" :disabled="isStart">1倍速</el-radio>
      <el-radio :label="50" :disabled="isStart">0.05倍速</el-radio>
      <el-radio :label="500" :disabled="isStart">0.005倍速</el-radio>
      <el-radio :label="1000" :disabled="isStart">0.0001倍速</el-radio>
    </el-radio-group>
    <el-button class="mt10" @click="handleStart" :disabled="isStart">开始排序</el-button>
    <el-button class="mt10 mln" @click="handleReset" :disabled="isStart">重置</el-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
const sort = {
  bubbleSort: require('@/sort/bubbleSort'),
  selectionSort: require('@/sort/selectionSort'),
  insertionSort: require('@/sort/insertionSort'),
  shellSort: require('@/sort/shellSort'),
  quickSort: require('@/sort/quickSort')
}

export default {
  name: 'common',
  data () {
    return {
      arr: [],
      spend: 0,
      timer: 0,
      isStart: false,
      velocity: 1,
      interval: null
    }
  },
  computed: {
    ...mapState([
      'range',
      'sortingSequence'
    ])
  },
  created () {
    this.generator()
  },
  methods: {
    ...mapMutations([
      'generatorSortingSequence'
    ]),
    async handleStart () {
      this.isStart = true
      let exec = sort[this.$route.path.slice(1)].default
      await exec(this.arr, this, this.velocity)
      this.isStart = false
    },
    handleReset () {
      this.generator()
    },
    generator () {
      this.generatorSortingSequence()
      this.arr = []
      this.sortingSequence.forEach(val => {
        this.arr.push(val)
      })
    }
  },
  watch: {
    isStart (nv) {
      if (nv) {
        this.interval = setInterval(() => {
          let temp = +new Date()
          this.timer = temp
        }, 10)

        this.spend = 0
        this.timer = +new Date()
      } else {
        clearInterval(this.interval)
        this.interval = null
        this.timer = 0
      }
    },
    timer (nv, ov) {
      if (this.isStart && ov !== 0) {
        this.spend += (nv - ov) / 1000
      }
    }
  },
  filters: {
    toFixed (val) {
      return val.toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
.mt10 {
  margin-top: 10px;
}
.mb20 {
  margin-bottom: 20px;
}
.mln {
  margin-left: 0;
}
.fs13 {
  font-size: 13px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .frame {
    border: 1px solid #7d7d7d;
    padding: 20px 20px 0px;
    .charts {
      height: 500px;
      position: relative;
      .bar {
        width: 2px;
        display: inline-block;
        background-color: #3838ff;
        margin-right: 1px;
        vertical-align: bottom;
      }
    }
  }
}
</style>
