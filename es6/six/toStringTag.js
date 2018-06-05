function Person(person){
    this.person=person
}
//Person.prototype[Symbol.toStringTag]="Person"

const me = new Person('aa')

console.log(me.toString())
console.log(Object.prototype.toString.call(me))