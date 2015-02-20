//call-site - location in the code where the function is called, not where its declared

function baz()
{
	debugger;
	console.log("baz");
	bar();
}

function bar()
{
	console.log("bar");

	foo();
}

function foo(){
	console.log("foo");
}

baz(); //<-- call-site for baz