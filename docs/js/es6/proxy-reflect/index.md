# Proxy & Reflect

## 早期痛点

在 ES6 以前，如何知道一个对象被访问了或者被赋值了呢？  
**Object.defineProperty**
通过下方案例，我们可以通过 closure 的方式，劫持对象中的 getter / setter

<<< ./demo/simple.js

如果需要劫持多个 key / value，可以通过以下方式，同时 Vue2 中，实现响应式原理也是通过该 API

<<< ./demo/mulit.js

虽然可以监听对象的 getter / setter，但是其他的操作比如：删除，新增 它是无能为力的，并且这个 API 设计的初衷并不是为了监听对象的。

## Proxy 代理

通过 Proxy 可以创建出一个代理对象，对代理对象进行一些列操作会被捕获器捕获

<<< ./demo/proxy.js

与 `Object.defineProperty` 不同的是，它有更强大的监听能力，有 13 个捕获器并且也能监听对象的新增，删除等。  
Vue3 源码中实现响应式则是通过 Proxy 的方式
