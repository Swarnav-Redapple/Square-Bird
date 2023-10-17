class Buttons {
    constructor(scene) {
        this.scene = scene;
        this.backBtn = null;
        this.playBtn = null;
        this.yesBtn = null;
        this.noBtn = null;
        this.soundBtn = null;
    }
    CreateButtons() {
        this.playBtn = this.scene.add.image(game.config.width / 2, game.config.height / 1.23, 'playButton').setInteractive({ useHandCursor: true });
        this.backBtn = this.scene.add.image(game.config.width / 3.2, game.config.height / 1.08, 'backButton').setInteractive({ useHandCursor: true });
        this.soundBtn = this.scene.add.sprite(0, 0, 'sound_btns').setVisible(false);
    }

    CreateQuitPopupButtons() {
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
