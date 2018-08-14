/* var funcs = []
for(var i =0;i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs.forEach((item)=>{
    item()
}) // 10个10
 */
var funcs=[]
var obj ={
    test:function(value){
        console.log(this)//obj
        return function(){
            console.log(value,this)//  this:gloabal
        }
    }
}
for(var i =0;i<10;i++){
    funcs.push(obj.test(i))
}

funcs.forEach((item)=>{
    item()
})

/* 
function test(value){
    return function(){
        console.log(value)//闭包
    }
}
test(123)() */