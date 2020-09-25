/**
 * 闭包
 */
"use strict";
/* function createCounter(initial) {
  var counter = initial;
  
  function increment(value) {
    console.log(this)
    var a=3
    counter += value; //闭包
    get()
  }
  
  function get() {
    console.log('1111')
    // return counter; // 闭包
  }
  
  return {
    increment: increment,
    get: get
  };
}

var myCounter = createCounter(100);
console.log(myCounter.get());   // 返回 100

myCounter.increment(5);
console.log(myCounter.get());   // 返回 105 */

/* function test1(){
  console.log('222')
}
const o = {
  value:1,
  add:function(incre){
    return this.value + incre
  },
  test:function(){
    // 不是closure
    this.add(1)
  }
}

o.test() */
var list = []
list.length = 5
for (var i = 0; i < list.length; i++) {
  ((i)=>setTimeout(()=>{
    console.log(i)
  },100))(i)
  
}