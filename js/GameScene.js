import Background from "./Background.js";
import AlignGrid from "./AlignGrid.js";
import Player from "./Player.js";
import Platform from "./Platform.js";
import GameUI from "./GameUI.js";
import Buttons from "./Buttons.js";
import IceCube from "./IceCube.js";
import PopUp from "./PopUp.js";
export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }
    init() {
        this.bg = new Background(this);
        this.player = new Player(this);
        this.platform = new Platform(this);
        this.gameUI = new GameUI(this);
        this.buttons = new Buttons(this);
        this.iceCube = new IceCube(this);
        this.popUp = new PopUp(this);

        this.distText;
        this.distance = 0;
        this.distanceCounter = 0;
        this.isDown = false;
        this.cubesArray = [];
        // this.count = 0;
        this.isGameOver = false;
        this.platformCanMove = false;

    }
    create() {
        // this.cameras.main.setZoom(0.5);
        let gridConfig = {
            'scene': this,
            'cols': 70,
            'rows': 12
        }
        this.alignGrid = new AlignGrid(gridConfig);
        // this.alignGrid.showNumbers();
        this.ShowBg();
        this.ShowPlatform();
        this.ShowGameUI();
        this.CreateBird();
        // this.ShowDistanceCovered();
    }

    ShowBg() {
        this.bg.CreateGameBG();
    }

    MoveBg() {
        // console.log("1Here");
        if (this.isDown && !this.isGameOver) {
            this.bg.MoveGameBG();
        }
    }

    ShowDistanceCovered() {
        this.distText = this.add.text(800, 50, "Distance : " + this.distance, { fontFamily: 'Arial', fontSize: 45, fill: '#FFFFFF', align: 'Center' });
    }

    ShowPlatform() {
        this.platform.CreateTopPlatform();
        this.platform.CreateBottomPlatform();
    }

    MovePlatform() {
        this.platform.MovePlatform();
    }
    RepositionPlatform() {
        this.platform.RepositioningPlatform();
    }
    ShowGameUI() {
        // console.log("interactive");
        this.gameUI.CreateGameScene();
        // console.log(this.gameUI.overlay.controlOverlay);
        setTimeout(() => {
            this.gameUI.overlay.controlOverlay.on('pointerup', this.ShowCubes, this);
        }, 450);

    }
    CreateBird() {
        this.player.CreatePlayer();
        // this.player.player.body.setVelocityX(440);
        // this.cameras.main.startFollow(this.player.player, true);

        //-----Bird & Lower Platform Colliders-------------------------//

        this.physics.add.collider(this.player.player, this.platform.lowerPlatformArray, this.BirdOnTouchingLowerPlatform, null, this);
        this.physics.add.collider(this.player.player, this.platform.lowerPlatformArrayTwo, this.BirdOnTouchingLowerPlatform, null, this);
        this.physics.add.collider(this.player.player, this.platform.lowerPlatformArrayThree, this.BirdOnTouchingLowerPlatform, null, this);

        //-----Bird & Top Platform Colliders-------------------------//

        this.physics.add.overlap(this.player.player, this.platform.topPlatformArray, this.BirdOnTouchingTopPlatform, null, this);
        this.physics.add.overlap(this.player.player, this.platform.topPlatformArrayTwo, this.BirdOnTouchingTopPlatform, null, this);
    }

    BirdOnTouchingLowerPlatform(_bird, _platform) {
        if (_bird.body.touching.down) {
            // console.log("making cubes");
            _bird.body.setVelocityX(250);
            this.isDown = true;
            this.platformCanMove = true;
        }

        if (this.platformCanMove) {
            this.platformCanMove = false;
            this.MovePlatform();
        }

        if (_bird.body.touching.right && _bird.isCollide == "false") {
            _bird.isCollide = "true";
            // console.log("bird", _bird);
            _bird.play('Die', false, 1);
            _bird.body.setVelocityX(0);
            this.isGameOver = true;
            _bird.on('complete', () => {
                this.GameOver();
            })
        }
    }
    BirdOnTouchingTopPlatform(_bird, _platform) {
        // if (_platform.body.touching.up) {
        if (_bird.isCollide == "false") {
            _bird.isCollide = "true";
            this.cameras.main.shake(185, 0.02);
            // console.log("Top Collision");
            _bird.play('Die', false, 1);
            _bird.body.setVelocity(0, 0);

            this.isGameOver = true;
            _bird.on('complete', () => {
                this.GameOver();
            })
        }
    }

    ShowCubes() {
        if (this.isDown && !this.isGameOver) {
            this.iceCube.CreateIceCubes();
            this.iceCube.cubes.setGravityY(500);
            this.iceCube.smoke.setPosition(this.player.player.x - 20, this.player.player.y);
            this.iceCube.cubes.setPosition(this.player.player.x - 20, this.player.player.y - 115);
            this.cubesArray.push(this.iceCube.cubes);

            //----Cubes with Cubes Colliders-------------------------//

            this.physics.add.collider(this.cubesArray, this.cubesArray, this.CubesOnTouchingCubes, null, this);

            //----Cubes & Platform Colliders-------------------------//

            this.physics.add.collider(this.iceCube.cubes, this.platform.lowerPlatformArray, this.CubesOnCollsionWithPlatform, null, this);

            this.physics.add.collider(this.iceCube.cubes, this.platform.lowerPlatformArrayTwo, this.CubesOnCollsionWithPlatform, null, this);

            this.physics.add.collider(this.iceCube.cubes, this.platform.lowerPlatformArrayThree, this.CubesOnCollsionWithPlatform, null, this);

            this.PositioningCubes();
            // console.log("this.crateArray:", this.crateArray);
        }
    }
    CubesOnTouchingCubes(_cubeOne, _cubeTwo) {
        // console.log('_cubeOne:', _cubeOne, '\n', '_cubeTwo: ', _cubeTwo);
    }
    CubesOnTouchingPlatform(_cube, _platform) {
        if (_cube.body.touching.right) {
            _cube.body.setVelocityX(0);
        }
        // console.log("CubesOnTouchingPlatform", this.iceCube.cubes.body, this.platform.lowerPlatformArray);
        // if (_cube.body.blocked.down) {
        //     _cube.body.setVelocityX(70);
        // }

    }
    PositioningCubes() {
        this.physics.add.overlap(this.cubesArray, this.cubesArray, function (s1, s2) {
            let b1 = s1.body;
            let b2 = s2.body;

            // b1.body.setVelocityX(1);
            // b2.body.setVelocityX(1);

            if (b1.y > b2.y) {
                b2.y += (b1.top - b2.bottom);
                b2.stop();
            }
            else {
                b1.y += (b2.top - b1.bottom);
                b1.stop();
            }
        });
        this.physics.add.overlap(this.player.player, this.cubesArray, function (s1, s2) {
            let b1 = s1.body;
            let b2 = s2.body;

            if (b1.y > b2.y) {
                b2.y += (b1.top - b2.bottom);
                b2.stop();
            }
            else {
                b1.y += (b2.top - b1.bottom);
                b1.stop();
            }
        });
        // this.RepositioningPlayerAndCubes();
    }

    CubesOnCollsionWithPlatform(_cube, _platform) {
        if (_cube.x <= -150) {
            // console.log("Shift");
            _cube.setVisible(false);
            this.cubesArray.shift();
            _cube.destroy();
        }
        else if (_cube.body.touching.down) {
            _cube.body.setVelocity(0, 1);
            // _cube.body.allowGravity = false;

        }
        else if (_cube.body.touching.right && _cube.isCollide == "false") {
            // _cube.body.setVelocityX(0);
            this.cameras.main.shake(185, 0.02);
            _cube.isCollide = true;
            // console.log("isCollide");
        }
        // _cube.body.setVelocityX(0);
    }

    GameOver() {
        if (this.isGameOver) {
            this.player.player.destroy();
            this.popUp.CreateGameOverPopUp();

        }
    }

    update() {
        // if (this.player.player.x >= 2000) {
        //     this.player.player.body.setVelocityX(0);
        // }
        this.MoveBg();
        this.RepositionPlatform();

    }
}
