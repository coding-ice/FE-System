/**
 * 1. 实现 promise then 方法，支持同步异步以及多次调用
 */

class IcePromise {
  static PENDING = "PENDING";
  static RESOLVE = "RESOLVE";
  static REJECT = "REJECT";

  constructor(exextor) {
    this.status = IcePromise.PENDING;
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === IcePromise.PENDING) {
        this.status = IcePromise.RESOLVE;
        this.value = value;

        this.onFulfilledCallbacks.forEach((fn) => fn(this.value));
      }
    };

    const reject = (reason) => {
      if (this.status === IcePromise.PENDING) {
        this.status = IcePromise.REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn(this.reason));
      }
    };

    try {
      exextor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === IcePromise.PENDING) {
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }
    if (this.status === IcePromise.RESOLVE) {
      onFulfilled(this.value);
    }
    if (this.status === IcePromise.REJECTED) {
      onRejected(this.reason);
    }
  }
}

const p = new IcePromise((resolve, reject) => {
  // reject("error");
  setTimeout(() => {
    resolve(100);
  }, 3000);
});

p.then(
  (v1) => {
    console.log(v1);
  },
  (e) => {
    console.log(e);
  }
);
p.then(
  (v2) => {
    console.log(v2);
  },
  (e) => {
    console.log(e);
  }
);
