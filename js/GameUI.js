import Platform from "./Platform.js";
import Overlay from "./Overlay.js";
import Buttons from "./Buttons.js";
import PopUp from "./PopUp.js";
import { AudioManager } from "./AudioManager.js";
import GameScene from "./GameScene.js";
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
        this.initialTime = 180;
        this.timerTxt = null;
        this.timedEvent = null;
        this.sceneKey = null;
    }
    CreateInstructionScene() {
        // console.log("scene1", this.scene);
        let sceneKey = this.scene;
        this.platform.CreateTutorialPlatform();
        this.overlay.CreateOverlay();
        let instructionBox = this.scene.add.image(game.config.width / 2, game.config.height / 1.76, 'instruction_box');
        let title = this.scene.add.image(game.config.width / 2.02, game.config.height / 5.6, 'title');//.setScale(0.6 * scaleFactor);
        this.buttons.CreateButtons();
        this.buttons.backBtn.setVisible(false);
        this.pointerAnim = this.scene.add.spine(game.config.width / 1.5, game.config.height / 1.38, 'pointer');
        this.pointerAnim.setColor('0x0096FF');
        this.introAnim = this.scene.add.spine(game.config.width / 2.2, game.config.height / 1.5, 'intro').setVisible(false).setScale(0.17 * scaleFactor);
        if (isMobile) {
            this.introAnim.y = game.config.height / 1.477;
        }
        this.PointerAnimation();
        let instructionTxt = this.scene.add.text(game.config.width / 3.1, game.config.height / 2.8, 'HOLD OR TAP TO \n FORM ICE CUBE', { fontFamily: 'PoetsenOne-Regular', fontSize: 50, fill: '#340158', align: 'Center', lineSpacing: 10 });
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
            this.introAnim.on('complete', () => {
                this.introAnim.setVisible(false);
                this.PointerAnimation();
            });
        }
    }

    CreateGameScene() {
        // console.log("scene2", this.scene);
        this.sceneKey = this.scene;
        this.overlay.CreateGameControlsOverlay();
        this.buttons.CreateButtons();
        this.buttons.playBtn.setVisible(false);
        this.buttons.backBtn.setPosition(game.config.width / 10.2, game.config.height / 17.08);
        this.buttons.backBtn.on('pointerup', () => {
            this.scene.scene.pause();
            this.scene.scene.launch('PausedScene', { sceneKeyManager: this.sceneKey });
        });
        this.buttons.soundBtn.setPosition(game.config.width / 1.11, game.config.height / 17.08).setVisible(true).setInteractive({ useHandCursor: true });
        if (localStorage.getItem("super_bird_audio_on") == null) {
            localStorage.setItem("super_bird_audio_on", 1);
        }
        if (localStorage.getItem("super_bird_audio_on") == "1") {
            this.buttons.soundBtn.setFrame(0);
            AudioManager.PlayBGAudio();
        }
        else {
            this.buttons.soundBtn.setFrame(1);
            AudioManager.StopBGAudio();
        }
        this.buttons.soundBtn.on('pointerup', () => {
            if (localStorage.getItem("super_bird_audio_on") == "1") {
                this.buttons.soundBtn.setFrame(1);
                localStorage.setItem("super_bird_audio_on", 2);
                AudioManager.StopBGAudio();
            }
            else {
                this.buttons.soundBtn.setFrame(0);
                localStorage.setItem("super_bird_audio_on", 1);
                AudioManager.PlayBGAudio();
            }
        });
        let base = this.scene.add.image(game.config.width / 2.01, game.config.height / 16.6, 'score_base');
        let distIcon = this.scene.add.image(game.config.width / 3.02, game.config.height / 25, 'distance_icon');
        let stopwatch = this.scene.add.image(game.config.width / 3.14, game.config.height / 11.8, 'stopwatch');
        this.CreateTimer();
    }

    CreateTimer() {
        this.timerTxt = this.scene.add.text(game.config.width / 2.18, game.config.height / 15, this.FormatTime(this.initialTime), { fontFamily: 'PoetsenOne-Regular', fontSize: 60, fill: '#FFFFFF', align: 'Center', lineSpacing: 10 });
        this.timedEvent = this.scene.time.addEvent({ delay: 1000, paused: false, callback: this.onEvent, callbackScope: this, loop: true });
    }

    FormatTime(seconds) {
        // Minutes
        let partInMinutes = Math.floor(seconds / 60);
        // Seconds
        let partInSeconds = seconds % 60;
        // Adds left zeros to minutes
        partInMinutes = partInMinutes.toString().padStart(2, '0');
        // Adds left zeros to seconds
        partInSeconds = partInSeconds.toString().padStart(2, '0');
        // Returns formated time
        return `${partInMinutes}:${partInSeconds}`;
    }

    onEvent() {
        this.initialTime -= 1; // One second
        this.timerTxt.setText(this.FormatTime(this.initialTime));
        if (this.initialTime == 0) {
            this.timedEvent.paused = true;
            this.scene.GameOver();
        }
    }

}
export default GameUI;