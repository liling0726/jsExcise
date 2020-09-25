/*
 * @Descripttion: 
 * @version: 
 * @Author: liling09
 * @Date: 2019-08-13 10:36:45
 * @LastEditors: liling09
 * @LastEditTime: 2019-08-13 10:43:02
 */
console.log(Number(NaN))
console.log(Number(12))
console.log(Number('12'))
console.log(Number('1243blue'))
console.log(Number({a:123}))
console.log(Number({0:'1'}))
console.log(Number(true))
console.log(Number([123]))
// parseInt
console.log(parseInt(NaN))
console.log(parseInt(12))
console.log(parseInt('12'))
console.log(parseInt('1243blue'))
console.log(parseInt('blue123'))
console.log(parseInt({a:123}))
console.log(parseInt({0:'1'}))
console.log(parseInt(true))
console.log(parseInt([123,2]))
