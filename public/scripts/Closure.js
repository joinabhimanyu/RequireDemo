function myNonClosure() {
	var data = 10;
	data += 20;
	return data;
}

console.log(myNonClosure());
console.log(myNonClosure());

function myClosure() {

	var newData = 20;
	return function() {
		newData += 30;
		return newData;
	}
	
}

var newFunction = myClosure();
console.log(newFunction());
console.log(newFunction());

var myClosure2 = function() {

	var some = 20;
	var myNestedFunc = function() {
		some += 20;
		return some;
	}
	return {
		myNestedFunc: myNestedFunc
	}

}

var obj = myClosure2();
console.log(obj.myNestedFunc());
console.log(obj.myNestedFunc());

(function() {

	function class1(a, b) {
		this.a = a;
		this.b = b;
	}

	class1.prototype.showA = function() {
		this.a += 10;
		return this.a;
	}

	class1.prototype.showB = function() {
		this.b += 10;
		return this.b;
	}

	var obj = new class1(10,20);

	// var obj = {
	// 	a: 10,
	// 	b: 20,
	// 	showA: function() {
	// 		this.a += 10;
	// 		return this.a;
	// 	},
	// 	showB: function() {
	// 		this.b += 10;
	// 		return this.b;
	// 	}
	// };

	return function() {
		return obj;
	}

})();

console.log('Persisting values');
// var result = protect();
// var resultObj = result();
// console.log(resultObj.showA());
// console.log(resultObj.showB());

// console.log(resultObj.showA());
// console.log(resultObj.showB());
console.log(obj.showA());
console.log(obj.showB());

console.log(obj.showA());
console.log(obj.showB());

