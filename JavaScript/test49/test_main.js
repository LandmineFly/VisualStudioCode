//导入方式1：直接导入
//这种导入方式实际上导入的是一个module对象，并赋值给as后跟的变量名中
//1.对于分别暴露和统一暴露，要暴露的变量就作为属性存储在module对象中
//2.而对于默认暴露，要暴露的变量则作为属性存储在default对象中，而default对象是module对象的一个属性
//  相当于多套了层皮
import * as m1 from "./test1.js";
import * as m2 from "./test2.js";
import * as m3 from "./test3.js";

new m1.Person().eat(); //eating
console.log(m2.value); //234
m3.default.fun(); //function in test3

//导入方式2：解构导入
//直接将希望导入的变量写在{}中，随后就能直接使用该变量，而无需通过module对象来访问
//注意：如果导入的变量中存在重名变量，则需要使用 as 为其取别名，否则会报错
import { value, fun } from "./test1.js";
import { value as v2, fun as f2 } from "./test2.js";

//对于默认暴露，只能导入default对象，并且必须起别名
import { default as d1 } from "./test3.js";
//因此ES6提供了更为简便的导入默认暴露的方式
//下面这条语句的作用就是导入default对象并起别名为d2，其效果与上面那条语句完全相同
import d2 from "./test3.js";

console.log(value); //123
f2(); //function in test2
console.log(d1.arg1); //456
d2.arg2(); //method in test3
