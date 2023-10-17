class Player {
    constructor(scene) {
        this.scene = scene;
        this.player = null;
        this.gameObjContainer = null;
    }
    CreatePlayer() {
        // this.gameObjContainer = this.scene.add.container();
        this.player = this.scene.add.spine(game.config.width / 2.25, game.config.height / 1.28, 'penguin').setScale(0.17 * scaleFactor).setDepth(2);
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
        this.player.setOffset(game.config.width / 10.58, -game.config.height / 3.76);
        if (isMobile) {
            this.player.setOffset(game.config.width / 10.58, -game.config.height / 3.24);
        }
        this.scene.physics.add.existing(this.player);
        this.player.body.allowGravity = true;
        this.player.body.immovable = false;
        // this.player.body.setVelocityX(70);

        this.player.play('Idle', true);
    }
}
export default Player;