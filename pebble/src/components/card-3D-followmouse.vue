<template>
  <div class="card-3d">
    <div class="valid-area" @mousemove="getMouseLocation" @mouseleave="reset" ref="cardEle">
      <div class="card" :style="{'--rx':rx,'--ry':ry}">
        <p class="title">Hold Near</p>
        <p class="title">Reader to PPlay</p>
        <div class="card-number">**** **** **** 2148</div>
        <div class="lock"></div>
      </div>
    </div>
    <div>
      <p>解释，实现的关键有这些：<br>
        一个<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-style">transform-style: preserve-3d;</a>使得card-number子元素位于3D空间中
        当鼠标移动时获取鼠标的坐标，根据坐标计算卡片沿X轴和Y轴旋转的角度，这是关键，然后通过动态style属性中的css变量将改变后的值传递给实际的css，<br>
        首先说是如何旋转的？<br>
        rotateX 正角度是水平线顺时针旋转，负角度是水平线逆时针旋转，但我们看到的仍然是2D<br>
        rotateY 正角度是垂直线顺时针旋转，负角度是垂直线逆时针旋转，但我们看到的仍然是2D<br>
        <br>
        那坐标到旋转角度是如何转换的呢？
        首先，旋转需要一个角度范围，UP主使用的是 -16deg - +16deg，<br>
        还需确定响应鼠标的区域，Up主是全屏做的，我这里是局部做的，我这里定为600px * 600px<br>
          绕Y轴（垂直轴）的旋转也就是计算鼠标在有效区域（设定为）0 - 600px 对应 0-32deg（-16deg - 16deg）<br>
          绕X轴（水平轴）的旋转也就是计算鼠标在有效区域（设定为）0 - 600px 对应 32-0deg（+16deg - （-16deg））<br>
          鼠标的x改为 盒子x-有效区域的left y 是 y-有效区域的top<br>
        
        targetYDeg = range/validBoxWidth * relativeLocationX - range/2 <br>
        targetXDeg = range/2 - range/validBoxHeight * relativeLocationY<br>
      </p>
      
        <div class="example">
          <div style="width:100px;height:100px; border: 1px solid black;background-color: pink;">
            <div style="width:100px;height:100px; background-color: lightblue;">HELLO WORLD!</div>
          </div>
          <div style="width:100px;height:100px; border: 1px solid black;background-color: pink;perspective: 200px;float:left;margin-right:10px;">
            <div style="width:100px;height:100px; background-color: lightblue;transform: rotateX(45deg);">HELLO WORLD!</div>
          </div>
          <div style="width:100px;height:100px; border: 1px solid black;background-color: pink;float:left; ">
            <div style="width:100px;height:100px; background-color: lightblue;transform: rotateX(45deg); transform-style: preserve-3d;">HELLO WORLD!</div>
          </div>
        </div>
        <h4>参考链接</h4>
      <ul>
        <li><a href="https://www.bilibili.com/video/BV1c64y1o76V">CSS transform 实现3D可旋转卡片 朝向鼠标的方向！-阿不不不</a></li>
        <li><a href="https://www.cnblogs.com/xiaohuochai/p/5351477.html">深入理解CSS变形transform(3d)</a></li>
        <li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect">getBoundingClientRect</a></li>
        <li><a href="https://cloud.tencent.com/">类似的例子</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
import { reactive,toRefs,ref } from '@vue/reactivity'
import {  onMounted } from '@vue/runtime-core'
export default {
  setup() {
    const size = reactive({
      width: 0,
      height: 0,
      left:0,
      top:0
    })
    const state = reactive({
      mx: 0,
      my: 0,
      rx: 0,
      ry: 0
    })
    const cardEle = ref(null);
    onMounted(()=>{
      const { width,height,top,left} = cardEle.value.getBoundingClientRect();
      console.log(width,height,top,left)
      size.width = width;
      size.height = height;
      size.top = top;
      size.left = left;
    })
    const getMouseLocation = (e)=>{
      const { width,height,top,left} = size;
      let { x , y} = e;
      x= x-left;
      y = y-top
      const degR = 16;
      state.ry = (x/(width/(degR *2))-degR).toFixed(1) + 'deg';
      state.rx = (degR-y/(height/(degR*2))).toFixed(1) + 'deg';
      state.mx = x;
      state.my = y;
    }
    const reset = ()=>{
      state.ry = '0deg'
      state.rx = '0deg'
    }
    return {
      ...toRefs(size),
      ...toRefs(state),
      cardEle,
      getMouseLocation,
      reset
    }
  },
}
</script>
<style lang="scss" scoped>
.example{
  display: flex;
}
.card-3d{
  width: 100%;
  height: 100%;
}
  .valid-area{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f0f0;
    width: 600px;
    height: 600px;
      .card{
        width: 220px;
        padding: 20px;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 6px 6px 12px #d1d9e6, -6px -6px 12px rgba(255,255,255,0.6);
        display: flex;
        flex-direction: column;
        align-items: center;

        transform-style: preserve-3d;
        transform: rotateX(var(--rx)) rotateY(var(--ry));
        transition: all 0.1s;
        .title{
          margin: 0;
          font-size: 20px;
          text-align: center;
          color: #666;
        }
        .card-number{
          width: 80%;
          height: 80px;
          border-radius: 20px;
          margin: 10px 0 20px 0;
          color: #fff;
          font-size: 16px;
          display: flex;
          align-items: center;
          background: #7f7fd5;
          background: -webkit-linear-gradient(to right, #91eae4,#86a8e7,#7f7fd5);
          background: linear-gradient(to right, #91eae4,#86a8e7,#7f7fd5);

          transform: translateZ(40px);
        }
        .lock{
          width: 30px;
          height: 30px;
          border: 1px solid #999;
          border-radius: 50%;
        }
      }
  }
</style>