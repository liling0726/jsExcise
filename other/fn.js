function test(){
  console.log(this)
  this.a= '123'
  return {
    a:1
  }
}
test.prototype.getName=function(){
  return 'aa'
}
const sub =  new test()

console.log(sub,sub.a,global.a)// 有返回值的时候报错