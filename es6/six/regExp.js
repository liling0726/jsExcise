const hasLengthOf10 = {
    [Symbol.match]:function(value){
        return value.length===10 ? value :null
    },
    [Symbol.replace]:function(value,replacement){
        return value.length===10 ? replacement :value
    },
    [Symbol.search]:function(value){
        return value.length===10 ? 0 :-1
    },
    [Symbol.split]:function(value){
        return value.length===10 ? [,] :[value]
    }
}
const message1 = 'hello world',
message2 = 'hello john'

let match1=message1.match(hasLengthOf10)
let match2=message2.match(hasLengthOf10)

console.log('match:',match1,match2)

let replace1=message1.replace(hasLengthOf10,'aa')
let replace2=message2.replace(hasLengthOf10)

console.log('replace:',replace1,replace2)

let search1=message1.search(hasLengthOf10)
let search2=message2.search(hasLengthOf10)

console.log('search:',search1,search2)

let split1=message1.split(hasLengthOf10)
let split2=message2.split(hasLengthOf10)

console.log('split:',split1,split2)
//正则
/* RegExp.prototype= {
    [Symbol.match]:function(value){
        return value.length===10 ? value :null
    },
    [Symbol.replace]:function(value,replacement){
        return value.length===10 ? replacement :value
    },
    [Symbol.search]:function(value){
        return value.length===10 ? 0 :-1
    },
    [Symbol.split]:function(value){
        return value.length===10 ? [,] :[value]
    }
}

const message1 = 'hello world',
message2 = 'hello john'

let match1=message1.match('world')
let match2=message2.match('world')

console.log('match:',match1,match2)//match :['word'],null

let replace1=message1.replace('hello','aa')
let replace2=message2.replace('hello','aa')

console.log('replace:',replace1,replace2)

let search1=message1.search('hello')
let search2=message2.search('join')

console.log('search:',search1,search2)

let split1=message1.split('o')
let split2=message2.split('o')

console.log('split:',split1,split2) */