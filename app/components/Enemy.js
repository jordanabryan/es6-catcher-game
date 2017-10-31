import Sprite from './Sprite';

export default class Enemy extends Sprite {
	constructor(ctx, x, y, h, w) {
		super(ctx, x, y, h, w);

		this.src = 'https://cdn.bulbagarden.net/upload/0/00/Dream_Lucky_Egg_Sprite.png';
		this.srcx = 0;
		this.srcy = 0;
		this.srcwidth = 211;
		this.srcheight = 237;

		this.movement = Math.floor(Math.random() * 5);
		this.health = 100;
		this.active = true;
	}

	updateHealth(health){
		this.health += health;
	}

	reduceHealth(health){
		this.health -= health;
	}

	getHealth(){
		return this.health;
	}

	getActive(){
		return this.active;
	}

	updateSrcPosition(x, y, width, height){
		this.srcx = 0;
		this.srcy = 0;
		this.srcwidth = 211;
		this.srcheight = 237;
	}

	resetSprite(){
		this.updateSrcPosition(0, 0, 211, 237);
		this.active = true;
		this.height = 50;
		this.x = Math.floor(Math.random() * 450);
		this.y = -Math.floor(Math.random() * 100) -50;
	}

	moveSprite(){
		if((this.y + this.height) + this.movement > 490){

			this.active = false;
			this.height = 29;
			this.y = 460;
			

			setTimeout(() => {
				//animate the block to show the splattered egg
				this.updateSrcPosition(0, 0, 211, 237);
				this.resetSprite();	

			}, 500)
			
		} else {
			this.y += this.movement;
		}
	}	

	render(){
		this.createSpriteImage(this.src, this.srcx, this.srcy, this.srcwidth, this.srcheight);
	}
	
};
