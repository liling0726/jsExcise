const person = new class{
    constructor(name){
        this.name=name
    }
    sayName(){
        console.log(this.name)
    }
}('Nicolas')

person.sayName()