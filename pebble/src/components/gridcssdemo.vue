<template>
  <div class="grid">
    <div class="grid-box">
      <div class="one item">1</div>
      <div class="two item">2</div>
      <div class="three item">3</div>
      <div class="four item">4</div>
      <div class="five item">5</div>
      <div class="six item">6</div>
    </div>
    <h4>参见：</h4>
    <ul>
      <li><a href="https://juejin.cn/post/6854573220306255880">https://juejin.cn/post/6854573220306255880</a></li>
      <li><a href="https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html">https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  setup() {
    
  },
}
</script>
<style lang="scss" scoped>
.grid-box{
  display: grid;
  // grid-template-columns: repeat(auto-fill,200px);
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 100px 200px;
  grid-gap: 20px;
  .one{
    background: #19CAAD;
  }
  .two { 
  background: #8CC7B5;
  }
  .three {
    background: #D1BA74;
  }
  .four {
  background: #BEE7E9;
  }
  .five {
    background: #E6CEAC;
  }
  .six {
    background: #ECAD9E;
  }
  .item{
    text-align: center;
    font-size: 200%;
    color: #fff;
  }
  
}
</style>