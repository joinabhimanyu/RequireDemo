var myobj = {
firstname: "abhi",
secondname: "chak"
};

var newobj = {
	title: "abhi",
	name: "chak",
	age: 28
};


var obj2 = funciton(name, title) {
	this.name = name;
	this.title = title;
	this.getName = function() {
		return this.name;
	}
	this.getTitle = function() {
		return this.title;
	}
}

var object2 = new obj2("adf","12");
console.log(object2.getName());
console.log(object2.getTitle());


var something = function() {
console.log("fistname is " + this.firstname);
console.log("secondname is " + this.secondname);
}

var somethingnew =  function() {
	console.log("title is " + this.title);
	console.log("name is " + this.name);
	console.log("age is " + this.age);
}
console.log("Magic of apply");
something.apply(myobj);
console.log("Magic of call");
somethingnew.call(newobj);

(function() {

console.log("hello JS");

})();


(something.bind(myobj))();


var iife = (function() {

var global = "something new and exciting in JS";
return {

	getMessage: function() {
		console.log("I see IIFEs to be " + global);
	}

}

})();

iife.getMessage();

(function() {

var typecheck = "lets check the type";
var typearray = ["string",10,20.4];

console.log("Use of typeof");
console.log(typeof typecheck);
console.log(typeof typearray);
console.log(typeof myobj);

console.log("Use of Object.prototype.toString");
console.log(Object.prototype.toString.call(typearray));
console.log(Object.prototype.toString.call(myobj));


})();

