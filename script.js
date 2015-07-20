
var x=1;
var y=1;

var ballWidth=50;
var ballHeight=50;
var xVelocity=1;
var yVelocity=1;
var ball;
var width,height;

$(jQuery(document).ready(function($) {
	
	 render();
	 width=$(window).innerWidth();
	 height=$(window).innerHeight();
	}
));


function render (){


	 	console.log(x.toString(),y.toString());

		x+=xVelocity;
		y+=yVelocity;
		if(isCollidedX())
			xVelocity*=-1;

		if(isCollidedY())
			yVelocity*=-1;
		$('#ball').css({
			'top': y+"px",
			'left': x+"px"
		})


     setTimeout(render, 10);
	}


function isCollidedX(){
	if(x+ballWidth>=width || x<=0)
		return true;
	else
		return false;
 	
}
function isCollidedY(){
	if(y+ballHeight>=height || y<=0)
		return true;
	else
		return false;
}