class IceCube {
    constructor(scene) {
        this.scene = scene;
        this.cubes = null;
        this.smoke = null;
    }
    CreateIceCubes() {
        // this.cubes = this.scene.add.spine(0, 0, 'cube').setScale(0.2 * scaleFactor, 0.2 * scaleFactor);
        this.smoke = this.scene.add.spine(0, 0, 'smoke').setScale(0.2 * scaleFactor, 0.2 * scaleFactor);
        this.smoke.play('Smoke', false);
        this.cubes = this.scene.physics.add.image(0, 0, 'cubes').setScale(0.2 * scaleFactor);
        //.setStatic(true).setIgnoreGravity(false);
        // this.cubes.body.setVelocity(-70, 0);
        // this.cubes.play('Ice_02', false, 1);
        this.scene.tweens.add({
            targets: this.cubes,
            scale: 1.05,
            duration: 80,
        });
        // this.cubes.on('complete', () => {

        // this.scene.physics.add.existing(this.cubes);
        // this.cubes.body.setOffset(this.cubes.width - 25, this.cubes.height);
        // this.cubes.setSize(this.cubes.width - 50, this.cubes.height, true);
        // });


        this.cubes.body.allowGravity = true;
        // this.cubes.body.immovable = f;
        this.cubes.isCollide = 'false';
    }
}
export default IceCube;