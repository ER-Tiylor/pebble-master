<template>
  <div class="css-typing">
    <h1><span>H</span>elloWorld!</h1>
  </div>
</template>
<script>
export default {
  setup() {
    
  },
  mounted(){
    console.log("vue中有问题")
    const h1 = document.querySelector('h1');
    h1.innerHTML = h1.textContent.replace(/\S/g,"<span>$&</span>");
    let delay = 0;
    document.querySelector('span').forEach((span,index)=>{
      delay+=1;
      if(index==6) delay=0.3;
      span.style.setProperty('--delay',`${delay}s`)

    })
    console.log(234,h1)
  },
  updated(){
    
    
  }
}
</script>
<style lang="scss" scoped>
:root{
  font-size: 20px;
}
.css-typing{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  h1{
    font-size: 6rem;
    margin: 0;
    padding: 0;
    font-family: monospace;
    position: relative;
    // animation: 3s typing steps(12, jump-none) forwards;
    span {
      display: inline-block;
      overflow: hidden;
      width: 0ch;
      animation: 0.1s text-in ease-in-out forwards;
      animation-delay: var(--delay);
    }
    &::after{
    content: '';
    display: inline-block;
    position: absolute;
    width: 10px;
    height: 6rem;
    background-color: #000;
    border-radius: 2px;
    right: -30px;
    animation: 1.1s cursor steps(2,jump-none) infinite;
  }
  }
  @keyframes cursor {
    from{
      opacity: 0;
    }to{
      opacity: 1;
    }
  }
  @keyframes text-in {
      from{
        width: 0ch;
      }
      to{
        width: 1ch;
      }
      
    }
}
</style>