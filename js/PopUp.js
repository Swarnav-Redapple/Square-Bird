import Overlay from "./Overlay.js";
import Buttons from "./Buttons.js";
import { AudioManager } from "./AudioManager.js";
class PopUp {
    constructor(scene) {
        this.scene = scene;
        this.overlay = new Overlay(this.scene);
        this.buttons = new Buttons(this.scene);
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
    CreatePausePopUp() {
        this.overlay.CreateOverlay();
        this.gamePausedTxt = this.scene.add.text(game.config.width / 6, game.config.height / 5.7, 'GAME PAUSED !', { fontFamily: 'PoetsenOne-Regular', fontSize: 110, fill: '#FFFFFF', align: 'Center', lineSpacing: 10 });
        this.gamePausedTxt.setShadow(10, 15, '#000000', 0, true, true);
        this.buttons.CreatePausePopupButtons();
    }
    CreateGameOverPopUp() {
        this.overlay.CreateOverlay();
        this.overlay.overlay.setInteractive({ useHandCursor: true });
        this.overlay.overlay.on('pointerup', () => {
            // localStorage.setItem("super_bird_audio_on", 1);
            this.scene.scene.restart();
        }); //TODO: add restart button functionality
        let gameOverBox = this.scene.add.image(game.config.width / 2, game.config.height / 2, 'gameOver_box');
        let gameOverPlayer = this.scene.add.image(0, 0, 'gameOver_player');
        gameOverPlayer.copyPosition(gameOverBox);
        let gameOverTxt = this.scene.add.text(game.config.width / 20, game.config.height / 10, 'GAME OVER', { fontFamily: 'PoetsenOne-Regular', fontSize: 170, fill: '#FFFFFF', align: 'Center', lineSpacing: 10 });
        gameOverTxt.setAngle(-4);
        let gameOverLine = this.scene.add.text(game.config.width / 4, game.config.height / 4.7, 'The Bird is \n no more !!!', { fontFamily: 'PoetsenOne-Regular', fontSize: 98, fill: '#FFFFFF', align: 'Center', lineSpacing: 10 });
        gameOverLine.setAngle(-4);
        let shadowOne = gameOverLine.setShadow(10, 15, '#000000', 0, true, true);
        let restartLine = this.scene.add.text(game.config.width / 4, game.config.height / 1.5, 'Tap To Start Over', { fontFamily: 'PoetsenOne-Regular', fontSize: 68, fill: '#FFFFFF', align: 'Center', lineSpacing: 10 });
        restartLine.setShadow(10, 12, '#000000', 0, true, true);
        let restartTween = this.scene.tweens.add({
            targets: restartLine,
            alpha: 0.2,
            yoyo: true,
            repeat: -1,
            duration: 500,
        });
    }
    OnPointerUp() {
        console.log("Enter Menu");
        this.scene.scene.start('TitleScene');
    }
}
export default PopUp;