/* // 第一版
Function.prototype.call2 = function(context) {
  // 首先要获取调用call的函数，用this可以获取
  context.fn = this; 		// foo.fn = bar
  context.fn();			// foo.fn()
  delete context.fn;		// delete foo.fn
}

// 测试一下
var foo = {
  value: 1
};

function bar() {
  console.log(this.value);
}

bar.call2(foo); // 1 */

// 传递参数
Function.prototype.call2 = function(context) {
  // 首先要获取调用call的函数，用this可以获取
  context.fn = this; 		// foo.fn = bar
  var args = [];
  for(var i = 1, len = arguments.length; i < len; i++) {
      args.push('arguments[' + i + ']');
  }
  eval('context.fn('+args+')') // foo.fn()
  delete context.fn;		// delete foo.fn
}

// 测试一下
var foo = {
  value: 1
};

function bar() {
  console.log(this.value);
}

bar.call2(foo); 

// context 为 null或者undefined ，this指向window,函数可能存在返回值
Function.prototype.call2 = function(context) {
  // 首先要获取调用call的函数，用this可以获取
  context = context || window
  context.fn = this; 		// foo.fn = bar
  var args = [];
  for(var i = 1, len = arguments.length; i < len; i++) {
      args.push('arguments[' + i + ']');
  }
  var result = eval('context.fn('+args+')') // foo.fn()
  delete context.fn;		// delete foo.fn
  return result
}