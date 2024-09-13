**前置知识**  
当使用了`display: flex` （弹性布局），该元素也称为 flex container，子元素称为 flex item 不再严格区分行内/块元素，一般用于一维布局布局中。
![flex-desc](../images/flex-desc.png)

## axis 轴

在介绍弹性布局之前，轴的概念至关重要，它决定了 flex-item 沿着什么样的方向进行布局。

1. 主轴 main axis
2. 交叉轴 cross axis

![flex-axis](../images/axis.png)

`flex-direction: row | column `  
通过该属性设置主轴的方向，默认为 row

<script setup>
import Direction from './components/Direction.vue'
</script>

<Direction />

## container attr

**常用属性如下**

1. justify-content
2. align-items

## item attr
