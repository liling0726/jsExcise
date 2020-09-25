/* class App extends Date {
 constructor(){
   super()
   console.log('app')
 }
}

var newApp = new App()
console.log(new Date().getDate(),Date.now())
console.log(newApp.getDate(),App.now()) */

function NewDate(){
  this.say=function(){
    console.log('test')
  }
}
class Date extends NewDate {
  constructor(){
    super()
    console.log('app')
  }
 }

new Date().say()
console.log(Date.now())