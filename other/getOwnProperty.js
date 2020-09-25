var o = {};
for (var i = 0; i < 10; i++) {
  o['_' + String.fromCharCode(i)] = i;
}
var a= Object.getOwnPropertyNames(o).map(function(n) { return o[n]; })
console.log(a,o)
