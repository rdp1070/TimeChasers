"use strict"

function makeGem(){
	var gem;
	return gem = {

		// Variables
		posX: Math.random() *(canvas.width - 100) + 100,
		posY :  Math.random() *(canvas.height - 100) + 100,
		size : 15,
		velocity : {
			x: 0,
			y: 0,
		},
		rotation: 0,
		rotation_speed: Math.random() *(.1) - .03,
		speed : 0,
		top_speed : 0,
		img : 0,

		// Static Variables
		MAX_SPEED : 5,
		MIN_SPEED : 0,
		DEFAULTX : canvas.width/2,
		DEFAULTY : canvas.height/2,
		TYPE : "gem",

		// drawShip
		// * for now just draw a tiny green square that will
		// * be a place holder for the gem
		// * PLANNED
		// * import graphics for the gem and place it 
		// * in the appropriate position
		draw: function(_ctx){
			var ctx = _ctx;
			
			if (!this.img){
				ctx.save();
				ctx.fillStyle = "green";
				ctx.beginPath();
				// temporary drawing of a green circle to represent the seal
				ctx.arc(this.posX,this.posY,this.size,0,2*Math.PI);
				ctx.fill();
				ctx.closePath();
				ctx.restore();


			} 
			else {				
				
				// ctx.save();
				// ctx.fillStyle = "green";
				// ctx.beginPath();
				// // temporary drawing of a green circle to represent the seal
				// ctx.arc(this.posX,this.posY,this.size,0,2*Math.PI);
				// ctx.fill();
				// ctx.closePath();
				// ctx.restore();

				ctx.save();
				// translate it to the pivot point
				ctx.translate( this.posX, this.posY);
				// tell it how to rotate and where to rotate
				ctx.rotate(this.rotation += this.rotation_speed);
				// draw the image, subtracting the size of the image
				ctx.drawImage(this.img, -this.size , -this.size );
				ctx.restore();
			}
			
		},

		// setImage()
		// * set the image of the gem to the appropriate img
		// * so when you draw it in the draw function 
		// * it's the right one
		setImage: function(newImage){
			this.img = newImage;
		},


		// collected
		// * randomize the location of collected thing
		// * return the score and time changes 
		collected: function(){
			this.randomize();
			return { score: 100, timer: 0, delete: function(){ return true;}};
		},

		// randomize
		// * move to a random location
		randomize: function(){
			this.posX = Math.floor(Math.random() *(canvas.width - 100) + 100);
			this.posY =  Math.floor(Math.random() *(canvas.height - 100) + 100);
		},

		// move
		// * move the gem somehow
		move: function(shipX, shipY){
			return null;
		},

	}
}; 



