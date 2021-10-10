<template>
  <div class="storke">
    <h1 class="text">stroke</h1>
  </div>
</template>
<script>
export default {
  setup() {
    
  },
}
</script>
<style lang="scss" scoped>
.storke{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #eee;
  padding-bottom: 70px;
  min-height: 100vh;
  display: grid;
  place-items: center;
  .text{
    font-size: 13vw;
    font-family: cursive;
    -webkit-text-stroke: transparent 1.5vw;
    text-transform: uppercase;
    letter-spacing: 2vw;
    background: linear-gradient(90deg,#f9ca24 50%, #222 50.1%);
    background-size: 40px;
    background-clip: text;
    -webkit-background-clip: text;
    color: #FFF;
    text-shadow: 0 10px 25px rgba(0,0,0,.5);
    animation: text 1s linear infinite;
  }
  @keyframes text {
    0%{
      background-position-x: 0;
    }
    100%{
      background-position-x: -40px;
    }
    
  }
}

</style>