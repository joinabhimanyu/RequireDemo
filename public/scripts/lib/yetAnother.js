define([], function() {
	
	function Human(gender) {
		this.gender = gender;
	}

	Human.prototype.getGender = function() {
		return this.gender;
	}

	function Person(name, title, gender) {
		Human.call(this, gender);

		this.name = name;
		this.title = title;
	}

	Person.prototype = new Human();

	Person.prototype.getName = function() {
		return this.name;
	}

	Person.prototype.getTitle = function() {
		return this.title;
	}

	var person = new Person('abhi', 'chak', 'male');
	return {
		person: person
	}

});

// define(function(require, exports, module) {
// 	module.exports = {
// 		name: 'abhi',
//  		title: 'chak'
// 	};
// });