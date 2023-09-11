class Player {
    constructor(scene) {
        this.scene = scene;
        this.player = null;
    }
    CreatePlayer() {
        // this.player = this.scene.physics.add.image(480, 960, 'player').setDepth(0)  //.setIgnoreGravity(false);
        this.player = this.scene.add.spine(480, 960, 'penguin').setScale(0.2 * scaleFactor, 0.2 * scaleFactor);
        this.player.play('Idle', true);
        // console.log(this.player)
        this.player.setSize(this.player.width, this.player.height + 5, true);
        this.scene.physics.add.existing(this.player);
        // // if (!isPaused) {
        this.player.body.allowGravity = true;
        // // }
        this.player.body.immovable = false;
    }
}
export default Player;