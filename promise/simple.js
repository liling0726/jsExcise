/**
 * 简单的promise
*/

// 三种状态
const PENDING = 'pending'
const FULLFILLED = 'fullfilled'
const REJECTED = 'rejected'
class MyPromise {
  constructor(excutor) {
    this.resolveArr = []
    this.rejectArr = []
    this._value = undefined
    this._status = PENDING
    const _resolve = (value) => {
      const run = () => {
        if (this._status !== PENDING) {
          return
        }
        this._value = value
        this._status = FULLFILLED
        while (this.resolveArr.length) {
          const fn = this.resolveArr.shift()
          fn(value)
        }
      }
      setTimeout(run)
    }
    const _reject = (value) => {
      const run = () => {
        if (this._status !== PENDING) {
          return
        }
        this._value = value
        this._status = REJECTED
        while (this.resolveArr.length) {
          const fn = this.resolveArr.shift()
          fn(value)
        }
      }
      setTimeout(run)
    }
    excutor(_resolve, _reject)
  }
  // 返回一个新的promise，为了向下传递返回值
  then = (resolveFn, rejectFn) => {
    typeof resolveFn !== 'function' ? (resolveFn = value => value) : null
    typeof rejectFn !== 'function' ? (rejectFn = reason => {
      throw new Error(reason instanceof Error ? reason.message : reason)
    }) : null
    return new MyPromise((resolve, reject) => {
      const _resolve = (value) => {
        try {
          const x = resolveFn(value)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)

        } catch (error) {
          reject()
        }
      }
      const _reject = (value) => {
        try {
          const x = rejectFn(value)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)

        } catch (error) {
          reject()
        }
      }
      // 当前是pending状态才加入
      switch (this._status) {
        // 当状态为pending时,把then回调push进resolve/reject执行队列,等待执行
        case PENDING:
          this.resolveArr.push(_resolve)
          this.rejectArr.push(_reject)
          break;
        // 当状态已经变为resolve/reject时,直接执行then回调
        case FULFILLED:
          _resolve(this._value)    // this._value是上一个then回调return的值(见完整版代码)
          break;
        case REJECTED:
          _reject(this._value)
          break;
      }
    })

  }
  catch = (rejectFn) => {
    return this.then(undefined, rejectFn)
  }
  //finally方法
  finally(callback) {
    return this.then(
      value => MyPromise.resolve(callback()).then(() => value),             // MyPromise.resolve执行回调,并在then中return结果传递给后面的Promise
      reason => MyPromise.resolve(callback()).then(() => { throw reason })  // reject同理
    )
  }
  static resolve = (value) => {
    if (value instanceof MyPromise) {
      return value
    }
    return new MyPromise(resolve => resolve(value))
  }
  reject = (value) => {
    return new Promise(undefined, reject => reject(value))
  }
  all = (promiseList) => {
    return new Promise((resolve, reject) => {
      let index = 0
      let arr
      promiseList.forEach((promiseItem, i) => {
        promiseItem().then(data => {
          arr[i] = data
          index++
          if(index===promiseList.length){
            resolve(arr)
          }
        }).catch(()=>{
          reject()
        })

      });
    })
  }
  race=()=>{
    return new Promise((resolve, reject) => {
      promiseList.forEach((promiseItem, i) => {
        promiseItem().then(data => {
          resolve(arr)
        }).catch(()=>{
          reject()
        })

      });
    })
  }
}

/* // 链式调用
const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 500);
})

p1
  .then(res => {
    console.log(res)
    return 2
  })
  .then(res => {
    console.log(res)
    return 3
  })
  .then(res => {
    console.log(res)
  }) */
const p1 = new MyPromise((resolve, reject) => {
  resolve(1)          //同步executor测试
})

p1
  .then(res => {
    console.log(res)
    return 2          //链式调用测试
  })
  .then()             //值穿透测试
  .then(res => {
    console.log(res)
    return new MyPromise((resolve, reject) => {
      resolve(3)      //返回Promise测试
    })
  })
  .then(res => {
    console.log(res)
    throw new Error('reject测试')   //reject测试
  })
  .then(() => { }, err => {
    console.log(err)
  })
