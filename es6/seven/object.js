const key1={a:1}
//对象
const key2={}
const map={}
//数组
const key3=[]
const key4 = [1,2]
//null
const key5=null
const key6=undefined

map[key1]=1
map[key2]=2
map[key3]=3
map[key4]=4
map[key5]=5
map[key6]=6
console.log('key1',key1.valueOf(),key1.toString())//key1 {a:1} '[object,Object]'
console.log('key3',key3.valueOf(),key3.toString())//key3 [] ''
console.log('key4',key4.valueOf(),key4.toString())//key4 [1,2] '1,2'
console.log('key5',String(key5))//key5 [] ''
console.log('key6',String(key6))//key6 [] ''
console.log(map[key1],map[key2],map[key3],map[key4],map[key5],map[key6])//2,2,3