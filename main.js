var canvas = new fabric.Canvas('myCanvas');

ball_x = 0;
ball_y = 0;
holex = 800;
holey = 400;


block_image_width = 5;
block_image_height = 5;

function load_img() {
	fabric.Image.fromURL("golf-h.png", function (Img) {
		holeObject = Img;
		holeObject.scaleToWidth(50);
		holeObject.scaleToHeight(50);
		holeObject.set({
			top: holey,
			left: holex
		});
		canvas.add(holeObject);
	});
	new_image();
}

function new_image() {
	fabric.Image.fromURL("ball.png", function (Img) {
		ballObject = Img;
		ballObject.scaleToWidth(50);
		ballObject.scaleToHeight(50);
		ballObject.set({
			top: ball_y,
			left: ball_x
		});
		canvas.add(ballObject);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ball_x == holex) && (ball_y == holey)) {
		canvas.remove(ballObject);
		document.getElementById("hd3").innerHTML = "you have hit the goal!!!";
		document.getElementById("myCanvas").style.borderColor = "red"
	} else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}

	function up() {
		if (ball_y >= 5) {
			ball_y = ball_y - block_image_height;
			canvas.remove(ballObject);
			new_image();
		}
	}

	function down() {
		if (ball_y <= 450) {
			ball_y = ball_y + block_image_height;
			canvas.remove(ballObject);
			new_image();
		}
	}

	function left() {
		if (ball_x > 5) {
			ball_x = ball_x - block_image_width;
			canvas.remove(ballObject);
			new_image();
		}
	}

	function right() {
		if (ball_x <= 1050) {
			ball_x = ball_x + block_image_width;
			canvas.remove(ballObject);
			new_image();
		}
	}
}