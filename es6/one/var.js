function getValue(condition){
    if(condition){
        var value = 'blue' //变量提升
        
    }else{
        console.log('value',value)
    }
    return value
}
console.log(getValue(),getValue(true))// undefined blue