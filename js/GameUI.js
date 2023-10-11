import Platform from "./Platform.js";
import Overlay from "./Overlay.js";
import Buttons from "./Buttons.js";
import PopUp from "./PopUp.js";
class GameUI {
    constructor(scene) {
        this.scene = scene;
        this.platform = new Platform(this.scene);
        this.overlay = new Overlay(this.scene);
        this.buttons = new Buttons(this.scene);
        this.popUp = new PopUp(this.scene);
        this.pointerAnim = null;
        this.introAnim = null;
        this.counter = 0;
        this.showPointerAnim = true;
    }
    CreateInstructionScene() {
        // console.log("scene1", this.scene);
        let sceneKey = this.scene;
        this.platform.CreateTutorialPlatform();
        this.overlay.CreateOverlay();
        let instructionBox = this.scene.add.image(game.config.width / 2, game.config.height / 2.18, 'instruction_box');
        let title = this.scene.add.image(game.config.width / 2.02, game.config.height / 9.6, 'title');//.setScale(0.6 * scaleFactor);
        this.buttons.CreateButtons();
        this.buttons.settingsBtn.setVisible(false);
        this.buttons.homeBtn.setVisible(false);
        this.buttons.pauseBtn.setVisible(false);
        // this.buttons.settingsBtn.on('pointerup', () => {
        //     this.scene.scene.pause();
        //     this.scene.scene.launch('PausedScene', { key: '1', sceneKeyManager: sceneKey });
        // });
        this.pointerAnim = this.scene.add.spine(game.config.width / 1.5, game.config.height / 1.6, 'pointer');
        this.pointerAnim.setColor('0x0096FF');
        this.introAnim = this.scene.add.spine(game.config.width / 2.2, game.config.height / 1.79, 'intro').setVisible(false).setScale(0.17 * scaleFactor);
        // if (isMobile) {
        //     this.introAnim.y = game.config.height / 1.82;
        // }

        this.PointerAnimation();

        // this.introAnim.play('Double_Jump', true);


        let instructionTxt = this.scene.add.text(game.config.width / 3.1, game.config.height / 3.75, 'HOLD OR TAP TO \n FORM ICE CUBE', { fontFamily: 'PoetsenOne-Regular', fontSize: 50, fill: '#340158', align: 'Center', lineSpacing: 10 });
        this.buttons.InteractivePlayButton();
    }
    PointerAnimation() {
        // console.log("this.count0", this.counter);
        this.counter += 1;
        this.pointerAnim.play('Pointer', false, 1);
        this.pointerAnim.timeScale = 3;

        this.pointerAnim.on('complete', () => {
            this.IntroAnimation(this.counter);
        });

    }
    IntroAnimation(_count) {
        if (!this.introAnim.visible) {
            this.introAnim.setVisible(true);
        }

        // Remove any existing event listeners to prevent accumulation


        if (_count % 2 !== 0) {
            if (!this.showPointerAnim) {
                this.showPointerAnim = true;
            }
            this.introAnim.play('Single_Jump', false, 1);
            this.introAnim.removeAllListeners('complete');
            this.introAnim.on('complete', () => {
                this.PointerAnimation();
            });
        } else {
            // console.log('else');
            this.introAnim.play('Double_Jump', false, 1);
            this.introAnim.removeAllListeners('complete');

            // this.showPointerAnim = false;
            // _count += 1;
            // this.introAnim.play('Single_Jump', false, 1);
            // this.introAnim.removeAllListeners('complete');
            this.introAnim.on('complete', () => {
                this.introAnim.setVisible(false);
                this.PointerAnimation();
            });
            // this.introAnim.on('complete', () => {
            //     this.PointerAnimation();
            // });
        }


    }
    // 

    // if (this.introAnim.visible == false) {
    //     this.introAnim.setVisible(true);
    // }
    // if (this.counter == 1) {
    //     // console.log(_count);

    //     console.log("this.count1", this.counter);
    //     this.counter -= 1;
    //     this.introAnim.play('Single_Jump', false, 0);
    //     this.introAnim.on('complete', (spine) => {
    //         // setTimeout(() => {
    //         this.PointerAnimation();
    //         // }, 500);


    //     });

    // }
    // else if (this.counter % 2 == 1) {
    //     this.counter -= 1;
    //     console.log("this.count2", this.counter);

    //     this.introAnim.play('Double_Jump', false, 0);

    //     this.introAnim.on('complete', (spine) => {
    //         // setTimeout(() => {
    //         this.PointerAnimation();
    //         // }, 500);

    //     });
    // }
    // }
    CreateGameScene() {
        // console.log("scene2", this.scene);
        let sceneKey = this.scene;
        this.overlay.CreateGameControlsOverlay();
        this.buttons.CreateButtons();
        this.buttons.playBtn.setVisible(false);
        this.buttons.homeBtn.setVisible(false);
        // this.buttons.achievementBtn.setVisible(false);
        this.buttons.settingsBtn.setPosition(game.config.width / 10.2, game.config.height / 17.08);
        this.buttons.settingsBtn.on('pointerup', () => {
            this.scene.scene.pause();
            this.scene.scene.launch('PausedScene', { key: '1', sceneKeyManager: sceneKey });
        });
        this.buttons.pauseBtn.setPosition(game.config.width / 1.11, game.config.height / 17.08).setVisible(true).setInteractive({ useHandCursor: true });
        this.buttons.pauseBtn.on('pointerup', () => {
            // this.popUp.CreatePausePopUp();
            // // isResumed = false;
            // isPaused = true;
            // platformCanMove = false;
            this.scene.scene.pause();
            this.scene.scene.launch('PausedScene', { key: '0' });
        });
    }
    CreateGameResumeScene() {

    }
}
export default GameUI;