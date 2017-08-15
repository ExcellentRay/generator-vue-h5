<template>
  <div>
    <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
      <keep-alive>
        <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed:{
    ...mapState({
      direction: state => state.manager.direction
    })
  },
  beforeCreate() {
    //设置rem单位的值
    let width = window.screen.availWidth;
    let rem = width / 12;
    document.getElementsByTagName('html')[0].setAttribute('style', 'font-size:' + rem + 'px');
    document.body.style.fontSize = '14px';
  }
}
</script>


<style lang="less">
@import 'assets/less/reset.less';
@import '~vux/src/styles/reset.less';
@import 'assets/less/main.less';
</style>

