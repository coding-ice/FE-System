var obj = {
  name: "ice",
  age: 24,
};

const proxyed = new Proxy(obj, {
  get(target, key) {
    console.log("get 触发");
    return target[key];
  },
  set(target, key, value) {
    console.log("set 触发"); // 1
    target[key] = value;
  },
  deleteProperty(target, key) {
    console.log("deleteProperty 触发"); // 2
    delete target[key];
  },
});

proxyed.address = "Hangzhou";
delete proxyed.address;
