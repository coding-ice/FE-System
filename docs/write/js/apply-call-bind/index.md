# Apply & Call & Bind

## Apply

### 用法

<<< ./code/apply/apply_exam.js

1. 函数 `bar` 调用了 `apply` 方法，故 apply 方法是在 Function 的显示原型上
2. 当我们利用 apply 方法调用，传入的第一个参数是函数内部的 this
3. 第二个参数，传入一个数组，会以此展开给 bar 函数接受

### 实现

<<< ./code/apply/apply.js

## Call

### 用法

- 用法上与 apply 相似, 一个依次传递，一个传递数组

```js
x.call(this, "a", "b", "c");
x.apply(this, ["a", "b", "c"]);
```

### 实现

<<< ./code/call/call.js

## Bind

### 用法

### 实现
