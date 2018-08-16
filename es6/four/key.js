let obj = {
    1: 1,
    0: 0,
    [Symbol('c')]: Symbol('c'),
    3: 3,
    a: 'a',
    [Symbol('a')]: Symbol('a'),
    c: 'c',
    e: 'e',
    [Symbol('d')]: Symbol('d'),
    d: 'd'
}
console.log(Object.getOwnPropertyNames(obj).join(''),Object.getOwnPropertySymbols(obj))