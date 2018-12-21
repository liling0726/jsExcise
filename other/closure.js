/**
 * 闭包
 */
"use strict";
function createCounter(initial) {
  var counter = initial;
  
  function increment(value) {
    console.log(this)
    var a=3
    counter += value; //闭包
    get()
  }
  
  function get() {
    return counter; // 闭包
  }
  
  return {
    increment: increment,
    get: get
  };
}

var myCounter = createCounter(100);
console.log(myCounter.get());   // 返回 100

myCounter.increment(5);
console.log(myCounter.get());   // 返回 105