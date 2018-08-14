/* // 挂起态
 const promise = new Promise((resolve,reject)=>{
    console.log('aaa')
})

Promise.resolve(promise).then((value)=>{
    console.log(value)
}) 
 Promise.reject(promise).then(null,(value)=>{
    console.log(value)
})  
Promise.reject(promise).catch((value)=>{
    console.log(value)
}) */
