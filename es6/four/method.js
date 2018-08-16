let person ={
    // 方法 [[homeObject]]属性值为person
    getGreeting(){
        return 'hello'
    }
}
let friend = {
    getGreeting(){
        return super.getGreeting() +',hi'
    }
}

Object.setPrototypeOf(friend,person)
console.log(friend.getGreeting())

//不是方法
function shareGreeting(){

}