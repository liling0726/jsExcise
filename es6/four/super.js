let person = {
    getGreeting(){
        return 'hello'
    }
}
let friend = {
    getGreeting(){
        //Object.getPrototypeOf(this) 返回是friend，再次调用friend.getGreeting(),导致递归调用
        // return Object.getPrototypeOf(this).getGreeting.call(this) + ', hi'
        return super.getGreeting() +',hi'
    }
}
Object.setPrototypeOf(friend,person)

let relative = Object.create(friend)

console.log(relative.getGreeting())
