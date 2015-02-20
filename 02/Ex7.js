//Hard Binding in JS

function foo(){
	console.log(this.a);
}

var obj = {
	a:2
};

var bar = function(){
	foo.call(obj);
};

bar();

bar(window);

setTimeout(bar,100);