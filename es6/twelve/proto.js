let target1={}
let result1 = Object.setPrototypeOf(target1,{})

let target2 = {}
let result2 = Reflect.setPrototypeOf(target2,{})

console.log(target1===result1,target2===result2,result2)// true false true