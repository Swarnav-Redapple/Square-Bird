import Background from "./Background.js";
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
        this.bg;
        this.distText;
        this.distance = 0;
        this.distanceCounter = 0;
        this.platform;
        this.pLiner;
        this.bird;
        this.isDown = false;
        this.arrayBirdPos = [];
        this.arrayCubesPos = [];
        this.obstacleArray = [];
        this.ObsVel = 400;
        this.cubesArray = [];
        // this.count = 0;
        this.isGameOver = false;
        this.popUp = new PopUp(this);

    }
    create() {
        // console.log("buttons", this.buttons.continueBtn);
        this.cameras.main.setZoom(0.6);

        this.ShowBg();
        // // this.ShowDistanceCovered();
        this.ShowPlatform();
        // this.ShowGameUI();
        // this.CreateBird();
        // this.MovePlayer();
        // this.CreatePlatformLiner();
        // this.InteractiveCanvas();
        // game.events.on('xyz', this.ABC, this);
        // this.CreateObstacles();
        // this.MovingObstacles();
    }
    ShowBg() {
        this.bg.CreateGameBG();
    }
    MoveBg() {
        if (this.isDown && !isPaused && !this.isGameOver) {
            this.bg.gameBg.tilePositionX += 6;
            // if (this.distanceCounter == 10) {
            //     this.distanceCounter = 0;
            //     this.bg.tilePositionX += 6 * 1.5;
        }
    }
    ShowDistanceCovered() {
        this.distText = this.add.text(800, 50, "Distance : " + this.distance, { fontFamily: 'Arial', fontSize: 45, fill: '#FFFFFF', align: 'Center' });
    }
    ShowPlatform() {
        // this.platform = this.add.tileSprite(960, 1050, 1920, 72, "platform", 1).setScale(1);
        // this.physics.world.enable(this.platform);
        // this.platform.body.allowGravity = false;
        // this.platform.body.immovable = true;
        this.platform.CreateBottomPlatform();
        // this.platform.MoveBottomPlatform();
        // this.platform.CreateMidPlatform();

        // this.platform.sideCollider.setVelocity(7, 0);
    }
    MoveColliders() {
        if (this.isDown && !isPaused && !this.isGameOver) {
            console.log("move the platfirms");

        }
    }

    MovePlatform() {
        if (!isPaused && !this.isGameOver) {
            this.platform.MoveBottomPlatform();
            this.platform.MoveTopPlatform();
            this.platform.MoveCollisionBoxes();
            // this.platform.tilePositionX += 7;
            // if (this.distanceCounter == 10) {
            //     this.distanceCounter = 0;
            //     this.platform.tilePositionX += 7 * 1.5;
        }
    }
    ShowGameUI() {
        this.gameUI.CreateGameScene();
        this.gameUI.overlay.controlOverlay.on('pointerup', this.ShowCubes, this);
    }
    CreateBird() {
        if (!isPaused) {
            this.player.CreatePlayer();
            // this.platform.MoveCollisionBoxes();
            // this.player.player.setVelocityX(12);
            this.physics.add.collider(this.player.player, this.platform.bottomPlatformArray, this.BirdOnTouchingPlatform, null, this);
            this.physics.add.collider(this.player.player, this.platform.sideCollider, this.BirdOnCollidingColliders, null, this);
            this.physics.add.collider(this.player.player, this.cubesArray, this.BirdOnTouchingCubes, null, this);
            // this.physics.add.collider(this.player.player, this.platform.bottomPlatformArray, this.XYZ, null, this);
        }
    }
    BirdOnTouchingPlatform(_bird, _platform) {
        // console.log("quwfuhq;whifqh;owef");
        if (this.player.player.body.blocked.down) {
            // this.player.player.setVelocityX(7);
            // this.physics.world.setFPS(60);
            // _bird.setStatic(true);
            this.arrayBirdPos.push(this.player.player.x);
            this.arrayBirdPos.push(this.player.player.y + 20);
            this.isDown = true;
            // this.player.player.body.setVelocityX(1);
            // console.log("Down");
            // let abc = this.player.player.body.onWall(true);
            // console.log(abc);

        }
        if (this.player.player.body.blocked.right) {
            // this.player.player.setVelocityY(1);
        }
        // if (this.player.player.velocityX == 0) {
        //     this.isGameOver = true;
        // }
    }
    MovePlayer() {

    }
    BirdOnCollidingColliders(_bird, _collider) {

        // if (this.player.player.body.onWall()) {
        // console.log("_obs.x" + _obs.x);
        // if (this.player.player.body.blocked.right) {
        // this.isGameOver = true;
        console.log("GameOver");
        // for (let i = 0; i < this.obstacleArray.length; i++) {
        //     this.obstacleArray[i].setVelocityX(0);
        // }
        // _bird.setVelocityX(0);
        this.GameOver();

    }
    BirdOnTouchingCubes() {
        console.log("Touch cubes");
        this.player.player.body.setVelocityX(1);
    }
    // }

    ShowCubes() {
        console.log("Cring cubes");
        if (this.isDown && !this.isGameOver) {
            // let iceCube = this.physics.add.image(this.arrayBirdPos[0], this.arrayBirdPos[1], 'cube');
            this.iceCube.CreateIceCubes();
            this.iceCube.cubes.setPosition(this.arrayBirdPos[0], this.arrayBirdPos[1])
            // this.iceCube.cubes.body.setVelocityX(12);
            // this.physics.add.collider(this.iceCube.cubes, this.platform.bottomPlatformArray);
            this.cubesArray.push(this.iceCube.cubes);
            // for (let i = 0; i < this.cubesArray.length; i++) {

            // }
            this.physics.add.collider(this.cubesArray, this.cubesArray, this.CubesOnTouchingCubes, null, this);
            this.physics.add.collider(this.cubesArray, this.platform.bottomPlatformArray, this.CubesOnTouchingPlatform, null, this);

            this.physics.add.collider(this.cubesArray, this.platform.bottomPlatformArray, this.CubesOnCollsionWithPlatform, null, this);
            this.PositioningCubes();
            // console.log("this.crateArray:", this.crateArray);
        }
    }
    CubesOnTouchingCubes(_cubeOne, _cubeTwo) {
        console.log('_cubeOne:', _cubeOne, '\n', '_cubeTwo: ', _cubeTwo);
    }
    CubesOnTouchingPlatform(_cube, _platform) {
        if (_cube.body.blocked.down) {
            _cube.body.setVelocityX(1);
        }

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
        // this.physics.add.overlap(this.crateArray, this.platform.sideCollider, function (s1, s2) {
        //     let b1 = s1.body;
        //     let b2 = s2.body;

        //     if (b1.y > b2.y) {
        //         b2.y += (b1.top - b2.bottom);
        //         b2.stop();
        //     }
        //     else {
        //         b1.y += (b2.top - b1.bottom);
        //         b1.stop();
        //     }
        // });
        this.RepositioningPlayerAndCubes();
    }
    RepositioningPlayerAndCubes() {
        this.arrayCubesPos[0] = this.iceCube.cubes.x + 8;
        this.arrayCubesPos[1] = this.iceCube.cubes.y - 112;
        this.arrayBirdPos = [];
        this.player.player.setPosition(this.arrayCubesPos[0], this.arrayCubesPos[1]);
        this.arrayCubesPos = [];
        this.arrayBirdPos.push(this.player.player.x - 8);
        this.arrayBirdPos.push(this.player.player.y - 20);
        // this.physics.add.collider(this.cubesArray, this.platform.bottomPlatformArray, this.CubesOnCollsionWithPlatform, null, this);

    }


    CubesOnCollsionWithPlatform(_cube, _platform) {
        console.log("cube", _cube);
        console.log("collider", _platform)
        console.log("Cubes collision");
        // this.physics.add.overlap(this.crateArray, this.platform.sideCollider, function (s1, s2) {
        //     let b1 = s1.body;
        //     let b2 = s2.body;

        //     if (b1.y > b2.y) {
        //         b2.y += (b1.top - b2.bottom);
        //         b2.stop();
        //     }
        //     else {
        //         b1.y += (b2.top - b1.bottom);
        //         b1.stop();
        //     }
        // });
        this.arrayBirdPos = [];
        this.arrayBirdPos.push(this.player.player.x - 8);
        this.arrayBirdPos.push(this.player.player.y - 20);

        if (_cube.x <= -5) {
            console.log("Shift");
            _cube.setVisible(false);
            this.cubesArray.shift();
        }
        if (_cube.isCollide == "false") {
            // _cube.body.setVelocityX(0);
            this.cameras.main.shake(185, 0.026);
            _cube.isCollide = true;
            console.log("isCollide");
        }
    }
    // BirdOnCollisionWithPlatform) {

    // }
    GameOver() {
        if (this.isGameOver) {
            this.player.player.destroy();
            this.popUp.CreateGameOverPopUp();

        }
    }
    update() {
        // this.MoveBg();
        // this.MovePlatform();
        // this.UpdateObstaclePosition();
        // this.OverlapCondition();

    }
}
// CreatePlatformLiner() {
//     this.pLiner = this.add.image(0, 0, 'onepixel').setScale(1920, 100).setAlpha(0);
// }
// OverlapCondition() {
//     if (this.CheckOverlap(this.player.player, this.pLiner)) {
//         this.isGameOver = true;
//         for (let i = 0; i < this.obstacleArray.length; i++) {
//             this.obstacleArray[i].setVelocityX(0);
//         }
//         this.player.player.setVelocityX(0);
//         this.popUp.CreatePopUp();
//     }
// }
// CheckOverlap(_bird, _pLiner) {
//     let boundsA = _bird.getBounds();
//     let boundsB = _pLiner.getBounds();

