import PopUp from "./PopUp.js";
export default class PausedScene extends Phaser.Scene {
    constructor() {
        super('PausedScene');
    }
    init() {
        this.popUp = new PopUp(this);
    }
    create() {
        this.ShowPausePopup();
    }
    ShowPausePopup() {
        this.popUp.CreatePausePopUp();
        this.popUp.buttons.continueBtn.on('pointerup', () => {
            this.scene.stop();
            this.scene.resume('GameScene');
        });
    }
    update() {

    }
}