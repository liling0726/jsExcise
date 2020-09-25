const p = new Promise((resolve)=>{
  console.log(resolve)
  resolve(1)
}).then((res)=>{
  console.log(res)
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(2)
    },1000)

  })
}).then(res=>{
  console.log(res)
})
