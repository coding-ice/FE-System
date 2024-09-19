# Bom

Bom 全称是 Browser Object Model （浏览器对象模型）

### 客户端存储

#### localStorage

- 存储在 localStorage 的数据可以长期保留
- 可以被同源访问

#### sessionStorage

- 存储在 sessionStorage 的数据在会话关闭后清除
- 需要注意的是
  - 在存储了 sessionStorage 的会话，打开一个同源的会话，即使是新窗口打开，也会复制当前浏览会话的上下文到新窗口中
  - 复制一个会话，同样会共享上下文，但是新创建一个标签页，输入同样的地址，不会共享
