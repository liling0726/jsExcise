//class内部语法

let personType = (function(){
    'use strict'
    const personType=function(name){
        if(new.target ===undefined){
            throw new Error('必须用new')
        }   
        this.name = name
    }

    Object.defineProperty(personType,'sayName',{
        value:function(){
            if(new.target !==undefined){
                throw new Error('不可以用new')
            }
            console.log(this.name)
        },
    })
    return personType
}())

const person =new personType('lily')
console.log(person)