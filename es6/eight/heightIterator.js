function *createIterator(){
    yield 1
    yield 2
    yield 3
}
const iterator = createIterator()

console.log(iterator.next(4))
console.log(iterator.next(5))
console.log(iterator.next(6))

function *createIterator1(){
   let firstNum= yield 1
   //let secondNum=yield firstNum+2//thorw在secondNum赋值之前抛出错误
   let secondNum=0;
   try{
    secondNum=yield firstNum+2
   }catch(e){}
   
    yield secondNum+ 3
}
const iterator1 = createIterator1()

console.log(iterator1.next(4))//{value:1,done:false}
console.log(iterator1.next(5))//{value:7,done:false}
console.log(iterator1.throw(new Error('error')))//抛出错误，后面不在执行
console.log(iterator1.next(6))//{value:9,done:false}

//委托生成器
function *createIterator2(){
    yield 1
    yield 2
}
function * createIterator3(){
    yield 'red'
    yield 'green'
}

function *createIteratorCombine(){
    yield *createIterator2()
    yield *createIterator3()
    yield *['a','b']//分解
    yield *'lily'//分解
}

const iterator2= createIteratorCombine()
let result=iterator2.next()
while(!result.done){
    console.log(result)
    result=iterator2.next()
}
console.log(result)