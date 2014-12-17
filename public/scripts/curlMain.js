
define(['scripts/lib/another'], function(another) {
	var age = another.getAge();
	var height = another.getHeight();
	var name = another.getAnotherName();
	var title = another.getAnotherTitle();
	var gender = another.getAnotherGender();
	var even = another.getEntry();
	var result = 'Age is ' + age;
	$("#result").html(result);
	$("#result").append('<br/>');
	$("#result").append('Height is ' + height);
	$("#result").append('<br/>');
	$("#result").append('Name is ' + name);
	$("#result").append('<br/>');
	$("#result").append('Title is ' + title);
	$("#result").append('<br/>');
	$("#result").append('Gender is ' + gender);
	$("#result").append('<br/>');
	if (even != undefined) {
		$("#result").append('Even is ' + even);
	};
	// $("#result").append('Even is ' + even);
	// console.log('Values of another.js used');
	// console.log(another.getAge());
	// console.log(another.getHeight());
	// console.log('Values of yetAnother.js used');
	// console.log(another.getName());
	// console.log(another.getTitle());
});