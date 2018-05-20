
// 许多面向对象的语言都有修饰器（Decorator）函数，用来修改类的行为

import { mixins } from './mixins'

const Foo = {
  foo() { console.log('foo') }
};

@mixins(Foo)
class MyClass {}

let obj = new MyClass();
obj.foo() // 'foo'
