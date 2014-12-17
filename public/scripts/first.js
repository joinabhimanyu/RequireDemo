function Person(name, height, weight)
{
	this.name = name;
	this.height = height;
	this.weight = weight;
}

Person.prototype.getName = function(callback)
{
	//return "name : " + this.name;
	var result =  "name : " + this.name;
	callback(result);
}

Person.prototype.getHeight = function(callback)
{
	//return "height : " + this.height;
	var result = "height : " + this.height;
	callback(result);
}

Person.prototype.getWeight = function(callback)
{
	//return "weight : " + this.weight;
	var result = "weight : " + this.weight;
	callback(result);
}

// function NewPerson(address) extends Person
// {
// 	this.address = address;
// }

// NewPerson.prototype.getAddress = function()
// {
// 	return "address : " + this.address;
// }

var person = new Person("abhi",160, 65.2);
var myarray = new Array(10, "string", 122.12, 2 * 4);
var mystring = new String("foobar");
var myfunction = new Function("x", "y", "return x * y");
//console.log(person.getName());
//console.log	(person.getHeight());
//console.log(person.getWeight());
person.getName(function(result) {
	console.log(result);
});
person.getHeight(function(result) {
	console.log(result);
});
person.getWeight(function(result) {
	console.log(result);
});
console.log("person is an " + typeof person);
console.log("Person is a " + typeof Person);
console.log("getName is a " + typeof person.getName);
console.log("the contents of the myarray are : " + myarray);
console.log("the contents of mystring are : " + mystring);
console.log("the result of myfunction is : " + myfunction(12, 5));
var a = 2, b = 3.1;
console.log("the sin is: " + Math.sin(a));
console.log("the cos is: " + Math.cos(b));
console.log("the max is: " + Math.max(a,b));
console.log("the sqrt is: " + Math.sqrt(a * b));
// var newperson = new NewPerson("Ranchi");
// console.log(newperson.getName());
// console.log	(newperson.getHeight());
// console.log	(newperson.getAddress());
console.log	("Program terminated");