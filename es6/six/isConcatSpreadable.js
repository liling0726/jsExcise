const collection = {
    0: 'hello',
    1: 'world',
    length: 2,
    [Symbol.isConcatSpreadable]: true
}
let message = ['hi'].concat(collection)

console.log(message.length, message)//3，['hi','hello','world']


const collection1 = {
    0: 'hello',
    1: 'world',
    length: 2,
    [Symbol.isConcatSpreadable]: false
}
let message1 = ['hi'].concat(collection1)

console.log(message1.length, message1)//3，['hi',object]


const collection2 = {
    0: 'hello',
    1: {
        0: 'welcome',
        1: 'to',
        2: 'Symbol',
        length: 3,
        [Symbol.isConcatSpreadable]: true//为false也一致
    },
    length: 2,
    [Symbol.isConcatSpreadable]: true
}
let message2 = ['hi'].concat(collection2)
console.log(message2.length, message2)//3,['hi','hello',Object]