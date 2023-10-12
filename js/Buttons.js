class Buttons {
    constructor(scene) {
        this.scene = scene;
        this.backBtn = null;
        this.homeBtn = null;
        this.achievementBtn = null;
        this.playBtn = null;
        this.pauseBtn = null;
        this.continueBtn = null;
        // this.backBtn = null;
        this.yesBtn = null;
        this.noBtn = null;
        this.soundBtn = null;
        this.sound_toggleCounter = 0;
    }
    CreateButtons() {

        this.playBtn = this.scene.add.image(game.config.width / 2, game.config.height / 1.23, 'playButton').setInteractive({ useHandCursor: true });
        this.backBtn = this.scene.add.image(game.config.width / 3.2, game.config.height / 1.08, 'backButton').setInteractive({ useHandCursor: true });
        // this.homeBtn = this.scene.add.image(game.config.width / 2, game.config.height / 1.08, 'homeButton');
        this.homeBtn = this.scene.add.image(game.config.width / 1.45, game.config.height / 1.08, 'homeButton');
        // this.pauseBtn = this.scene.add.image(0, 0, 'pauseButton').setVisible(false).setInteractive({ useHandCursor: true });

        this.soundBtn = this.scene.add.sprite(0, 0, 'sound_btns').setVisible(false);
    }
    CreatePausePopupButtons() {
        // console.log("Paused");
        this.continueBtn = this.scene.add.image(game.config.width / 2, game.config.height / 2, 'continueButton').setInteractive({ useHandCursor: true });

        // this.backBtn = this.scene.add.image(game.config.width / 2, game.config.height / 1.48, 'backButton').setInteractive({ useHandCursor: true });

    }
    CreateQuitPopupButtons() {
        // let sound_toggleCounter = 0;
        // let music_toggleCounter = 0;

        this.yesBtn = this.scene.add.image(game.config.width / 4, game.config.height / 1.76, 'yesButton').setInteractive({ useHandCursor: true });

        this.noBtn = this.scene.add.image(this.yesBtn.x + game.config.width / 2.04, game.config.height / 1.76, 'noButton').setInteractive({ useHandCursor: true });


    }
    InteractivePlayButton() {
        this.playBtn.on('pointerup', () => {
            this.scene.scene.stop();
            this.scene.scene.start('GameScene');
        });
    }
}
export default Buttons;
