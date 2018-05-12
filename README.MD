ECMAScript

http://www.w3school.com.cn/js/pro_js_value.asp
http://www.w3school.com.cn/js/pro_js_primitivetypes.asp

变量分为两种类型：原始类型和引用类型

原始类型，即Undefined、Null、Boolean、Number和String
typeof(var) == undefined  => Undefined
typeof(var) == boolean    => Boolean
typeof(var) == number     => Number
typeof(var) == string     => String
typeof(var) == object     => 引用类型或Null
注意：undefined == null为真，undefined表示声明或定义了变量，但没有赋值，null表示变量不存在

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
Boolean、Number、String和对象均有toString()方法，方便进行类型转换
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

对象：
ES中将对象定义为"属性的无序集合，每个属性存放一个原始值、对象或函数"

类：
每个对象由类定义，类不仅要定义对象的接口（开发者访问的属性和方法），
还要定义对象的内部工作（使属性和方法发挥作用的代码）。
编译器和解释器会根据类的说明来构建对象

实例：
程序使用类创建对象时，生成的对象叫作类的实例（instance）。
对类生成的对象的个数的唯一限制来自于运行代码的机器的物理内存。
每个实例的行为相同，但实例处理一组独立的数据。由类创建对象实例的过程叫做实例化（instantiation）。

对象的构成
在 ECMAScript 中，对象由特性（attribute）构成，特性可以是原始值，也可以是引用值。
如果特性存放的是函数，它将被看作对象的方法（method），否则该特性被看作对象的属性（property）。

ES没有实际的类概念，变量的作用域也是公有的，没有私有的概念private.

关键字this总是指向调用该方法的对象
