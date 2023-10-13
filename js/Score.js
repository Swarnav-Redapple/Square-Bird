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

        this.scoreEvent = this.scene.time.addEvent({ delay: 1800, paused: false, callback: this.UpdateScore, callbackScope: this, loop: true });
        console.log("this.gameUI.timedEvent.paused", this.scene.gameUI.timedEvent.paused);
    }
    UpdateScore() {
        if (!this.scene.gameUI.timedEvent.paused) {
            this.distCovered += 1;
            this.scoreTxt.setText(this.distCovered);
        }
    }
}
export default Score;