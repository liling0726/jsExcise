/**
 * 简单的promise
*/
class MyPromise{
  constructor(excutor){
    this.resolveArr = []
    this.rejectArr = []
    const _resolve = (value)=>{
      while(this.resolveArr.length){
        const fn = this.resolveArr.shift()
        fn(value)
      }
    }
    const _reject = (value)=>{
      while(this.resolveArr.length){
        const fn = this.resolveArr.shift()
        fn(value)
      }
    }
    excutor(_resolve,_reject)
  }
  then=(resolve,reject)=>{
    resolve && this.resolveArr.push(resolve)
    reject && this.rejectArr.push(reject)
  }
}

new MyPromise((resolve,reject)=>{
  setTimeout(()=>{
    console.log(1)
    resolve(2)
  },1000)
}).then((value)=>{
console.log(value)
})