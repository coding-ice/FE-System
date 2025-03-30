# HTML & CSSS

## 什么是 SEO？有哪些常见的 SEO 方法？

SEO 称之为搜索引擎优化，通过该手段可以有效的提高 google / bing 类似搜索权重
**常见的优化手段**

1. 从 SPA 转换为 SSR，利用服务端渲染，因为传统的 SPA 都是通过 js 动态加载 dom 的，而服务端渲染可以把 dom 直接传递给客户端，**从而提升首屏渲染速度，以及搜索引擎优化**
2. 合理设置 metadata title、keywords、description
3. 合理的使用语义化标签 比如：h1/h2 img alt 属性等
4. 设置 robots.txt 告诉网络爬虫哪些可以爬取，以及过滤一下不需要爬取的文件

## script 标签中 defer async 的区别

解析一个 html 文件的时候，浏览器是从上至下开始解析，如果遇到 script 文件，那么就会开始下载 script 并且执行 script 代码，当 script 在 head 中，那么就会阻塞 dom tree 的构建，从而浪费性能  
defer 和 async 出现就是为了解决这一问题

**共同点**

- defer async 都是异步下载的，不会阻塞 dom tree 的构建 （并行）

**不同点**

- defer 是在 domContentLoaded 之前执行的，而 async 是立即执行的
- defer 的执行是先后是有序的，而 async 是无序的

![defer-async](../image/async-defer.png)

**最佳实践**

```html
<html>
  <head>
    <script defer src="./demo.js"></script>
  </head>
  <body>
    <div>ice</div>
  </body>
</html>
```

利用 defer 的属性，把 script 写在 head 中，尽可能的早点下载，不阻塞 dom tree 的构建，从而提升性能

## 物理像素 逻辑像素

**物理像素**  
它是真实存在的，比如每个手机的分辨率不同（硬件决定的），那么物理像素就不同。

**逻辑像素**  
它是虚拟的概念（抽象的），也称之为 css 像素。 比如我们日常开发 100px 的宽度，那么这个 100px 就是逻辑像素，即使是不同分辨率下，展示的大小是一致的。

**设备像素比**
它是物理像素和逻辑像素的比值，也就是 一个 css 像素等于多少个物理像素，如果比值越大，物理像素越多，那么显示的就更清晰更细腻。

```js
window.devicePixelRatio;
```

**移动端 2/3 倍图适配**

```css
.bg {
  background-image: url(./bg-1x.png);
}

@media screen and (min-resolution: 2dppx) {
  .bg {
    background-image: url(./bg-2x.png);
  }
}

@media screen and (min-resolution: 3dppx) {
  .bg {
    background-image: url(./bg-3x.png);
  }
}
```

背景图片可以利用媒体查询，可以适配不同的 DPR 比值

## 1px 问题

**为什么会出现 1px 问题？**

在实际开发中，一般 ui 给的设计图都是 750px 的，但是在实际开发中都是最小适配的 375px 的，在 750 中的 1px，其实在 375 中需要为 0.5px，但是很多浏览器 css 不支持 0.5px。

::: details 解决办法
<<< ./code/1px.html
:::
