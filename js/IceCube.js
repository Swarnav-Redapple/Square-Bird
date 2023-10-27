class IceCube {
    constructor(scene) {
        this.scene = scene;
        this.cubes = null;
        this.smoke = null;
    }
    CreateIceCubes() {
        this.smoke = this.scene.add.spine(0, 0, 'smoke').setScale(0.2 * scaleFactor, 0.2 * scaleFactor);
        this.smoke.play('Smoke', false);
        this.cubes = this.scene.physics.add.image(0, 0, 'cubes').setScale(0.2 * scaleFactor).setBounce(0);

        this.scene.tweens.add({
            targets: this.cubes,
            scale: 1,
            duration: 80,
        });

        this.cubes.body.allowGravity = true;
        // this.cubes.body.immovable = f;
        this.cubes.isCollide = 'false';
    }
}
export default IceCube;