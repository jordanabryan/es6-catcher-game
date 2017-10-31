import Sprite from './Sprite';

export default class Player extends Sprite {
	constructor(ctx, x, y, h, w) {
		super(ctx, x, y, h, w);

		this.movement = 5;
		this.score = 0;

	}

	updateScore(score){
		this.score += 10;
	}

	reduceScore(){
		this.score -= 10;
	}

	getScore(){
		return this.score;
	}

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

	render(){
		this.create('#f00');
	}

};
