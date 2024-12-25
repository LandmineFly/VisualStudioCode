//暴露方式1：分别暴露
//在所有需要暴露的变量声明前加上export关键字即可

export class Person {
	eat() {
		console.log("eating");
	}
}

export var value = 123;

export function fun() {
	console.log("function in test1");
}
