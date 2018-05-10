
/* const node = {
    type: 'Identifier',
    name: 'foo',
    start: {
        pageNum: 1
    }
} */
/**
 * es5
 */
/* let type = node.type
let name = node.name
let pageNum = node.start.pageNum */

/**
 * es6
 */
/* let { type, name } = node */

//结构赋值
/* let node = {
    type: 'Identifier',
    name: 'foo'
} ,
type ='Literal',
name=5
function outputInfo(value){
    console.log(value)

}
outputInfo({type,name}=node)
console.log(type)
console.log(name) */
/* let {name,type}=1
console.log(name,type) */

/* let node=[]
node.type=1
let {type}=node
console.log(type,node.type) */
/* const node = {
    type: 'Identifier',
    name: 'foo',
    start: {
        pageNum: 1
    },
    logo:undefined,
    sex:null
}
let {logo='a',sex='男'}=node
console.log(logo)
console.log(sex) */
/* const node = {
    type: 'Identifier',
    name: 'foo',
    loc: {
        start:{
            line:1,
            column:1
        },
        end:{
            line:1,
            column:4
        }
    },
    range:[0,3]
} 
let {loc:{start},range:[startIndex]}
console.log(start.line)//1
console.log(startIndex)//0 */

/* function setCookie(name,value,options){
    options = options || {}
    let secure = options.secure,
    path=options.path,
    domain=options.domain,
    expires=options.expires
}
setCookie('type','js',{
    secure:true,
    expires:60000
}) */
function setCookie(name,value,{secure,path,domain,expires}){
    
}
setCookie('type','js',{
    secure:true,
    expires:60000
})