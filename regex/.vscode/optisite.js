// 反向引用

const str = `people in the lonely is the most easy to fall in love with som`

console.log(str.match(/(the).+\1/g))
console.log(str.replace(/(people in the lonely) (is) (the most easy to fall in love with som)/,'$3 $2 $1'))