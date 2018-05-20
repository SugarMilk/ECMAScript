// 使用global创建单例

function A(){
  this.foo = 'hello';
}

if (global._foo == undefined) {
  global._foo = new A();
}

module.exports = global._foo;

// 测试??
const a = require('./mod.js');
console.log(a.foo);
