require(['another'], function(another) {
	console.log('main module called');
	console.log('Values of another.js used');
	console.log(another.getAge());
	console.log(another.getHeight());
	console.log('Values of yetAnother.js used');
	console.log(another.getName());
	console.log(another.getTitle());
});