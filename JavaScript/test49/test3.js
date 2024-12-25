class Person {
	talk() {
		console.log("talking");
	}
}

var value = 345;

function fun() {
	console.log("function in test3");
}

//暴露方式3：默认暴露
//看似与统一暴露类似，但其实差别不小
//1.默认暴露的{}实际上是一个对象，因此可以在该对象中即时声明需要暴露的变量
//  而统一暴露的{}中只能写已声明的变量
//2.当模块被导入时，统一暴露的暴露变量作为属性存储在module对象中
//  默认暴露的暴露变量作为属性存储在default对象中，而default对象则作为属性存储在module对象中
export default {
	Person,
	value,
	fun,
	arg1: 456,
	arg2() {
		console.log("method in test3");
	},
};
