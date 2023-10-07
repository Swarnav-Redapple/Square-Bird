import Background from "./Background.js";
import { AudioManager } from "./AudioManager.js";
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
        this.platformNumCheck = 0;
        this.gameObjContainer = null;

    }

    create() {
        // this.cameras.main.setZoom(0.2);
        let gridConfig = {
            'scene': this,
            'cols': 70,
            'rows': 12
        }
        this.alignGrid = new AlignGrid(gridConfig);
        // this.alignGrid.showNumbers();
        this.AddAudio();
        this.ShowBg();
        this.ShowPlatform();
        this.ShowGameUI();
        this.CreateBird();
        // this.ShowDistanceCovered();
    }
    AddAudio() {
        AudioManager.CreateAudio();
    }
    PlayBgAudio() {
        AudioManager.PlayBGAudio();
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
        this.gameUI.CreateGameScene();
        this.gameUI.overlay.controlOverlay.on('pointerup', this.SafeDistanceCheck, this);
    }
    CreateBird() {

        this.player.CreatePlayer();

        this.PlayBgAudio();

        //-----Bird & Lower Platform Colliders-----------------------//

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
            // console.log("num:", this.platformNumCheck);
            this.platformNumCheck = parseInt(_platform.num);
            _bird.body.setVelocity(260, 0);
            AudioManager.PlayDropAudio();
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
            AudioManager.PlayHitAudio();
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
            AudioManager.PlayHitAudio();
            // console.log("Top Collision");
            _bird.play('Die', false, 1);
            _bird.body.setVelocity(0, 0);
            this.isGameOver = true;
            _bird.on('complete', () => {
                this.GameOver();
            })
        }
    }
    PlatformCheck() {
        //     for (let i = 0; i <)
        //         console.log("pf", this.platform.lowerPlatformArray.x);
    }
    SafeDistanceCheck() {
        let safeDist = 0;

        // this.platform.lowerPlatformArray
        if (this.platformNumCheck == 1) {
            // console.log("1");
            for (let i = 0; i < this.platform.lowerPlatformArray.length; i++) {
                safeDist = Math.abs(this.player.player.x, this.platform.lowerPlatformArray[i].x);
                // console.log(safeDist);
                if (safeDist < game.config.width / 2.57) {

                    // console.log("Notify Me!");
                }
                else {

                    this.ShowCubes();
                    break;
                }

            }
        }
        else if (this.platformNumCheck == 2) {
            // console.log("2");
            for (let i = 0; i < this.platform.lowerPlatformArrayTwo.length; i++) {
                safeDist = Math.abs(this.player.player.x, this.platform.lowerPlatformArrayTwo[i].x);
                if (safeDist < game.config.width / 2.57) {
                    // console.log("Notify Me!");
                }
                else {

                    this.ShowCubes();
                    break;
                }

            }
        }
        else {
            // console.log("3");
            for (let i = 0; i < this.platform.lowerPlatformArrayThree.length; i++) {
                safeDist = Math.abs(this.player.player.x, this.platform.lowerPlatformArrayThree[i].x);
                if (safeDist < game.config.width / 2.57) {
                    // console.log("Notify Me!");
                }
                else {

                    this.ShowCubes();
                    break;
                }

            }
        }

    }
    ShowCubes() {
        if (this.isDown && !this.isGameOver) {
            // this.clickCounter = 0;
            AudioManager.PlayCubeCreateAudio();
            this.iceCube.CreateIceCubes();
            // this.iceCube.cubes.setGravityY(10);
            this.iceCube.smoke.setPosition(this.player.player.x - game.config.width / 54, this.player.player.y);
            this.iceCube.cubes.setPosition(this.player.player.x, this.player.player.y - game.config.height / 16.7);
            // this.player.player.add(this.iceCube.cubes);
            // this.iceCube.cubes.setVelocityX(240);
            // this.iceCube.cubes.setFrictionX(1);
            // }

            this.cubesArray.push(this.iceCube.cubes);

            //----Cubes with Cubes Colliders-------------------------//

            this.physics.add.collider(this.cubesArray, this.player.player, this.CubesOnCollidingPlayer, null, this);


            //----Cubes with Cubes Colliders-------------------------//

            this.physics.add.collider(this.cubesArray, this.cubesArray, this.CubesOnTouchingCubes, null, this);

            //----Cubes & Platform Colliders-------------------------//

            this.physics.add.collider(this.iceCube.cubes, this.platform.lowerPlatformArray, this.CubesOnCollsionWithPlatform, null, this);
            // this.physics.add.overlap(this.iceCube.cubes, this.platform.lowerPlatformArray, this.CubesOnOverlappingPlatform, null, this);

            this.physics.add.collider(this.iceCube.cubes, this.platform.lowerPlatformArrayTwo, this.CubesOnCollsionWithPlatform, null, this);
            // this.physics.add.overlap(this.iceCube.cubes, this.platform.lowerPlatformArrayTwo, this.CubesOnOverlappingPlatform, null, this);

            this.physics.add.collider(this.iceCube.cubes, this.platform.lowerPlatformArrayThree, this.CubesOnCollsionWithPlatform, null, this);
            // this.physics.add.overlap(this.iceCube.cubes, this.platform.lowerPlatformArrayThree, this.CubesOnOverlappingPlatform, null, this);

            this.PositioningCubes();
            // console.log("this.crateArray:", this.crateArray);
        }
    }

    CubesOnCollidingPlayer(_cube, _bird) {
        _bird.body.setGravityY(12000);
        // console.log("jkjkjk");
    }

    CubesOnTouchingCubes(_cubeOne, _cubeTwo) {
        _cubeTwo.setGravityY(12000);
        // console.log('_cubeOne:', _cubeOne, '\n', '_cubeTwo: ', _cubeTwo);
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
        if (_cube.x <= -game.config.width / 7.2) {
            // console.log("Shift");
            _cube.setVisible(false);
            this.cubesArray.shift();
            _cube.destroy();
        }
        else if (_cube.body.touching.down) {
            _cube.body.setVelocity(0, 0);
            //     // _cube.body.allowGravity = false;
            //     // _cube.body.immovable = true;

        }
        else if (_cube.body.touching.right && _cube.isCollide == "false") {
            this.cameras.main.shake(185, 0.02);
            _cube.isCollide = true;

            //     // console.log("isCollide");
        }
        // _cube.body.setVelocityX(0);
    }

    GameOver() {
        if (this.isGameOver) {
            AudioManager.StopBGAudio();
            this.player.player.destroy();
            this.popUp.CreateGameOverPopUp();

        }
    }

    update() {
        // if (this.player.player.x >= 2000) {
        //     this.player.player.body.setVelocityX(0);
        // }
        // if (this.isDown) {
        //     this.player.player.x += 4;
        this.MoveBg();
        this.RepositionPlatform();

    }
}
