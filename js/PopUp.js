import Overlay from "./Overlay.js";
import Buttons from "./Buttons.js";
import { AudioManager } from "./AudioManager.js";
class PopUp {
    constructor(scene) {
        this.scene = scene;
        this.overlay = new Overlay(this.scene);
        this.buttons = new Buttons(this.scene);

        this.gameOverContainer = null;
    }

    CreateQuitPopUp() {
        // this.buttons.settingsBtn.on('pointerup', () => {
        this.overlay.CreateOverlay();
        let settingsBox = this.scene.add.image(game.config.width / 2, game.config.height / 1.9, 'settings_box');
        let quitTxt = this.scene.add.text(game.config.width / 15.4, game.config.height / 2.5, 'DO YOU WANT TO QUIT ?', { fontFamily: 'PoetsenOne-Regular', fontSize: 87, fill: '#FFFFFF', align: 'Center', lineSpacing: 10 });
        quitTxt.setShadow(10, 15, '#000000', 0, true, true);
        this.buttons.CreateQuitPopupButtons();
        // });
    }

    CreateGameOverPopUp() {
        this.overlay.CreateOverlay();
        this.overlay.overlay.setInteractive({ useHandCursor: true });
        this.overlay.overlay.on('pointerup', () => {
            // localStorage.setItem("super_bird_audio_on", 1);
            this.scene.scene.restart();
        }); //TODO: add restart button functionality

        this.gameOverContainer = this.scene.add.container(game.config.width / 2, game.config.height / 2);
        // console.log(this.gameOverContainer);
        let gameOverBox = this.scene.add.image(0, 0, 'gameOver_box').setOrigin(0.5);
        this.gameOverContainer.add(gameOverBox);

        let gameOverPlayer = this.scene.add.image(0, 0, 'gameOver_player').setOrigin(0.5);
        gameOverPlayer.copyPosition(gameOverBox);
        this.gameOverContainer.add(gameOverPlayer);

        let gameOverTxt = this.scene.add.text(-420, -1500, 'GAME OVER', { fontFamily: 'PoetsenOne-Regular', fontSize: 150, fill: '#FFFFFF', align: 'Center', lineSpacing: 10 });
        gameOverTxt.setAngle(-4);
        this.gameOverContainer.add(gameOverTxt);
        this.ShowTweens(gameOverTxt, -420, -768, 1, false, 0, 700, 'bounce.out');

        let gameOverLine = this.scene.add.text(-1500, -551.49, 'The Bird is \n no more !!!', { fontFamily: 'PoetsenOne-Regular', fontSize: 98, fill: '#FFFFFF', align: 'Center', lineSpacing: 10 });
        gameOverLine.setAngle(-4);
        gameOverLine.setShadow(10, 15, '#000000', 0, true, true);
        this.gameOverContainer.add(gameOverLine);
        this.ShowTweens(gameOverLine, -270, -551.49, 1, false, 0, 500, 'back.inout');
        setTimeout(() => {
            let restartLine = this.scene.add.text(-260, 650, 'Tap To Start Over', { fontFamily: 'PoetsenOne-Regular', fontSize: 68, fill: '#FFFFFF', align: 'Center', lineSpacing: 10 });
            restartLine.setShadow(10, 12, '#000000', 0, true, true);
            this.gameOverContainer.add(restartLine);
            this.ShowTweens(restartLine, -260, 650, 0.2, true, -1, 500, 'linear');
        }, 1010);

        let currentScoreTxt = this.scene.add.text(1500, 320, 'Score : ' + this.scene.score.distCovered, { fontFamily: 'PoetsenOne-Regular', fontSize: 68, fill: '#FFFFFF', align: 'Center', lineSpacing: 10 });
        currentScoreTxt.setShadow(10, 12, '#000000', 0, true, true);
        this.gameOverContainer.add(currentScoreTxt);
        this.ShowTweens(currentScoreTxt, -130, 320, 1, false, 0, 900, 'quad.inout');

        this.scene.score.CalculateBestScore();

        let bestScoreTxt = this.scene.add.text(-1500, 475, 'Best : ' + localStorage.getItem('super_bird_score'), { fontFamily: 'PoetsenOne-Regular', fontSize: 68, fill: '#FFFFFF', align: 'Center', lineSpacing: 10 });
        bestScoreTxt.setShadow(10, 12, '#000000', 0, true, true);
        this.gameOverContainer.add(bestScoreTxt);
        this.ShowTweens(bestScoreTxt, -110, 475, 1, false, 0, 1000, 'quad.in');
    }
    ShowTweens(_obj, _posX, _posY, _opacity, _swing, _redo, _time, _effect) {
        this.scene.tweens.add({
            targets: _obj,
            x: _posX,
            y: _posY,
            alpha: _opacity,
            yoyo: _swing,
            repeat: _redo,
            duration: _time,
            ease: _effect
        });
    }

    OnPointerUp() {
        console.log("Enter Menu");
        this.scene.scene.start('TitleScene');
    }
}
export default PopUp;