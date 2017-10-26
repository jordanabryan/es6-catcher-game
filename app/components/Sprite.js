export default class Sprite {
	constructor(ctx, x, y, h, w) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.height = h;
		this.width = w;
	}

	create(color) {
		this.color = color;
		this.ctx.fillStyle = this.color;
		this.ctx.beginPath();
		this.ctx.rect(this.x, this.y, this.width, this.height);	
		this.ctx.closePath();
		this.ctx.fill();
	};

	moveLeft(){
		this.x -= this.movement;
		if(this.x <= 0) {
			this.x = 0;
		}
	}

	moveRight(){
		this.x += this.movement;
		if((this.x + this.width) >= 500) {
			this.x = (500 - this.width);
		}
	}

	moveUp(){
		this.y -= this.movement;
		if(this.y <= 0) {
			this.y = 0;
		}
	}

	moveDown(){
		this.y += this.movement;
		if((this.y + this.height) >= 500) {
			this.y = (500 - this.height);
		}
	}

};