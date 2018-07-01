class helper {
    constructor(){
        this.diff = 1
    }
    add(value){
        return value + this.diff
    }
}
const helper1 = new helper()
function translate(){
   const arr= Array.from(arguments,helper1.add,helper)//helper标识映射函数的this
    console.log(arr instanceof helper)//false
    return  arr
}

let numbers = translate(1,2,3,4)

console.log(numbers)