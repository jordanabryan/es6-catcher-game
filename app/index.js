import Sprite from './components/Sprite';
import Player from './components/Player';
import Enemy from './components/Enemy';

export class Game {
	constructor(options){

		this.id = options.id;
		this.height = options.height;
		this.width = options.width;

		this.keys = [];
		

		this.canvas = document.getElementById(options.id);
		this.ctx = this.canvas.getContext('2d');

		this.player = new Player(this.ctx, 10, 10, 50, 50);

		this.enemies = [
			new Enemy(this.ctx, 350, 10, 50, 50),
			new Enemy(this.ctx, 10, 350, 50, 50)
		];
		
	}

	init(){
		var _this = this;

		window.addEventListener('keydown', this.onKeyDown.bind(this));
		window.addEventListener('keyup', this.onKeyUp.bind(this));

		(function animloop(){
			_this.animation = window.requestAnimationFrame(animloop);
			_this.loop();
		})();
	};

	onKeyDown(evt){
		this.keys[evt.keyCode] = true;
	};
	
	onKeyUp(evt){
		this.keys[evt.keyCode] = false;
	};

	collisionCheck(){

		if(this.enemies.length){

			for(var i = 0; i < this.enemies.length; i++){
				if (
					this.enemies[i].x < (this.player.x + this.player.width) && 
					(this.enemies[i].x + this.enemies[i].width) > this.player.x &&
					this.enemies[i].y < (this.player.y + this.player.height) && 
					(this.enemies[i].y + this.enemies[i].height) > this.player.y
				){
					this.player.reduceHealth();


					console.log(this.player.getHealth());

				}
			}
		}

	};

	movement(){
		if((37 in this.keys && this.keys[37])){
			this.player.moveLeft();
		}

		if((38 in this.keys && this.keys[38])){
			this.player.moveUp();
		}

		if((39 in this.keys && this.keys[39])){
			this.player.moveRight();
		}

		if((40 in this.keys && this.keys[40])){
			this.player.moveDown();
		}		
	}

	clear(){
		this.ctx.clearRect(0, 0, this.width, this.height);
	}
	
	draw(){

		this.collisionCheck();
		this.player.create('#f00');
		this.enemies.forEach(function(enemy){
			enemy.create('#0f0');
		});
		this.movement();
	};

	loop(){
		this.clear();
		this.draw();
	};
};

const _gameoptions = {
	'id': 'game-canvas',
	'width' : 500,
	'height' : 500
};

const game = new Game(_gameoptions);
game.init();