//     return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
// }
// CreateObstacles() {
//     let obstacle = this.physics.add.image(2000, 950, 'onepixel').setScale(130).setDepth(0).setFrictionX(0);
//     obstacle.body.allowGravity = false;
//     obstacle.body.immovable = true;
//     this.obstacleArray.push(obstacle);
//     let obstacleTwo = this.physics.add.image(2800, 950, 'onepixel').setScale(130).setDepth(0).setFrictionX(0);
//     obstacleTwo.body.allowGravity = false;
//     obstacleTwo.body.immovable = true;
//     let obsTwo = this.physics.add.image(2800, 820, 'onepixel').setScale(130).setDepth(0).setFrictionX(0);
//     obsTwo.body.allowGravity = false;
//     obsTwo.body.immovable = true;
//     this.obstacleArray.push(obstacleTwo);
//     this.obstacleArray.push(obsTwo);
//     // console.log("this.crateArray", this.crateArray);
//     this.physics.add.overlap(this.crateArray, this.crateArray, function (s1, s2) {
//         let b1 = s1.body;
//         let b2 = s2.body;

//         if (b1.y > b2.y) {
//             b2.y += (b1.top - b2.bottom);
//             b2.stop();
//         }
//         else {
//             b1.y += (b2.top - b1.bottom);
//             b1.stop();
//         }
//     });
//     this.physics.add.overlap(this.crateArray, this.platform, function (s1, s2) {
//         let b1 = s1.body;
//         let b2 = s2.body;

