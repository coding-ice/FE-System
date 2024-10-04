const obj = {
  name: "ice",
  age: 24,
};

const proxyed = new Proxy(obj, {
  get(target, key, receiver) {
    return Reflect.get(target, key);
  },
  set(target, key, value, receiver) {
    console.log("set"); // set
    Reflect.set(target, key, value);
  },
  deleteProperty(target, key) {
    console.log("del"); // del
    Reflect.deleteProperty(target, key);
  },
});

proxyed.address = "Hangzhou";
delete proxyed.address;
