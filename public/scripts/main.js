require.config({
	paths: {
		first: 'lib/first',
		second: 'lib/second',
		third: 'lib/third'
	}
});


require(['first'], function(first) {
	console.log('main script executed');
	first.getFirst();
	first.getSecondText();
	first.getSecondMessage();
	// first.getSecond();
	first.getThirdText();
	first.getThirdMessage();
	// first.getTitle();
	// first.getAge();
});