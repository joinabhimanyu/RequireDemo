var banner = function() {
	var message = 'Javascript is Awesome';
	var myFunction = function() {
		message += ' and Closure is Mind Blowing';
		return message;
	}
	return {
		myFunction: myFunction
	};
}();

var message = banner.myFunction();
console.log(message);
message = 'Now by the power and magic of Closure the message changes';
console.log(message);

var Main = function(arrayList) {
	var _ = require('../lib/underscore');

	var underscoreEach = function() {
		console.log('Use of _.each:');
		_.each(arrayList, function(num) {
		console.log(num);
		});	
	};

	var underscoreMap = function() {
		console.log('Use of _.map:');
		_.map(arrayList, function(num) {
		console.log(num * 3);
		});
	};

	var underscoreFind = function() {
		console.log('Use of _.find:');
		var even = _.find(arrayList, function(num) {
		return num % 2 == 0;
		});
		console.log('Even no is: ' + even);
	};

	var underscoreFilter = function() {
		console.log('Use of _.filter:');
		var evens = _.filter(arrayList, function(num) {
		return num % 2 == 0;
		});
		console.log(evens);
	};


	var getWords = function() {
		var lyrics = [
				{line: 1, words: "I'm a lumberjack and I'm okay"},
  				{line: 2, words: "I sleep all night and I work all day"},
  				{line: 3, words: "He's a lumberjack and he's okay"},
  				{line: 4, words: "He sleeps all night and he works all day"}
			];

		var chain_result = _.chain(lyrics)
						.map(function(line) { return line.words.split(' '); })
						.flatten()
						.reduce(function(counts, word) {
							counts[word] = (counts[word] || 0) + 1;
							return counts;
						}, {})
						.value();
		console.log(chain_result);		
	};

	var getAge = function() {
		var stooges = [{ name: 'curly', age: 28 }, { name: 'larry', age: 25 }, { name: 'moe', age: 22 }];
		var youngest = _.chain(stooges)
					.sortBy(function(stooge) { return stooge.age; })
					.map(function(stooge) { return 'The youngest member is ' + stooge.name + ': ' + stooge.age; })
					.first()
					.value();
		console.log(youngest);
	}
	
	return {
		underscoreEach: underscoreEach,
		underscoreMap: underscoreMap,
		underscoreFind: underscoreFind,
		underscoreFilter: underscoreFilter,
		getWords: getWords,
		getAge: getAge
	};

};

var Human = function(gender) {
	this.gender = gender;
};

Human.prototype.getGender = function() {
	return this.gender;
}

var advanceHuman = function(ability, gender) {
	Human.call(this, gender);
	this.ability = ability;
};

advanceHuman.prototype = new Human();

advanceHuman.prototype.getAbility = function() {
	return this.ability;
}

var Person = function(name, title) {
	this.name = name;
	this.title = title;
};

Person.prototype = (function() {
	var getName = function() {
		return this.name;
	},
	getTitle = function() {
		return this.title;
	};

	return {
		getName: getName,
		getTitle: getTitle
	};
})();

var mainInstance1 = new Main([1, 2, 3, 4, 5, 6]);
console.log('Output of instance 1:');
mainInstance1.underscoreEach();
mainInstance1.underscoreMap();
mainInstance1.underscoreFind();
mainInstance1.underscoreFilter();
console.log('getWords called by Revealing Module Pattern');
mainInstance1.getWords();
console.log('getAge called by Revealing Module Pattern');
mainInstance1.getAge();

var mainInstance2 = new Main([10, 20, 30]);
console.log('Output of instance 2:');
mainInstance2.underscoreEach();
mainInstance2.underscoreMap();
mainInstance2.underscoreFind();
mainInstance2.underscoreFilter();

var person = new Person('abhi', 'chak', 'male');
console.log('Output of Revealing Prototype Pattern');
console.log('Name is: ' + person.getName());
console.log('Title is: ' + person.getTitle());

console.log('Output of Prototype Pattern');
var adH1 = new advanceHuman('night vision', 'male');
console.log(adH1.getGender());
console.log(adH1.getAbility());

var adH2 = new advanceHuman('flight', 'female');
console.log(adH2.getGender());
console.log(adH2.getAbility());

// console.log('Gender is: ' + person.getGender);
console.log('Program terminated');

