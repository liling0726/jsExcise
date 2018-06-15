let o = {
    createIterator:function*(items){

    }
}
let values=[1,2,3]
let iterator=values[Symbol.iterator]()

//可迭代对象
let o1 ={
    items:[],
    *[Symbol.iterator](){
        for(item of items){
            yield item
        }
    }
}
//字符串站化成数组
const str= 'qqqqqcnhvhf'
console.log([...str])

