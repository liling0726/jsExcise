let target = {
    name:'target'
}
let proxy = new Proxy(target,{
    set(trapTarget,key,value,receiver){
        if(!trapTarget.hasOwnProperty(key)){
            if(isNaN(value)){
                throw new TypeError('属性必须是数字')
            }
        }
        return Reflect.set(trapTarget,key,value,receiver)
    }
})

proxy.count = 1

proxy.name = 'proxy'
try {
    proxy.anotherTarget = 'target'
} catch (error) {
    
}


console.log(proxy.count,proxy.name,proxy.anotherTarget,proxy,target)// 1 proxy undefined