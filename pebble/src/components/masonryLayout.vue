<template>
<div class="con">
  <div class="container" ref="con" >
    <div class="item show"  v-for="item,index in pics" :key="index" :ref="setItemRef">
      <div class="pic">
        <img :src="item" alt="">
      </div>
    </div>
  </div>
</div>
  
</template>
<script>
import {ref,onMounted, reactive,toRefs,nextTick} from "vue"
export default {
  data(){
    return {
      
    }
  },
  setup() {
    const state = reactive({
      itemRefs: [],
      timer:null,
      flag:false,
      pics:[
        "https://z3.ax1x.com/2021/09/11/hzMhJ1.jpg",
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
    })
    const con = ref(null);
    // onUpdated(()=>{
    //   waterFall()
    // })
    // const instance = getCurrentInstance();
    onMounted(async ()=>{
      window.onresize=throttle(()=>{waterFall()});
      document.onscroll =  async()=>{
      if(state.itemRefs[state.itemRefs.length-1].getBoundingClientRect().top<window.innerHeight){
        // add()
        let len = state.pics.length
        state.pics.push("https://z3.ax1x.com/2021/09/11/hz8R8s.jpg")
        state.pics.push("https://z3.ax1x.com/2021/09/11/hzMhJ1.jpg")
        state.itemRefs.splice(0,len);
        await nextTick();
            waterFall()
          }
      }
      // await nextTick();
      // 此处渲染会有异常，由于DOM未完全就绪，所以立即渲染会导致位置异常，暂时采用延时处理,也有可能是key值索引异常导致的
      state.timer = setTimeout(waterFall,300)
      // waterFall()
      // instance.ctx.forceUpdate();
    })
    const throttle = (func,delay=300)=>{
      let last = 0;
      return (...rest)=>{
        let now = + new Date();
        if(now-last >delay){
          func.apply(rest);
          last = + new Date();
        }
        
      }
    }
    const setItemRef = (el)=>{
      state.itemRefs.push(el)
    }
    const waterFall = async ()=>{
      // 设置container宽度
      let clientWidth = document.documentElement.clientWidth;
      let itemWidth = state.itemRefs[0].offsetWidth;
      let columnCount = Math.floor(clientWidth/itemWidth);
      con.value.style.width = columnCount *state.itemRefs[0].offsetWidth +"px";
      // 设置每一个item元素的排列位置，第一行整体的top值都为0，后面的依次找上一行高度最小的容器，在他的下面排列
      let arr = []//存每一行盒子的高度
      let i=0;
      // console.log('state.itemRefs.length',state.itemRefs.length)
      for( i=0;i<state.itemRefs.length;i++){
        // console.log('iii',i)
        if(i<columnCount){
          state.itemRefs[i].style.top = "0px";
          state.itemRefs[i].style.left = i * state.itemRefs[i].offsetWidth+"px";
          arr.push(state.itemRefs[i].offsetHeight)
        }else{
          let min = Math.min(...arr);
          let index = arr.indexOf(min)
            state.itemRefs[i].style.top = min + "px";
          state.itemRefs[i].style.left = index * state.itemRefs[i].offsetWidth+"px";
          arr[index]+=state.itemRefs[i].offsetHeight
          
        }
      }
      

    }
    return {
      ...toRefs(state),
      throttle,
      setItemRef,
      con
    }
  },
  methods:{
  },
  beforeUnmount(){
    clearTimeout(this.timer)
  }
}
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.container{
  margin: 0 auto;
  width: 100%;
  height: auto;
  position: relative;
}
.item{
  width: 200px;
  height: auto;
  padding: 10px;
  position: absolute;
  transition: all 0.5s ease-in-out;
  .pic{
    padding: 10px;
    border: 1px solid #eee;
    box-shadow: 0 0 5px 5px #eee;
    img{
      width: 100%;
    }
  }
}
.show{
  animation: scale 1s forwards
}
@keyframes scale{
  from{
    transform: scale(0);
  }
  to{
    transform: scale(1);
  }
}
</style>