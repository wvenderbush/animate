var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
                     
var clearBut = document.getElementById("clear");
clearBut.addEventListener("click", function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

var tick = 50;
var flag = 0;

var animateDot = function() {

	var drawDot = function() {

	}
	
}

var circle = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	console.log("circle drawn")
	ctx.fillStyle = "#0000ff";
	ctx.beginPath();
	ctx.arc(tick, 100, 50, 0, 2*Math.PI)
	ctx.fill();
	ctx.stroke();
	if (flag = 0){
		console.log("moving right");
		tick++;
	}
	if (flag = 1){
		console.log("moving left");
		tick--;
	}
	if (tick == canvas.width - 50){
		console.log("flag is 1");
		flag = 1;
		tick--;
	}
	if (tick = 49){
		console.log("flag is 0");
		flag = 0;
		tick++;
	}

	window.requestAnimationFrame( circle );
};

//window.requestAnimationFrame( circle );

//circle();

canvas.addEventListener("click", circle)


