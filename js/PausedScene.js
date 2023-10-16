import PopUp from "./PopUp.js";
import { AudioManager } from "./AudioManager.js";
export default class PausedScene extends Phaser.Scene {
    constructor() {
        super('PausedScene');
    }
    init() {
        // console.log("scene.key", data.sceneKeyManager);
        this.popUp = new PopUp(this);
    }
    create(data) {
        this.ShowQuitPopUp(data.sceneKeyManager);
    }
    ShowPausePopup() {
        this.popUp.CreatePausePopUp();
        this.popUp.buttons.continueBtn.on('pointerup', () => {
            this.scene.stop();
            this.scene.resume('GameScene');
        });
        this.popUp.buttons.backBtn.on('pointerup', () => {
            // isPaused = false;
            this.scene.stop();
            this.scene.stop('GameScene');
            this.scene.start('TutorialScene');
        });
    }
    ShowQuitPopUp(_sceneKey) {
        this.popUp.CreateQuitPopUp();
        this.popUp.buttons.yesBtn.on('pointerup', () => {
            this.scene.stop();
            this.scene.stop(_sceneKey);
            if (localStorage.getItem("super_bird_audio_on") == "1") {
                AudioManager.StopBGAudio();
            }
            this.scene.start('TutorialScene');
        });
        this.popUp.buttons.noBtn.on('pointerup', () => {
            this.scene.stop();
            this.scene.resume(_sceneKey);
        });
    }
    update() {

    }
}