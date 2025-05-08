/**
 * 1. 初始化状态
 * 2. 实现 resolve 和 reject
 * 3. 实现了 then 方法 （支持同步异步， then 方法的多次调用）
 */
class IcePromise {
  // 1. promise 的状态
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";

  constructor(executor) {
    // 2. 初始化值
    this.status = IcePromise.PENDING;
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    // 3. 实现 resolve
    const resolve = (value) => {
      if (this.status === IcePromise.PENDING) {
        this.status = IcePromise.FULFILLED;
        this.value = value;

        this.onFulfilledCallbacks.forEach((cb) => cb(value));
      }
    };

    // 4. 实现 reject
    const reject = (reason) => {
      if (this.status === IcePromise.PENDING) {
        this.status = IcePromise.REJECTED;
        this.reason = reason;

        this.onRejectedCallbacks.forEach((cb) => cb(reason));
      }
    };

    try {
      // 5. 立即执行执行 executor
      executor(resolve, reject);
    } catch (error) {
      // 6. 如果执行 executor 时抛出异常，则将异常作为 reject 的参数
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    // 7. 如果 onFulfilled 不是函数，则将其转换为函数
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    // 8. 如果 onRejected 不是函数，则将其转换为函数
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    // 10. fulfilled 或者 rejected 状态 -> 其实是同步的 （因为在调用 then 的时候，promise 的状态已经确定了）
    if (this.status === IcePromise.FULFILLED) {
      setTimeout(() => onFulfilled(this.value));
    } else if (this.status === IcePromise.REJECTED) {
      setTimeout(() => onRejected(this.reason));
    } else {
      // 11. pending 状态 -> 异步的
      this.onFulfilledCallbacks.push(() => {
        setTimeout(() => onFulfilled(this.value));
      });
      this.onRejectedCallbacks.push(() => {
        setTimeout(() => onRejected(this.reason));
      });
    }
  }
}
