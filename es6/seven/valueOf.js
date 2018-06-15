/* //valueOf和toString()区别
let test={
    age:20,
    toString:function(){return this.age-10;},   //重写 toString()
    valueOf:function(){return this.age+40;}    //重写 valueOf()
}    
alert(test>20)//true valueof
alert(''+test)//60 valueof
alert(test)//60 valueof
alert(String(test))//10 toString
alert(Number(test))//60 valueOf
alert(test=='10')//false valueof

//只重写toString
let test1={
    age:20,
    toString:function(){return this.age-10;}   //重写 toString()
   
}    
alert(tes1t>20)//false toString
alert(''+test1)//10 toString
alert(test1)//10 toString
alert(String(test1))//10 toString
alert(Number(test1))//toString
alert(test=='10')//true toString

//只重写ValueOf
//valueOf和toString()区别
let test3={
    age:20,
    valueOf:function(){return this.age+40;}    //重写 valueOf()
}    
alert(test3>20)//true valueof
alert(''+test3)//60 valueof
alert(test3)//60 valueof
alert(String(test3))//[object Object]
alert(Number(test3))//60 valueOf
alert(test=='10')//false valueof */

Object.prototype.toString=null

let test4={
    age:20
}

let a=test4+2//报错