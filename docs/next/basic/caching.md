# 缓存策略

![缓存策略](./images/caching.png)

## 请求记忆 Request Memoization

这是 react 的缓存策略，在 nextjs 中 (服务端组件)，无论是在 layout / page / 组件中，fetch 相同的请求 & 参数，返回值会被缓存，不会多次发送请求

### 示例

```tsx
import { useEffect, useState } from "react";

async function getData() {
  const result = await fetch("https://api.thecatapi.com/v1/images/search");
  return await result.json();
}

const HomePage = async () => {
  const [data] = await getData();

  return (
    <div>
      <h3>{data.id}</h3>
      <img style={{ width: 300 }} src={data.url} alt="cat" />
      <hr />
      <ImgCache />
    </div>
  );
};

const ImgCache = async () => {
  const [data] = await getData();

  return (
    <>
      <h3>{data.id}</h3>
      <img style={{ width: 300 }} src={data.url} alt="cat" />
    </>
  );
};

export default HomePage;
```

### 如何退出缓存

这是 react 的缓存 `cache` 策略，不推荐退出

```tsx
async function getData() {
  const { signal } = new AbortController(); // [!code ++]
  const result = await fetch("https://api.thecatapi.com/v1/images/search", {
    signal, // [!code ++]
  });
  return await result.json();
}
```

## 数据缓存

数据缓存是指：如果是静态渲染，构建的时候会进行预渲染，生成数据缓存和完整路由缓存，下次访问的时候不会重新在服务端请求数据，而是直接返回缓存的数据 (缓存：JSON)  
退出数据缓存，同时会变为动态渲染 （退出完整路由缓存）

```tsx
async function getData() {
  const result = await fetch("https://api.thecatapi.com/v1/images/search", {
    cache: 'no-store' [!code ++]
  });
  return await result.json();
```

## 完整路由缓存

## 路由缓存
