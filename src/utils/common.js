<template>
  <div class="container">
    <div class="frame">
      <div class="charts">
        <div class="bar"
          :key="idx"
          v-for="(value, idx) in sortingSequence"
          :style="{height: 5 * value+'px'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'frame',
  computed: {
    ...mapState([
      'range'
    ]),
    ...mapGetters([
      'sortingSequence'
    ])
  },
  created () {
    console.log(...mapGetters)
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  .frame {
    height: 450px;
    // width: 300px;
    border: 1px solid #7d7d7d;
    padding: 20px 20px 100px;
    .charts {
      height: 100%;
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
