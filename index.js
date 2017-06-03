// This is a javascript file, nothing scary here.
// For simplicity, you will find several small tasks
// for you to accomplish here, each marked with // TODO:

// TODO: Task one, random background color generation.

var task1 = function() {
	var getRandomColor = function() {
		// As you know, colors can be defined using hexadecimal values such as #12abf2.
		// Another way to represent them is like: rgb(123,234,029).
		// We will use this method in this function.
		
		// TODO: Assign each of the following a random value between 0 and 255.
		// READ: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
		var red = 250;
		var green = 250;
		var blue = 250;
		var colorstring = "rgb(" + red + "," + green + "," + blue + ")";
		return colorstring;
	}
	var body = document.getElementsByTagName('body')[0];
	body.style.background = getRandomColor();
}();