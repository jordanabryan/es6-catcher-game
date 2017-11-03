import Sprite from './Sprite';

export default class Egg extends Sprite {
	constructor(ctx, x, y, h, w) {
		super(ctx, x, y, h, w);

		this.src = '../../assets/sprite-sheet.png';
		this.srcx = 0;
		this.srcy = 0;
		this.width = 20;
		this.height = 24.5;
		this.srcwidth = 47;
		this.srcheight = 66;
		this.movement = Math.floor(Math.random() * 5);
		this.active = true;
	}

	getActive(){
		return this.active;
	}

	updateSrcPosition(srcx, srcy, width, height, srcwidth, srcheight){
		this.width = width;
		this.height = height;
		this.srcx = srcx;
		this.srcy = srcy;	
		this.srcwidth = srcwidth;
		this.srcheight = srcheight;
	}

	resetSprite(){
		this.updateSrcPosition(0, 0, 20, 24.5, 47, 66);
		this.active = true;
		// this.height = 50;
		this.x = Math.floor(Math.random() * 450);
		this.y = -Math.floor(Math.random() * 100) -50;
	}

	moveSprite(){
		if((this.y + this.height) + this.movement > 490 ){

			this.active = false;
			this.height = 29;
			this.y = 480;

			this.updateSrcPosition(47, 0, 61, 16, 61, 16);

			setTimeout(() => {
				this.resetSprite();	
			}, 500);
			
		} else {
			this.y += this.movement;
		}
	}	

	render(){
		this.createSpriteImage(this.src, this.srcx, this.srcy, this.srcwidth, this.srcheight, this.x, this.y, this.width, this.height);
	}
	
};
