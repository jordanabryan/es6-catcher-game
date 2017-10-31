import Sprite from './Sprite';
import TextDisplay from './TextDisplay';
import Player from './Player';

export default class GameOver extends Sprite {
	constructor(ctx, x, y, h, w) {
		super(ctx, x, y, h, w);

		this.gameOverText = new TextDisplay(this.ctx, 250, 210, 100, 100);
		this.scoreText = new TextDisplay(this.ctx, 250, 250, 100, 100);
	}

	displayText(score){
		this.gameOverText.createText('50px Calibri', '#fff', 'center', 'Game Over');
		this.scoreText.createText('20px Calibri', '#fff', 'center', `score: ${score}`);
	}

	render(score){
		this.create('#000');
		this.displayText(score);
	}
	
};
