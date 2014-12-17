define(['scripts/lib/yetAnother'], function(yetAnother) {
	return {
		age: 10,
		height: 200,
		getAge: function() {
			return this.age;
		},
		getHeight: function() {
			return this.height;
		},
		getAnotherName: function() {
			return yetAnother.person.getName();
		},
		getAnotherTitle: function() {
			return yetAnother.person.getTitle();
		},
		getAnotherGender: function() {
			return yetAnother.person.getGender();
		},
		getEntry: function() {
			var even = _.find([1, 2, 3, 4, 5, 6], function(num) {
				return num % 2 == 0;
			});
			return even;
		}
	};
});

