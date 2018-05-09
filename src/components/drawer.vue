<template>
    <div id="drawer">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: 'testDrawer',
  props: ['isShow'],
  data () {
    return {
      drawerAnimate: false
    }
  },
  computed: {
    /* drawerHeight () {
      let ele = document.getElementById('drawer')
      let height = 0
      new Array(...ele.children).forEach(child => {
        height += parseFloat(window.getComputedStyle(child).height) +
          parseFloat(window.getComputedStyle(child).marginTop) +
          parseFloat(window.getComputedStyle(child).marginBottom)
      })
      height += parseFloat(window.getComputedStyle(ele).borderTopWidth) +
        parseFloat(window.getComputedStyle(ele).borderBottomWidth)
      return height
    } */
  },
  mounted () {
    this.toggle(this.isShow)
  },
  methods: {
    toggle (val) {
      let ele = document.getElementById('drawer')
      if (val) {
        document.getElementById('drawer').classList.add('show')
        ele.style.height = this.drawerHeight() + 'px'
        this.drawerAnimate = true
        this.$emit('toggle', this.drawerAnimate)
        let timer = setTimeout(() => {
          this.drawerAnimate = false
          this.$emit('toggle', this.drawerAnimate)
          clearTimeout(timer)
        }, 100)
      } else {
        ele.style.height = '0px'
        this.drawerAnimate = true
        this.$emit('toggle', this.drawerAnimate)
        let timer = setTimeout(() => {
          document.getElementById('drawer').classList.remove('show')
          clearTimeout(timer)
          this.drawerAnimate = false
          this.$emit('toggle', this.drawerAnimate)
        }, 100)
      }
    },
    drawerHeight () {
      let ele = document.getElementById('drawer')
      let height = 0
      new Array(...ele.children).forEach(child => {
        height += parseFloat(window.getComputedStyle(child).height) +
          parseFloat(window.getComputedStyle(child).marginTop) +
          parseFloat(window.getComputedStyle(child).marginBottom)
      })
      height += parseFloat(window.getComputedStyle(ele).borderTopWidth) +
        parseFloat(window.getComputedStyle(ele).borderBottomWidth)
      return height
    }
  },
  watch: {
    isShow (nv) {
      this.toggle(nv)
    }
  }
}
</script>
<style lang='scss' scoped>
#drawer {
    box-shadow: 0px -1px 15px rgba(0,0,0,.5);
    width: 100%;
    position: fixed;
    bottom: 0;
    display: none;
    height: 0;
    vertical-align: bottom;
    transition: height .1s linear;
    border: 1px solid;
    overflow: hidden;
    background-color: white;
    &.show {
        display: initial;
    }
}
</style>
