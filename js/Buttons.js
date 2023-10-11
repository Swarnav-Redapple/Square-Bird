class Buttons {
    constructor(scene) {
        this.scene = scene;
        this.settingsBtn = null;
        this.homeBtn = null;
        this.achievementBtn = null;
        this.playBtn = null;
        this.pauseBtn = null;
        this.continueBtn = null;
        this.backBtn = null;
        this.closedBtn = null;
        this.soundBtn = null;
        this.musicBtn = null;
    }
    CreateButtons() {
        this.playBtn = this.scene.add.image(game.config.width / 2, game.config.height / 1.23, 'playButton').setInteractive({ useHandCursor: true });
        this.settingsBtn = this.scene.add.image(game.config.width / 3.2, game.config.height / 1.08, 'settingsButton').setInteractive({ useHandCursor: true });
        // this.homeBtn = this.scene.add.image(game.config.width / 2, game.config.height / 1.08, 'homeButton');
        this.homeBtn = this.scene.add.image(game.config.width / 1.45, game.config.height / 1.08, 'homeButton');
        this.pauseBtn = this.scene.add.image(0, 0, 'pauseButton').setVisible(false).setInteractive({ useHandCursor: true });
    }
    CreatePausePopupButtons() {
        // console.log("Paused");
        this.continueBtn = this.scene.add.image(game.config.width / 2, game.config.height / 2, 'continueButton').setInteractive({ useHandCursor: true });

        this.backBtn = this.scene.add.image(game.config.width / 2, game.config.height / 1.48, 'backButton').setInteractive({ useHandCursor: true });

    }
    CreateSettingsPopupButtons() {
        let sound_toggleCounter = 0;
        let music_toggleCounter = 0;

        this.closedBtn = this.scene.add.sprite(game.config.width / 1.07, game.config.height / 2.5, 'closedButton').setInteractive({ useHandCursor: true });

        this.soundBtn = this.scene.add.sprite(game.config.width / 2.7, game.config.height / 1.77, 'sound_btns').setInteractive({ useHandCursor: true });
        this.soundBtn.on('pointerup', () => {
            sound_toggleCounter++;
            if (sound_toggleCounter % 2 == 0) {
                this.soundBtn.setFrame(0);
            }
            else {
                this.soundBtn.setFrame(1);
            }
        });

        this.musicBtn = this.scene.add.sprite(game.config.width / 1.5, game.config.height / 1.77, 'music_btns').setInteractive({ useHandCursor: true });
        this.musicBtn.on('pointerup', () => {
            music_toggleCounter++;
            if (music_toggleCounter % 2 == 0) {
                this.musicBtn.setFrame(0);
            }
            else {
                this.musicBtn.setFrame(1);
            }
        });
    }
    InteractivePlayButton() {
        this.playBtn.on('pointerup', () => {
            this.scene.scene.stop();
            this.scene.scene.start('GameScene');
        });
    }
}
export default Buttons;
