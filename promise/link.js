/**
 * 简单的promise
 * 添加状态 Pending, 
 * 添加链式调用
*/
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise{
  constructor(excutor){
    this.resolveArr = []
    this.rejectArr = []
    this._status = PENDING
    const _resolve = (value)=>{
      if(this._status !== PENDING )return 
      this._status = FULFILLED
      while(this.resolveArr.length){
        const fn = this.resolveArr.shift()
        fn(value)
      }
    }
    const _reject = (value)=>{
      if(this._status !== PENDING )return 
      this._status= REJECTED
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
    return this
  }
}

 new MyPromise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(1)
  },1000)
}).then((value)=>{
  console.log(value)
  return 2
  }).then((value)=>{
    console.log(value)
    
    }).then((value)=>{
      console.log(value)
      })