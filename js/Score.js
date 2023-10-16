class Score {
    constructor(scene) {
        this.scene = scene;
        // this.gameUI = new GameUI(this.scene);
        this.sceneKey = this.scene;
        this.getScene = null;
        this.distCovered = 0;
        this.scoreTxt = null;
        this.counter = 0;
        this.scoreEvent = null;
    }
    CalculateScore() {
        this.scoreTxt = this.scene.add.text(game.config.width / 1.97, game.config.height / 46, this.distCovered, { fontFamily: 'PoetsenOne-Regular', fontSize: 60, fill: '#FFFFFF', align: 'Center', lineSpacing: 10 });

        this.scoreEvent = this.scene.time.addEvent({ delay: 1500, paused: false, callback: this.UpdateScore, callbackScope: this, loop: true });
    }
    UpdateScore() {
        if (!this.scene.gameUI.timedEvent.paused) {
            this.distCovered += 1;
            this.scoreTxt.setText(this.distCovered);
            if (this.distCovered % 5 == 0) {
                this.scene.platform.platformSpeed += 0.05;
                this.scene.bg.bgSpeed += 0.05;
                this.scene.platform.obsSpeed += 0.05;
                // console.log(" this.platform.platformSpeed", this.scene.platform.platformSpeed, this.scene.bg.bgSpeed, this.scene.platform.obsSpeed);
            }
        }
    }
}
export default Score;