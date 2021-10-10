<template>
  <div class="masonry-layouts">
    <!-- <div class="container">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium incidunt deleniti eum nam sapiente reiciendis architecto, reprehenderit saepe? Reiciendis vitae molestias quas? Illo dolorum cupiditate quisquam hic natus rem porro.
    </div> -->
    <h2>multi-column布局实现瀑布流</h2>
    <div class="masonry">
      <div class="item">
        <img src="https://z3.ax1x.com/2021/09/11/hzMhJ1.jpg" alt="">
        <span class="title">1这是用column-count实现的瀑布流效果，multi-column布局中子元素的排列顺序是先从上往下再从左往右。</span>
      </div>
      <div class="item">
        <img src="https://z3.ax1x.com/2021/09/11/hz3Dk4.jpg" alt="">
        <span class="title">2column-count: 设置共有几列,column-width: 设置每列宽度，列数由总宽度与每列宽度计算得出</span>
      </div>
      <div class="item">
        <img src="https://z3.ax1x.com/2021/09/11/hz84K0.jpg" alt="">
        <span class="title">3column-gap: 设置列与列之间的间距</span>
      </div>
      <div class="item">
        <img src="https://z3.ax1x.com/2021/09/11/hzMhJ1.jpg" alt="">
        <span class="title">4这是用column-count实现的瀑布流效果，multi-column布局中子元素的排列顺序是先从上往下再从左往右。</span>
      </div>
      <div class="item">
        <img src="https://z3.ax1x.com/2021/09/11/hz3Dk4.jpg" alt="">
        <span class="title">5这是用column-count实现的瀑布流效果，multi-column布局中子元素的排列顺序是先从上往下再从左往右。</span>
      </div>
      <div class="item">
        <img src="https://z3.ax1x.com/2021/09/11/hz84K0.jpg" alt="">
        <span class="title">6这是用column-count实现的瀑布流效果，multi-column布局中子元素的排列顺序是先从上往下再从左往右。</span>
      </div>
    </div>
    <!-- <div class="masonry1">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
    </div> -->
    <h2>(推荐)flex布局实现瀑布流</h2>
    <div class="masonry2">
      <div class="columns columns1">
        <div class="item" v-for="item,index in data1" :key="index">
          <img :src="item" alt="">
        </div>
      </div>
      <div class="columns columns2">
        <div class="item" v-for="item,index in data2" :key="index">
          <img :src="item" alt="">
        </div>
      </div>
      <div class="columns columns3">
        <div class="item" v-for="item,index in data3" :key="index">
          <img :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive,toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
  setup() {
    const state = reactive({
      data:[
        "https://z3.ax1x.com/2021/09/11/hzMhJ1.jpg",
        "https://z3.ax1x.com/2021/09/11/hz3Dk4.jpg",
        "https://z3.ax1x.com/2021/09/11/hz84K0.jpg",
        "https://z3.ax1x.com/2021/09/11/hz3w0U.jpg",
        "https://z3.ax1x.com/2021/09/11/hz8R8s.jpg",
        "https://z3.ax1x.com/2021/09/11/hzMhJ1.jpg",
      ],
      data1:[],
      data2:[],
      data3:[]
    })
    onMounted(()=>{
      for(let i =0;i<state.data.length;i++){
        state.data1.push(state.data[i]);
        state.data2.push(state.data[++i]);
        state.data3.push(state.data[++i]);
      }
      // console.log(state.data1,state.data2,state.data3)
    })
    return {
      ...toRefs(state)
    }
  },
}
</script>
<style lang="scss" scoped>
.masonry-layouts{
  .container{
    column-count: 3;
  }
  .masonry{
    column-count: 3;
    column-gap: 10px;
    .item{
      border: 1px solid #000;
      margin-bottom: 10px;
      img{
        width: 100%;
      }
    }
  }
  .masonry1{
    display: grid;
    // grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 10px;
    
    .item{
      width: 100%;
      height: 100%;
      margin-bottom: 10px;
    }
    .item:nth-child(1){
      height: 300px;
      background-color: #F0342B;
    //   grid-row-start:1;
    // grid-row-end:span 2;
    }
    .item:nth-child(2){
      height: 160px;
      background-color: #F68F25;
    }
    .item:nth-child(3){
      height: 280px;
      background-color: #0477C2;
    }
    .item:nth-child(4){
      height: 70px;
      background-color: #C178B0;
    }
    .item:nth-child(5){
      height: 200px;
      background-color: #F7D39D;
    }
  }
  .masonry2{
    display: flex;
    .columns{
      display: flex;
      flex-direction: column;
      width: 200px;
      margin-right: 20px;
      .item{
        margin-bottom: 20px;
        img{
        width: 100%;
        vertical-align:top;
      }
      }
    }
  }
}
</style>