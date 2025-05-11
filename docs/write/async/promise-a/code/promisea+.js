/**
 * 完整实现 promise A+
 */
class IcePromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";

  constructor(executor) {
    this.status = IcePromise.PENDING;
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === IcePromise.PENDING) {
        this.status = IcePromise.FULFILLED;
        this.value = value;

        this.onFulfilledCallbacks.forEach((cb) => cb(value));
      }
    };

    const reject = (reason) => {
      if (this.status === IcePromise.PENDING) {
        this.status = IcePromise.REJECTED;
        this.reason = reason;

        this.onRejectedCallbacks.forEach((cb) => cb(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    const promise2 = new IcePromise((resolve, reject) => {
      if (this.status === IcePromise.FULFILLED) {
        setTimeout(() => {
          try {
            if (typeof onFulfilled !== "function") {
              resolve(this.value);
              return;
            }
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      } else if (this.status === IcePromise.REJECTED) {
        setTimeout(() => {
          try {
            if (typeof onRejected !== "function") {
              reject(this.reason);
              return;
            }
            const x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      } else {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              if (typeof onFulfilled !== "function") {
                resolve(this.value);
                return;
              }
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              if (typeof onRejected !== "function") {
                reject(this.reason);
                return;
              }
              const x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
      }
    });

    return promise2;
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    throw new TypeError("Chaining cycle detected for promise");
  }

  if (x instanceof IcePromise) {
    x.then((res) => {
      resolvePromise(promise2, res, resolve, reject);
    }, reject);
  } else if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      const then = x.then;
      if (typeof then === "function") {
        let called = false;
        try {
          then.call(
            x,
            (y) => {
              if (called) return;
              called = true;
              resolvePromise(promise2, y, resolve, reject);
            },
            (r) => {
              if (called) return;
              called = true;
              reject(r);
            }
          );
        } catch (e) {
          if (called) return;
          called = true;
          reject(e);
        }
      } else {
        resolve(x);
      }
    } catch (e) {
      reject(e);
    }
  } else {
    resolve(x);
  }
}

IcePromise.deferred = function () {
  let res = {};
  res.promise = new IcePromise((resolve, reject) => {
    res.resolve = resolve;
    res.reject = reject;
  });

  return res;
};

module.exports = IcePromise;
