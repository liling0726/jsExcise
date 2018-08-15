var doSomething = function doSomethingElse(){

}
var person = {
    get firstName(){
        return this.name || 'nike'
    },
    set firstName(name){
        this.name = name
    },
    sayName(){
        console.log(this.name)
    }
}
console.log(doSomething.name)
console.log(doSomething.bind().name)
console.log(person.firstName.name)// undefined
console.log(person.sayName.name)
console.log(new Function().name)
// person.firstName = 'aa'