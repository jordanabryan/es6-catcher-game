import Sprite from './Sprite';

export default class Player extends Sprite {
	constructor(ctx, x, y, h, w) {
		super(ctx, x, y, h, w);

		this.movement = 5;
		this.health = 100;

	}

	updateHealth(health){
		this.health += 10;
	}

	reduceHealth(){
		this.health -= 10;
	}

	getHealth(){
		return this.health;
	}

	create(color) {
		this.color = color;
		this.ctx.fillStyle = this.color;
		this.ctx.beginPath();
		this.ctx.rect(this.x, this.y, this.width, this.height);	
		this.ctx.closePath();
		this.ctx.fill();
	};	
};
