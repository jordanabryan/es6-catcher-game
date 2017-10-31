import Sprite from './components/Sprite';
import Player from './components/Player';
import Enemy from './components/Enemy';
import TextDisplay from './components/TextDisplay';
import GameOver from './components/GameOver';

class Game {
	constructor(options){

		this.id = options.id;
		this.height = options.height;
		this.width = options.width;

		this.keys = [];

		this.gameOverCheck = false;
		this.startGame = false;
		this.pause = false;
		this.playing = false;
		this.level = 1;
		this.timeLeft = 60;
		this.interval;

		this.canvas = document.getElementById(options.id);
		this.ctx = this.canvas.getContext('2d');

		this.player = new Player(this.ctx, 300, 460, 50, 25);

		this.enemies = [
			new Enemy(this.ctx, Math.floor(Math.random() * 500), -Math.floor(Math.random() * 100) -50, 40, 49),
			new Enemy(this.ctx, Math.floor(Math.random() * 500), -Math.floor(Math.random() * 100) -50, 40, 49),
			new Enemy(this.ctx, Math.floor(Math.random() * 500), -Math.floor(Math.random() * 100) -50, 40, 49),
			new Enemy(this.ctx, Math.floor(Math.random() * 500), -Math.floor(Math.random() * 100) -50, 40, 49)
		];
		
		this.score = new TextDisplay(this.ctx, 10, 20, 50, 50);
		this.timeDisplay = new TextDisplay(this.ctx, 10, 40, 50, 50);
		this.gameOver = new GameOver(this.ctx, 0, 0, this.width, this.height);

	}

	init(){
		var _this = this;

		window.addEventListener('keydown', this.onKeyDown.bind(this));
		window.addEventListener('keyup', this.onKeyUp.bind(this));

		this.interval = setInterval(() => this.timeLeft--, 1000);

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
					(this.enemies[i].y + this.enemies[i].height) > this.player.y &&
					this.enemies[i].getActive() === true
				){
					this.player.updateScore();
					this.enemies[i].resetSprite();
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
		if(this.timeLeft <= 0){
			this.gameOver.render(this.player.getScore());
		} else {
			this.collisionCheck();
			this.player.render();
			this.enemies.forEach(function(enemy){
				enemy.moveSprite();
				enemy.render();
			});
			this.movement();
			this.score.createText('20px Calibri', '#000', 'left', `score: ${this.player.getScore()}`);
			this.timeDisplay.createText('20px Calibri', '#000', 'left', `time left: ${this.timeLeft}`);
		}
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