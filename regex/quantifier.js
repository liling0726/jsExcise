// 量词

const quanStr  = `1
22
333
4444
55555
666666
7777777
88888888
999999999
0000000000`

// [''],学习正则表达式中说的是，第一个5被标亮
console.log(quanStr.match(/5?/))
// ['']
console.log(quanStr.match(/5??/))


// ['']
console.log(quanStr.match(/5*?/))
// ['']
console.log(quanStr.match(/5*?/))


//['55555']
console.log(quanStr.match(/5+/))
//['5']
console.log(quanStr.match(/5+?/))


//['55555']
console.log(quanStr.match(/5{2,5}/))
//['55']
console.log(quanStr.match(/5{2,5}?/))


//['55']
console.log(quanStr.match(/5{2}/))
//['55']
console.log(quanStr.match(/5{2}?/))


//['55555']
console.log(quanStr.match(/5{2,}/))
//['55']
console.log(quanStr.match(/5{2,}?/))

