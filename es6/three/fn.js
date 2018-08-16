var value = 1
let person1 =((name)=>{
    return {
        getName(){
            console.log(value)
            return name
        }
    }
})('Nicholas')

person1.getName()
// 闭包
/*  var person = {
     name:'name',
     getName(){
        return this.name
    }
 }

 function test(){
     console.log('123')
 }

const promise = new Promise((resovle,reject)=>{
    setTimeout(()=>{
        resovle('resolve')
    })
})
promise.then((res)=>{
    console.log(test())
}) */

