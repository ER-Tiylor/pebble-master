<template>
  <!-- css梯形的实现 -->
  <!-- <div class="mask"> -->
    <div class="box1">
      <div class="trapezoid"></div>
    </div>
    
  <!-- </div> -->
</template>
<script>
export default {
  setup() {
    
  },
}
</script>
<style lang="scss" scoped>
.mask{
  height: 0;
  width: 80%;
  border-top: 100px solid #ccc;
  border-right: 40px solid transparent;
}
// .box{
//   width: 80%;
//   height: 300px;
//   overflow: hidden;
//   .trapezoid {
//   width: 100%;
//   height: 100%;
//   background:#ccc;
//   transform: perspective(10px) rotateX(1deg) ; 
//   margin: 50px;
//   }
// }
// .trapezoid {
//   width: 200px;
//   height: 200px;
//   background:#ccc;
//   transform: perspective(10px) rotateX(1deg) ; 
//   margin: 50px;
//   }
.trapezoid {
    clip-path: polygon(0 0, 100% 0, 67% 100%, 0% 100%);
}
</style>