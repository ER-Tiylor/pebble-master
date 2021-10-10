<template>
<div class="app">
  <div class="top-nav">
    
  </div>
  <div :class="['container',fullScreen?'full-screen':'']">
    <div class="nav">
      <h3>目录</h3>
      <router-link to="/home">回到首页</router-link>
      <router-link to="/masonryLayout">masonryLayout</router-link>
      <router-link to="/masonryLayoutCSS">masonryLayoutCSS</router-link>
      <router-link to="/gridcssdemo">gridcssdemo</router-link>
      <router-link to="/SimpleDynamicEffect01">SimpleDynamicEffect01</router-link>
      <router-link to="/StrokeAnimation">StrokeAnimation</router-link>
      <!-- <router-link to="/css-secret-book">css-secret-book</router-link> -->
      <router-link to="/MasonryLayouts">MasonryLayouts</router-link>
      <router-link to="/css-font">css-font</router-link>
      <router-link to="/card-3D-followmouse">card-3D-followmouse</router-link>
    </div>
    <div class="content">
      <button class="full-btn" @click="setFullScreen">{{fullScreen?"显示目录":'全屏查看'}}</button>
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import { reactive,toRefs } from '@vue/reactivity'
export default {
  setup() {
    const state = reactive({
      fullScreen:false
    });
    const setFullScreen = ()=>{
      state.fullScreen = !state.fullScreen
    }
    return {
      ...toRefs(state),
      setFullScreen
    }
  },
}
</script>

<style lang="scss" scoped>
.app{
  .container{
    display: flex;
    .nav{
      display: flex;
      flex-direction: column;
      width: 30%;
      border-right: 1px #ccc solid;
      overflow: hidden;
    }
    .content{
      width: 70%;
      height: 90vh;
      margin-left: 40px;
      .full-btn{
        margin-bottom: 20px;
      }
    }
  }
  .full-screen{
    .nav{
      display: none;
    }
    .content{
      width: 100%;
      
      margin: 40px;
      margin-top: 0;
    }
  }
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
