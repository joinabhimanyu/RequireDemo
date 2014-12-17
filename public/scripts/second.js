define([], function() {

	var local = {
		name: 'abhi',
		title: 'chak',
		getName: function() {
			console.log('Name: ' + name);
		},
		getTitle: function() {
			console.log('Title: ' + title);
		}
	};
	var result = {
		getName: function() {
			local.getName();
		},
		getTitle: function() {
			local.getTitle();
		}
	};
	return result;
});