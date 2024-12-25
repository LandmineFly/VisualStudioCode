//分线程的全局变量不再是window，而是DedicatedWorkerGlobalScope
//onmessage、postMessage等函数都是它的方法
//为分线程添加一个从主线程接收数据的事件处理器
onmessage = function (e) {
	//通过事件对象的data属性可以获取到主线程发送的数据
	var value = e.data;
	console.log("分线程接收到主线程的数据 " + value);
	//对数据进行处理
	value++;
	//向主线程返回数据
	this.postMessage(value);
	console.log("分线程向主线程发送数据 " + value);
};
