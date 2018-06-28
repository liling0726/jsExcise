
//console.log(typeof personClass)//报错
class personClass{
    constructor(name){
        this.name=name
    }

    sayName(){
        console.log(this.name)
    }
}
//赋值无效，类属性不可被赋予新值，

/* personClass.sayName = function(){
    console.log('重新赋值')
}
personClass.name='haha' */
console.log(typeof personClass)
//const person1 = personClass('aa')、、报错，只能通过new

const person = new personClass('jone')
//const sayName = new person.sayName()//类方法不包含constructor属性
person.sayName()//jone

function Person(name){
    this.name = name
}
Person.prototype.sayName=function(){
    console.log(this.name)
}

const person2=new Person('fn name')

const sayName = new person2.sayName() //输出undefined

