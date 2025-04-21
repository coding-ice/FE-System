# 减少不必要的渲染

## Context

使用 Context 传递数据时，如果 Context 的值是一个对象，那么每次组件重新渲染，都会导致 Context 的值发生变化，从而导致组件重新渲染。
