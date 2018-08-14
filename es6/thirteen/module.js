
export * from './module1.js'
console.log('this的值',this)
export  const obj = {
    name:'123'
}
const test = 'test' 

export { test as default}

/* 
// 报错
const test2 = 'test2'
export { test2 as default} */