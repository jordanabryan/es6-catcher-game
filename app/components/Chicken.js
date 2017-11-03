import Sprite from './Sprite';

export default class Chicken extends Sprite {
	constructor(ctx, x, y, h, w, d) {
		super(ctx, x, y, h, w);

		this.src = '../../assets/chicken-sprite.png';
		this.srcx = 0;
		this.srcy = 0;
		this.srcwidth = 59;
		this.srcheight = 73;
		this.movement = 2;
		this.layegg = false;
		this.frameIndex = 0;
		this.tickCount = 0;
		this.ticksPerFrame = 10;

		this.positions = {
			'-2' : {
				0 : {
					srcx: 0, 
					srcy: 81,
					srcwidth: 59,
					srcheight: 73,
					width: 59,
					height: 73
				},
				1 : {
					srcx: 59, 
					srcy: 81,
					srcwidth: 64,
					srcheight: 73,
					width: 64,
					height: 73
				},
				2 : {
					srcx: 123, 
					srcy: 81,
					srcwidth: 64,
					srcheight: 80,
					width: 64,
					height: 80
				}
			},
			'2' : {
				0 : {
					srcx: 0, 
					srcy: 0,
					srcwidth: 59,
					srcheight: 73,
					width: 59,
					height: 73
				},
				1 : {
					srcx: 59, 
					srcy: 0,
					srcwidth: 64,
					srcheight: 73,
					width: 64,
					height: 73
				},
				2 : {
					srcx: 123, 
					srcy: 0,
					srcwidth: 64,
					srcheight: 80,
					width: 64,
					height: 80
				}
			}
		}

	}

	getActive(){
		return this.active;
	}

	updateSrcPosition(pos){
		this.width = pos.width;
		this.height = pos.height;
		this.srcx = pos.srcx;
		this.srcy = pos.srcy;
		this.srcwidth = pos.srcwidth;
		this.srcheight = pos.srcheight;
	}

	moveSprite(){

		if(this.layegg == false){

			if( this.x < -75 || (this.x - this.width) + this.movement > 500){
				this.movement = -this.movement; 
			} 

			this.tickCount += 1;
				
			if (this.tickCount > this.ticksPerFrame) {
			
				this.tickCount = 0;
				
				this.updateSrcPosition(this.positions[this.movement][this.frameIndex]);

				if (this.frameIndex <= 1) {
					this.frameIndex += 1; 
				} else {
					this.frameIndex = 0;
				}
			}

			this.x += this.movement;

		}	

	}	

	render(){
		this.createSpriteImage(this.src, this.srcx, this.srcy, this.srcwidth, this.srcheight, this.x, this.y, this.width, this.height);
		this.moveSprite();
	}
	
};
