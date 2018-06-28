class PersonType{
    constructor(name){
        this.name = name
    }
    get prsonName(){
        return this.name
    }
    set prsonName(name) {
        this.name = name
    }
}

const person = new PersonType('aa')

console.log(person.prsonName)//aa

person.prsonName = 'bb'
console.log(person.prsonName)//bb

const descriptor = Object.getOwnPropertyDescriptor(PersonType.prototype,'prsonName')
console.log('get' in descriptor)
console.log('set' in descriptor)