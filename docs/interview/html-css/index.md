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
