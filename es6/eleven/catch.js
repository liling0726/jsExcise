const promise = new Promise(()=>{
    throw new Error('error')
})
promise.then(null,(value)=>{
    console.log(value)
})