class Person {
	sleep() {
		console.log("sleeping");
	}
}

var value = 234;

function fun() {
	console.log("function in test2");
}

//暴露方式2：统一暴露
//将所有需要暴露的变量名用{}括起来，写在export关键字后
export { Person, value, fun };