//         if (b1.y > b2.y) {
//             b2.y += (b1.top - b2.bottom);
//             b2.stop();
//         }
//         else {
//             b1.y += (b2.top - b1.bottom);
//             b1.stop();
//         }
//     });
// }
// MovingObstacles() {
//     for (let i = 0; i < this.obstacleArray.length; i++) {
//         this.obstacleArray[i].setVelocityX(-this.ObsVel);

//     }
// }
// UpdateObstaclePosition() {
//     for (let i = 0; i < this.obstacleArray.length; i++) {
//         if (this.obstacleArray[i].x <= -40) {
//             this.obstacleArray[i].x = 1920;
//             this.distance += 1;
//             this.distanceCounter++;
//         }
//     }
//     if (this.distanceCounter == 10) {
//         this.distanceCounter = 0;
//         this.ObsVel = this.ObsVel * 1.5;
//         for (let i = 0; i < this.obstacleArray.length; i++) {
//             this.obstacleArray[i].setVelocityX(-this.ObsVel);
//             // console.log("Enter distace 10+");
//             // console.log("this.ObsVel" + this.ObsVel);
//             // console.log("obstacleArray[i].x" + this.obstacleArray[i].x);
//         }
//     }
//     this.distText.setText("Distance :" + this.distance);
// }





