define(['second', 'third'], function(second, third) {
	var text = 'hello world from first';
	var person = {
		// name: 'abhi',
		// title: 'chak',
		// age: 28,
		// getName: function() {
		// 	console.log('Name: ' + name);
		// },
		// getTitle: function() {
		// 	console.log('Title: ' + title);
		// },
		// getAge: function() {
		// 	console.log('Age: ' + age);
		// }
		getSecondText: function() {
			console.log(second.text);
		},
		getSecondMessage: function() {
			console.log(second.message)
		},
		getFirst: function() {
			console.log(text);
		},
		getThirdText: function() {
			console.log(third.text);
		},
		getThirdMessage: function() {
			console.log(third.message);
		}
	};
	return person;
});


