let arr = Array.of(1, 2)
console.log(arr instanceof Array)

function createArray(arrCreator, ...value) {
    return arrCreator(...value)
}
let arr1 = createArray(Array.of, 1, 2, 3)
console.log(arr instanceof Array, arr1)

// Array.of方法不通过Symbol.specie属性确定返回值类型，使用当前构造函数（of中this值）来确定返回数据的类型
class MyArray extends Array {
    static get [Symbol.species](){
        return Array
    }
}

let arr2 = MyArray.of(1, 2)
let subArr = arr2.slice(0,1)
console.log(arr2 instanceof MyArray)//true
console.log(subArr instanceof MyArray)//false