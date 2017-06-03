// This is a javascript file, nothing scary here.
// For simplicity, you will find several small tasks
// for you to accomplish here, each marked with // TODO:

// Create a commit after each task, so that you can look through the code
// later and that when you upload it to GitHub, we can see your progress as well.

// TODO: Task one, random background color generation.

var task1 = function() {
	var getRandomColor = function() {
		// As you know, colors can be defined using hexadecimal values such as #12abf2.
		// Another way to represent them is like: rgb(123,234,029).
		// We will use this method in this function.
		// To ensure that the text remains easily legible, we will limit the
		// background to lighter colors, and thus, values greater than 200.
		
		// TODO: Assign each of the following a random value between 200 and 255.
		// READ: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
		var red = 250;
		var green = 250;
		var blue = 250;
		var colorstring = "rgb(" + red + "," + green + "," + blue + ")";
		return colorstring;
	}
	var body = document.getElementsByTagName('body')[0];
	body.style.background = getRandomColor();
};

// TODO: Task two, countdown timer.

var task2 = function() {
	// Okay, easy life is over. Let's get into something slightly complex.
	// This time, we're trying to make a timer that gets activated when you
	// press the <enter> key. The timer is ready, just, it would not appear
	// to do anything. Your job is to change that.

	// For the curious, here is how this code works:
	// 1. We attach an event listener that listens for the <enter> key.
	// 2. On detecting enter key, it launches a function that starts a timer.
	// 3. The timer counts down to zero and removes itself, thereby stopping.

	// TODO: Call the first task from within the timer, so that with each second,
	// the wallpaper changes. Also, use timedisplay.inerHTML=seconds; to show
	// the number of seconds remaining.
	var body = document.getElementsByTagName('body')[0];
	body.addEventListener("keyup", function(keyevent) {
	    if (keyevent.keyCode == 13) { // enter key keycode
	        startTimer(5);
	        return false;
	    }
	});
	var timedisplay = document.getElementById('timedisplay');
	var startTimer = function(seconds){
		var interval = setInterval(function(){
			seconds--;
			// TODO: Your code goes here.
			if (seconds < 0){
				clearInterval(interval); // delete the timer
				timedisplay.innerHTML="Hurray!"; //display finishing message
			}
		}, 1000);
	};
};

// TODO: Task three, mathematics and colors.

task3 = function() {
	// Let's play with objects, and practice how to organise your code.
	// JavaScript is one of the most flexible languages out there, and
	// this often results in people getting confused how to write js code
	// that is easy to understand and modify. Try to read the following code snippet
	// and modify it to perform what the further instructions say.
	var getColorString = function(color) {
		return "rgb(" + color.red + "," + color.green + "," + color.blue + ")";
	}
	var getColor = function(red, green, blue){
		return {
			red: red,
			green: green,
			blue: blue,
		};
	}
	var getColorInBetween = function(color1, color2){
		var getMiddleNumber = function(num1, num2, percent){
			var ratio = percent/100;
			return Math.floor(num1*ratio + num2*(1-ratio));
		}
		var red = getMiddleNumber(color1.red, color2.red, 50);
		var green = getMiddleNumber(color1.green, color2.green, 50);
		var blue = getMiddleNumber(color1.blue, color2.blue, 50);
		return getColor(red, green, blue);
	}

	var color1 = getColor(250,100,200);
	var color2 = getColor(200,250,250);
	var color3 = getColorInBetween(color1,color2);
	console.log(color3); // See the output in JavaScript Console.
	// Notice that we are creating 2 colors, and then finding a color in between them.
	// TODO: Add an argument called percent to getColorInBetween() so that we don't
	// have to get the 'center' color in between color1 and color2, and can get anything.
};

// TODO: Task four, combine it all, all by yourself.

var task4 = function() {
	// Here, you will write/copy from above code to achieve the following:
	// Create a timer triggered by the <enter> key that changes the background
	// color of the page with each second, except, here's the deal:
	// The color goes from color1 slowly to color2, as the time passes.
	// Example: black, dark grey, medium gray, light grey, white.

	// Some sample code could look like:
	var startColor = getColor(100,200,250);
	var endColor = getColor(200,250,100);
	var body = document.getElementsByTagName('body')[0];
	body.addEventListener("keyup", function(keyevent) {
	    if (keyevent.keyCode == 13) { // enter key keycode
	        startTimer(5);
	        return false;
	    }
	});

	// Complete this code, and then uncomment the line at the end of the file to
	// run this task. Also, comment the other three tasks so that they do not run.
	// Thereby, you can focus on doing this task alone.

	// You are almost there. I know this task is slightly larger, but doing this means
	// you can now understand JavaScript code and thus, can go ahead to create web apps
	// and interactive web sites that you want. Best of luck!
};

// Run Tasks
task1();
task2();
task3();
// task4();