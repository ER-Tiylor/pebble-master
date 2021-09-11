<template>
<div class="container">
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <aaa v-show="false"></aaa>
  <MasonryLayout></MasonryLayout>
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import aaa from './components/aaa.vue'
import MasonryLayout from './components/masonryLayout.vue'
export default {
  name: 'App',
  components: {
    aaa,
    MasonryLayout
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
