Object.prototype.getName=function(){
  return 'Nike'
}
/* var fruits = ['苹果','香蕉',Symbol('aa')]
for (var i in fruits){
  console.log(i, ' : ',fruits[i])
} */

var obj = {
  [Symbol('id')]: '123',
  name:'nike'
}
for (var i in obj){
  console.log(i, ' : ',obj[i])
}