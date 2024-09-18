# Dom & Event

dom 的全称是 document object model （文档对象模型）

## Dom 树

顾名思义，它是一个树结构，如下图所示
![alt text](./images/dom.png)

## data-\*

在 HTML5 中，我妈可以通过 data-\* 自定义属性，它可以从 dataset 属性中获取

```html
<div class="info" data-name="ice" data-age="24"></div>

<script>
const info = document.querySelector(".info")
console.log(info.dataset) // { name: 'ice', age: 24 }
<script/>
```

## 元素的大小与滚动

### client

::: details
<<< ./demo/client.html
:::

- ClientWidth  
   contentWidth + paddingWidth （不包含滚动条）
- ClientHeight  
   contentHeight + paddingHeight （不包含滚动条）
- ClientTop  
   borderTop 的宽度 （上边框）
- ClientLeft  
   borderLeft 的宽度 （左边框）

### offset

::: details
<<< ./demo/offset.html
:::

- offsetWidth  
  元素的完整宽度 -> borderWidth + ClientWidth（含滚动条宽度）
- offsetHeight  
  元素的完整高度 -> borderHeight + ClientHeight （含滚动条高度）
- offsetTop  
  距离父元素的 X
- offsetLeft  
  距离父元素的 Y

### scroll

- scrollHeight 整个可滚动区域的高度

- scrollTop 滚动被卷进去的高度

## window 上的大小与滚动

### width/height

- innerWidth / innerHeight: window 窗口的宽度/高度 (包括滚动条)

- outerWidth / outerHeight: window 窗口整个的宽度/高度 （包含调试器等）

### 滚动位置

- scrollX X 轴的滚动位置
- scrollY Y 轴的滚动位置
- scrollTo (X, Y) 页面滚动 至 绝对坐标
