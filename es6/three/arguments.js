'use strict'
function  mixArgs(first,second){
    console.log(first === arguments[0])
    console.log(second === arguments[1])
    first = 'c'
    second = 'd'
    console.log(first === arguments[0])
    console.log(second === arguments[1])
}
mixArgs('a','b')