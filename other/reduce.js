
  function consoleA(value){
    console.log(value)
  }
  function consoleB(value,index){
    console.log(value)
    return value
  }

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => {
    return (...args) => {
      return a(b(...args))
    }
  })
}

const aa = compose(consoleA,consoleB)

aa(1,3)