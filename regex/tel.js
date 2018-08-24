/**
 * 北美电话
 */
const reg = /^(\(\d{3}\)|^\d{3}[.-]?)?\d{3}[.-]?\d{4}$/
console.log(reg.test(1234567))