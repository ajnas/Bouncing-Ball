
var x=1;
var y=1;

var gravity=0.05;
var friction=0.03;

var ballWidth=50;
var ballHeight=50;
var xVelocity=1;
var yVelocity=1;
var xAcceleration=0;
var yAcceleration=gravity;
var ball;
var width,height;

window.addEventListener("keydown", applyForce, false);
 
function applyForce(e) {
    switch(e.keyCode) {
        case 37:
            xAcceleration=-0.1;
            break;
        case 38:
        	yAcceleration-=0.1;            
            break;
        case 39:
            xAcceleration=0.1;
            break;
        case 40:
        	yAcceleration+=0.1;
            break;  
    }   
}

window.addEventListener("keyup", releaseForce, false);
 
function releaseForce(e) {
    switch(e.keyCode) {
        case 37:
            xAcceleration=0;
            break;
        case 38:
        	yAcceleration=gravity;           
            break;
        case 39:
            xAcceleration=0;
            break;
        case 40:
        	yAcceleration=gravity;
            break;  
    }   
}


$(jQuery(document).ready(function($) {
	
	 render();
	 width=$(window).innerWidth();
	 height=$(window).innerHeight();
	}
));


function render (){


	 	console.log(x.toString(),y.toString());
	 	
	 	if(!doesTouchSurfaceX())
	 		xVelocity+=xAcceleration;
	 	if(!doesTouchSurfaceY())
		 	yVelocity+=yAcceleration;
		else{
			 if(xVelocity>0)
			 	{
			 		xVelocity-=friction;
			 	}
			 else
			 	{
			 		xVelocity+=friction;
			 	}
		}
		x+=xVelocity;
		y+=yVelocity;
		if(isCollidedX()){
			xVelocity*=-0.8;
		}
		
		if(isCollidedY()){
			yVelocity*=-0.8;
		}
		$('#ball').css({
			'top': y+"px",
			'left': x+"px"
		})


     setTimeout(render, 10);
	}


function isCollidedX(){
	if((x+ballWidth>=width && xVelocity>0)|| (xVelocity<0 && x<=0))
		return true;
	else
		return false;
 	
}

function doesTouchSurfaceX(){
	if(x+ballWidth>=width || x<=0)
		return true;
	else
		return false;

}

function doesTouchSurfaceY(){
	if(y+ballHeight>=height || y<=0)
		return true;
	else
		return false;
}
function isCollidedY(){
	if((y+ballHeight>=height && yVelocity>0) || (yVelocity<0 && y<=0))
		return true;
	else
		return false;
}