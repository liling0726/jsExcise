let target = {}
let proxy = new Proxy(target,{})
proxy.name = 'proxy'
console.log(proxy.name,target.name)// propxy proxy
target.name = 'target'
console.log(proxy.name,target.name)// target target