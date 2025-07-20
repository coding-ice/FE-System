## 动态路由

```
1. [folderName]

/blog/[id]/page.tsx -> path: /blog/:id

2. [...folderName]

匹配后面所有的路径
/blog/[...slug]/page.tsx
/blog -> 不匹配
/blog/product/123/page.tsx -> params: {slug: ['product', '123']}

3. [[...folderName]] 代表可选的

/blog/[[...slug]]/page.tsx
/blog -> 匹配
/blog/product/123/page.tsx -> params: {slug: ['product', '123']}

```
