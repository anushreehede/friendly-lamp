// This is a javascript file, nothing scary here.
// For simplicity, you will find several small tasks
// for you to accomplish here, each marked with // TODO:

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
task1(); // Run Task

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
	    console.log("Pressed");
	    if (keyevent.keyCode == 13) {
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
task2(); // Run Task

// TODO: Task three, mathematics and colors

task3 = function() {
	
};