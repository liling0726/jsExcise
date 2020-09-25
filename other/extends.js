// 借用构造函数
/**
 * 只能继承父类的实例属性和方法，不能继承原型属性/方法
 * 无法实现复用，每个子类都有父类实例函数的副本，影响性能
 */
function SuperType(){
}
SuperType.prototype.getColor=function(){
  return this.colors
}
SuperType.prototype.colors=["red", "blue", "green"];
SuperType.prototype.name='aaa'
function SubType(){
    //SuperType.call(this)
}
SubType.prototype=new SuperType()
const sub = new SubType()
sub.colors=['back']
sub.name='hhh'
console.log(sub.getColor(),sub.name) // 报错

const sub1 = new SubType()
console.log(sub1.getColor(),sub1.name) // 报错
// 组合继承
/* function SuperType(name){
  this.name = name || 'nike';
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
  console.log(this.name);
};

function SubType(name, age){
  // 继承属性
  // 第二次调用SuperType()
  SuperType.call(this, name);
  this.age = age;
} */

// 继承方法
// 构建原型链
// 第一次调用SuperType()
/* SubType.prototype = new SuperType(); 
// 重写SubType.prototype的constructor属性，指向自己的构造函数SubType
SubType.prototype.constructor = SubType; 
SubType.prototype.sayAge = function(){
    //console.log(this.age);
};

var instance1 = new SubType("Nicholas", 29);
console.log(instance1.name,instance1.__proto__.name,instance1.__proto__.__proto__.name)
instance1.colors.push("black");
console.log(instance1.colors); //"red,blue,green,black"
instance1.sayName(); //"Nicholas";
instance1.sayAge(); //29

var instance2 = new SubType("Greg", 27);
console.log(instance2.colors); //"red,blue,green"
instance2.sayName(); //"Greg";
instance2.sayAge(); //27 */
