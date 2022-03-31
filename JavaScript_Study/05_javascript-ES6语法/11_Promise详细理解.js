/**
 * Promise一种异步调用的规范, 解决回调地狱问题
 * 理解Promise构造函数的三种状态, pendding, fulfilled, rejected
 * 状态一经转换, 不再改变,
 */

const promise = new Promise((resolve, reject) => {
  // 这里传入executor执行器, 此时调用constructor构造函数会初始化一系列默认参数
  // state、resolve, reject, reason等等状态, 且初始化状态为pendding
  const random = Math.random();
  // if(random > 0.5) {
  //   setTimeout(() => {
  //     resolve()
  //   }, 1000);
  // } else {
  //   setTimeout(() => {
  //     reject()
  //   }, 1000);
  // }
  // console.log(111);
})

/**
 * promise的then方法都是同步执行的默认会返回一个promise, 同时初始化状态
 * 状态会随着返回值的而受到影响, 如果不反悔或不写then参数回调, 那么返回promise会随上一个调用一致
 * 如果返回普通, 即状态转换为onFulfilled状态, 如果返回一个promise则会受promise的影响, 或者实现thenable接口也会受到影响
 */
const p1 = promise.then(() => {
  console.log("i am onFulfilled");
  return Promise.resolve()
})
// setTimeout(() => {
//   console.log(p1);
// }, 3000);
// const p2 = p1.catch(() => {
//   console.log("i am onRejected");
// })
// setTimeout(() => {
//   console.log(p2);
// }, 3000);


// 使用async修饰的函数, 对外是异步调用的, 默认会返回一个Promise对象, 
// 如果自己返回普通值则promise包裹后返回, 以上返回值原理和promise类似, 
// 状态也随之返回值有关系
async function f1() { // f1函数调用时
  console.log(11111);
  // await后面必须修饰一个promise, 并且会阻塞代码执行, 直到状态返回,
  // await修改promise的状态的变化会改变async函数返回promise的状态变化
  try {
    await new Promise((resolve, reject) => {
      // resolve()
      // reject()
      setTimeout(() => {
        // resolve()
        reject()
      }, 5000);
    })
  } catch(e) {
    console.log("fail");
  }
  // 这里被await阻塞了5000ms, 转而执行外部代码成为异步
  console.log(444);


}
const a = f1()
a.then((res) => {
  console.log("onFulfilled", res);
}).catch(err => {
  console.log("onRejected", err);
})
console.log(a);
console.log(2222);