class Player {
    constructor(scene) {
        this.scene = scene;
        this.player = null;
        this.gameObjContainer = null;
    }
    CreatePlayer() {
        // this.player = this.scene.physics.add.image(480, 960, 'player').setDepth(0)  //.setIgnoreGravity(false);
        // this.gameObjContainer = this.scene.add.container();
        this.player = this.scene.add.spine(game.config.width / 2.25, 960, 'penguin').setScale(0.17 * scaleFactor).setDepth(2);
        // if (isMobile) {
        //     this.player.y = game.config.height / 1.8;
        // }
        this.player.isCollide = "false";
        // this.gameObjContainer.add(this.player);
        // this.gameObjContainer.setPosition(480, 960);
        // let dp = this.player.displayWidth;
        // let dh = this.player.displayHeight;
        // this.gameObjContainer.setSize(dp, dh);
        // this.scene.physics.add.existing(this.gameObjContainer);
        // this.gameObjContainer.setOrigin(0.5, 1);
        // this.gameObjContainer.setOffset(102, 48);
        // this.gameObjContainer.body.allowGravity = true;
        // this.gameObjContainer.body.immovable = false;
        this.player.setSize(this.player.width - game.config.width / 216, this.player.height, true);
        this.player.setOffset(game.config.width / 10.58, 35);
        this.scene.physics.add.existing(this.player);
        this.player.body.allowGravity = true;
        this.player.body.immovable = false;
        // this.player.body.setVelocityX(70);

        this.player.play('Idle', true);
        // this.scene.tweens.add({
        //     targets: this.player,
        //     x: 580,
        // });
        // this.player.play('Idle', true);

        // this.scene.time.addEvent({
        //     delay: 1000,
        //     callback: this.scene.delayDone,
        //     callbackScope: this,
        //     loop: false
        // });
        // console.log(this.player)
        // this.player.setSize(this.player.width, this.player.height, true);

        // // if (!isPaused) {

    }
    // delayDone() {
    //     // this.player.setSize(this.player.width + 500, this.player.height, true);
    // }
}
export default Player;