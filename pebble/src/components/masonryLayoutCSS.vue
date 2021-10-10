<template>
  <div class="masonrycss">
    <div class="item-box" v-for="item,index in pics" :key="index">
      <div class="bg">
      <img :src="item" alt="" srcset="">
      </div>
    </div>
    <div class="item-line"></div>
    <div class="item-line"></div>
    <div class="item-line"></div>
    <div class="item-line"></div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      pics:[
        "https://picsum.photos/360/460?random=1",
        "https://z3.ax1x.com/2021/09/11/hz3Dk4.jpg",
        "https://z3.ax1x.com/2021/09/11/hz84K0.jpg",
        "https://z3.ax1x.com/2021/09/11/hz3w0U.jpg",
        "https://z3.ax1x.com/2021/09/11/hz8R8s.jpg",
        "https://z3.ax1x.com/2021/09/11/hzMhJ1.jpg",
        "https://z3.ax1x.com/2021/09/11/hz3Dk4.jpg",
        "https://z3.ax1x.com/2021/09/11/hz84K0.jpg",
        "https://z3.ax1x.com/2021/09/11/hz3w0U.jpg",
        "https://z3.ax1x.com/2021/09/11/hz8R8s.jpg",
        "https://z3.ax1x.com/2021/09/11/hz8R8s.jpg",
        "https://z3.ax1x.com/2021/09/11/hzMhJ1.jpg",
        "https://z3.ax1x.com/2021/09/11/hz3Dk4.jpg",
        "https://z3.ax1x.com/2021/09/11/hz84K0.jpg",
        "https://z3.ax1x.com/2021/09/11/hz3w0U.jpg",
        "https://z3.ax1x.com/2021/09/11/hz8R8s.jpg",
        
      ]
    }
  },
  setup() {
    
  },
}
</script>
<style lang="scss" scoped>
.masonrycss{
  width: 800px;
  height: 960px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
  counter-reset: items;
  .item-box{
    position: relative;
    width: 18%;
    margin: 1%;
    border-radius: 4px;
    overflow: hidden;
    &:nth-of-type(3n){
      .bg{
        padding-bottom: 120%;
      }
    }
    &:nth-of-type(4n){
      .bg{
        padding-bottom: 140%;
      }
    }
    &:nth-of-type(5n+1){
      order: 1;
    }
    &:nth-of-type(5n+2){
      order: 2;
    }
    &:nth-of-type(5n+3){
      order: 3;
    }
    &:nth-of-type(5n+4){
      order: 4;
    }
    &:nth-of-type(5n+5){
      order: 5;
    }
    &:hover::after{
      color: transparent;
      background-color: rgb(0,0,0,0.1);
    }
    &::after{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      counter-increment: items;
      content: counter(items);
      font-size: 30px;
      color: #CCCCCC;
      font-weight: bolder;
      background-color: rgb(0,0,0,0.3);
      transition: color 0.3s ease,background-color 0.3s ease;
    }
    .bg{
      padding-bottom: 100%;
      width: 100%;
      img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
      }
    }

  }
  .item-line{
    height: 100%;
    flex-basis: 100%;
    &:nth-of-type(1){
      order: 1
    }
    &:nth-of-type(2){
      order: 2
    }
    &:nth-of-type(3){
      order: 3
    }
    &:nth-of-type(4){
      order: 4
    }
  }
}
</style>