let target = {}
let proxy = new Proxy(target,{
    get(trapTarget,key,receiver){
        if(!(key in receiver)){
            throw new TypeError('属性'+key+'不存在')
        }
        return Reflect.get(trapTarget,key,receiver)
    }
})

console.log(proxy.name)