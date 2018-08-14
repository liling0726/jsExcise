let proxy = new Proxy({},{
    ownKeys(trapTarget){
        return Reflect.ownKeys(trapTarget).filter((key)=>{
            return typeof key !== 'string' || key[0]!=='_'
        })
    }
})

let symbolName = Symbol('name')
proxy.name='proxy'
proxy._name='_private'
proxy[symbolName]='symbol'
let proxy1 = Object.assign({},proxy,{
    age:20,
    _age:21
})
console.log(Object.getOwnPropertyNames(proxy),Object.getOwnPropertySymbols(proxy),Object.keys(proxy),proxy1)
