### Masonry Layout 中文译作瀑布流效果
pinterest就是最好的例子
![pinterest](https://z3.ax1x.com/2021/09/25/4saN3d.png)
特点是内容由多个不同高度的方格组成，列的宽度是相同的，以版面切割为多个直行，这些方格在直行中一个接着一个排列，所以行与行之间会有一些不整齐的感觉
最容易的方法就是直接加载别人写好的javascript套件，例如masonry.js Isotope.js,原理是通过js计算总共多少个方格，再计算每一个方格的宽度和高度。

通过https://picsum.photos/360/460?random=1 可获得在线的随机图片
-CodingStartup起码课















## 使用 padding 实现图片自适应并保持宽高比
``` scss
.img-wrapper{
  position: relative;
  width: 100%;
  padding-bottom: 66%;
  img{
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
```

## css动画库链接
动画库官网链接：
- https://animista.net/
- https://www.minimamente.com/category/css/
- http://guowc.github.io/animastore/
- https://elrumordelaluz.github.io/csshake/
- https://ianlunn.github.io/Hover/
- https://angrytools.com/css/animation/