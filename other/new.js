function create() {
  // 创建一个空的对象
  let obj = new Object()
  // 获得构造函数
  // arguments是一个类数组对象，虽然他也有下标，但并非真正的数组，所以他不能和数组一样进行排序添加之类的操作，这种情况下 借用array.prototype对象上的方法，可以对arguments完成push，shift等操作，array.prototypr.slice()就可以吧arguments转换成真正的数组 
  let Con = [].shift.call(arguments)
  console.log(Con)
  // 链接到原型
  obj.__proto__ = Con.prototype
  // 绑定 this，执行构造函数
  let result = Con.apply(obj, arguments)
  // 确保 new 出来的是个对象
  return typeof result === 'object' ? result : obj
}
function Person(){

}
Person.prototype.getName=function(){
  return 'Nike'
}
var teacher = create(Person)
console.log(teacher)