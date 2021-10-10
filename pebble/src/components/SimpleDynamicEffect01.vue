<template>
  <div class="sdf-container">
    <p>hello<br>world</p>
  </div>
</template>
<script>
export default {
  setup() {
    
  },
}
</script>
<style lang="scss" scoped>
.sdf-container{
  width: 100%;
  height: 100vh;
  margin: 0;
  display: grid;
  place-items: center;
  background-color: #f9cdad;
  p{
    position: relative;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 15px;
    color: #774f38;
    background-color: #ece5ce;
    padding: 50px;
    box-shadow: 20px 20px #83af9b;
    border-radius: 11px;
    // mix-blend-mode: multiply;
    animation: float 5s ease-in-out infinite;
    &::after{
      content:'.';
      font-weight: bold;
      text-shadow: 22px 22px #83af9b;
      -webkit-text-fill-color: #ece5ce;
      text-align: left;
      font-size: 55px;
      width: 55px;
      height: 11px;
      line-height: 30px;
      border-radius: 11px;
      background-color: #ece5ce;
      position: absolute;
      box-shadow: 22px 22px #83af9b;
      bottom: -30px;
      left: 0;
      z-index: -2px;
      animation: float2 5s ease-in-out infinite;
    }
  }
  
  @keyframes float {
    0%{
      transform: translateY(0px);
    }
    50%{
      transform: translateY(-20px);
    }
    100%{
      transform: translateY(0px)
    }
    
  }
  @keyframes float2 {
    0%{
      line-height: 30px;
      transform: translateY(0px);
    }
    55%{
      transform: translateY(-20px);
    }
    60%{
      line-height: 10px;
    }
    100%{
      line-height: 30px;
    }
    
  }
}
</style>