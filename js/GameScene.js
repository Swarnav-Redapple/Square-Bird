import Background from "./Background.js";
import { AudioManager } from "./AudioManager.js";
import AlignGrid from "./AlignGrid.js";
import Player from "./Player.js";
import Platform from "./Platform.js";
import Obstacles from "./Obstacles.js";
import GameUI from "./GameUI.js";
import Buttons from "./Buttons.js";
import IceCube from "./IceCube.js";
import Score from "./Score.js";
import PopUp from "./PopUp.js";
export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }
    init() {
        this.bg = new Background(this);
        this.player = new Player(this);
        this.platform = new Platform(this);
        this.obstacles = new Obstacles(this);
        this.gameUI = new GameUI(this);
        this.buttons = new Buttons(this);
        this.iceCube = new IceCube(this);
        this.score = new Score(this);
        this.popUp = new PopUp(this);

        this.distance = 0;
        this.isDown = false;
        this.canCreateCubes = true;
        this.cubesArray = [];
        // this.count = 0;
        this.isGameOver = false;
        this.canCreateObs = false;
        this.platformNumCheck = 0;
        this.gameObjContainer = null;
        // this.groundSurfaceY = null;
    }

    create() {
        // this.cameras.main.setZoom(0.09);
        // console.log("OS", game.device.os);
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
        // this.ShowObstacles();
        this.ShowGameUI();
        this.ShowScore();
        // this.ShowObstacles(this.groundSurfaceY);
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
        if (this.isDown) {
            this.bg.MoveGameBG();
        }
    }

    ShowPlatform() {
        this.platform.CreateTopPlatform();
        this.platform.CreateBottomPlatform();
        let cubeY = this.physics.add.image(game.config.width / 2.16, 0, 'sheath').setBounce(0).setVisible(false);
        cubeY.body.allowGravity = true;
        cubeY.body.immovable = false;
        this.physics.add.collider(this.platform.lowerPlatformArray, cubeY, this.GetWorkingYPos, null, this);
    }

    GetWorkingYPos(_surface, _cube) {
        if (_cube.body.touching.down) {
            this.groundSurfaceY = _cube.y;
            // setTimeout(() => {
            // _cube.on('destroy', this.ShowObstacles);
            _cube.destroy();
            // }, 1000);
            // console.log(this.groundSurfaceY);
        }

        this.ShowObstacles();
        this.CreateBird();
    }

    ShowObstacles() {
        // if (this.isDown) {
        // setTimeout(() => {
        // console.log("_y", _y);
        this.obstacles.CreateObstacles(this.groundSurfaceY);
        // }, 5);
        this.physics.world.syncToRender = true;
        // this.obstacles.totalObsArray.map(obsArray => {
        //     this.physics.add.collider(this.platform.lowerPlatformArray, obsArray);
        // });
        this.obstacles.totalObsArray.forEach(obsContainers => {
            // this.physics.add.collider(obsContainers.list, this.abc, null, this);
            obsContainers.list.forEach(obs => {
                this.physics.add.collider(obs, this.platform.lowerPlatformArray);
            });
        });
    }

    MovePlatform() {
        if (this.isDown) {
            this.platform.MoveTopPlatform();
            this.platform.MoveGroundPlatform();
        }
    }

    Reposition() {
        if (this.isDown && !this.isGameOver) {
            this.obstacles.RepositionObstacles();
            this.platform.RepositionTopPlatform();
        }
    }

    ShowGameUI() {
        this.gameUI.CreateGameScene();
        this.gameUI.overlay.controlOverlay.on('pointerup', this.ShowCubes, this);
    }

    CreateBird() {

        this.player.CreatePlayer();
        // console.log("2");
        // this.cameras.main.startFollow(this.player.player);
        // this.player.player.body.setVelocityX(540);

        this.PlayBgAudio();

        //-----Bird & Lower Platform Colliders-----------------------//

        this.physics.add.collider(this.player.player, this.platform.lowerPlatformArray, this.BirdOnTouchingLowerPlatform, null, this);
        this.physics.add.collider(this.player.sheath, this.platform.lowerPlatformArray);

        //-----Bird & Obstacles Colliders-----------------------//

        this.obstacles.totalObsArray.forEach(obsContainers => {
            obsContainers.list.forEach(obs => {
                this.physics.add.collider(this.player.player, obs, this.BirdOnTouchingObstacles, null, this);
            });
            // this.physics.add.collider(this.player.player, obsArray, this.BirdOnTouchingObstacles, null, this);
        });

        this.obstacles.totalObsArray.forEach(obsContainers => {
            obsContainers.list.forEach(obs => {
                this.physics.add.collider(this.player.sheath, obs, this.SheathTouchingObstacles, null, this);
            });
            // this.physics.add.collider(this.player.sheath, obsArray, this.SheathTouchingObstacles, null, this);
        });

        //-----Bird & Top Platform Colliders-------------------------//

        this.physics.add.overlap(this.player.player, this.platform.topPlatformArray, this.BirdOnTouchingTopPlatform, null, this);
        this.physics.add.overlap(this.player.player, this.platform.topPlatformArrayTwo, this.BirdOnTouchingTopPlatform, null, this);
    }

    BirdOnTouchingLowerPlatform(_bird, _platform) {
        if (_bird.body.touching.down) {
            AudioManager.PlayDropAudio();
            // console.log(this.isDown);
            // console.log("Collision position", _bird.y);
            // this.groundSurfaceY = _bird.y;
            // console.log(this.groundSurfaceY);
            this.isDown = true;
            // this.canCreateObs = true;
        }
    }

    BirdOnTouchingTopPlatform(_bird, _platform) {
        // if (_platform.body.touching.up) {
        if (_bird.isCollide == "false") {
            _bird.isCollide = "true";
            // this.cameras.main.shake(185, 0.02);
            AudioManager.PlayHitAudio();
            // console.log("Top Collision");
            _bird.play('Die', false, 1);
            _bird.body.setVelocity(0, 0);
            this.isGameOver = true;
            this.gameUI.timedEvent.paused = true;
            _bird.on('complete', () => {
                this.GameOver();
            })
        }
    }

    BirdOnTouchingObstacles(_bird, _obs) {

        if (_bird.body.touching.right && _bird.isCollide == "false") {
            _bird.isCollide = "true";
            // console.log("bird", _bird);
            // AudioManager.PlayHitAudio();
            _bird.play('Die', false, 1);
            AudioManager.StopBGAudio();
            AudioManager.PlayGameOverAudio();
            _bird.body.setVelocityX(0);
            this.isGameOver = true;
            this.gameUI.timedEvent.paused = true;
            _bird.on('complete', () => {
                this.GameOver();
            })
        }
    }

    SheathTouchingObstacles(_sheath, _obs) {
        if (_sheath.body.touching.right) {
            // console.log("Touching");
            this.canCreateCubes = false;
            // console.log("this.canCreateCubes", this.canCreateCubes);
        }
        else {
            this.canCreateCubes = true;
            // console.log("this.canCreateCubes", this.canCreateCubes);
        }
    }

    ShowScore() {
        this.score.CalculateScore();
    }

    ShowCubes() {
        if (this.isDown && !this.isGameOver && this.canCreateCubes) {
            // this.clickCounter = 0;
            AudioManager.PlayCubeCreateAudio();
            this.iceCube.CreateIceCubes();
            // this.iceCube.cubes.setGravityY(10);
            this.iceCube.smoke.setPosition(this.player.player.x - game.config.width / 54, this.player.player.y);
            this.iceCube.cubes.setPosition(this.player.player.x, this.player.player.y - game.config.height / 19.2);
            this.player.sheath.setPosition(game.config.width / 2.11 * currentRatio, this.player.player.y - (this.iceCube.cubes.height * 1.5));
            if (isMobile) {
                // console.log("Cubes on mobile");
                this.iceCube.cubes.setPosition(this.player.player.x, this.player.player.y - game.config.height / 21.33);
            }
            this.cubesArray.push(this.iceCube.cubes);

            //----Cubes with Player Colliders-------------------------//

            this.physics.add.collider(this.cubesArray, this.player.player);// this.CubesOnCollidingPlayer, null, this);
            // this.physics.add.collider(this.cubesArray, this.player.sheath);


            //----Cubes with Cubes Colliders-------------------------//

            this.physics.add.collider(this.cubesArray, this.cubesArray);// this.CubesOnTouchingCubes, null, this);

            //----Cubes & Platform Colliders-------------------------//

            // console.log("this.platform.obsArray", this.platform.obsArray);
            this.obstacles.totalObsArray.forEach(obsContainers => {
                obsContainers.list.forEach(obs => {
                    this.physics.add.collider(this.iceCube.cubes, obs, this.CubesOnCollsionWithObs, null, this);
                });
            });
            this.PositioningCubes();
            // console.log("this.crateArray:", this.crateArray);
        }
    }

    PositioningCubes() {
        this.physics.add.overlap(this.cubesArray, this.cubesArray, function (s1, s2) {
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
        this.physics.add.overlap(this.player.sheath, this.cubesArray, function (s1, s2) {
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
        this.physics.add.overlap(this.cubesArray, this.platform.lowerPlatformArray, function (s1, s2) {
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

    CubesOnCollsionWithObs(_cube, _obs) {
        if (_cube.x <= -game.config.width / 7.2) {
            this.cubesArray.shift();
            _cube.destroy();
            // console.log("Shift");
        }
        else if (_cube.body.touching.right && _cube.isCollide == "false") {
            // console.log("Collided");
            // this.cameras.main.shake(185, 0.02);
            _cube.isCollide = "true";
            _cube.setPushable(true);
            _obs.setPushable(false);
            _cube.setVelocityX(0);
            _cube.setVelocityY(0);
            _cube.setBounce(0);
            _cube.setPosition(_cube.x, _cube.y);
            // _cube.body.enable = false;
            // console.log("isCollide");
            // console.log("cube velo1", _cube.body.velocity, _cube.body.velocity);
        }
        else if (_cube.body.touching.down) {
            // console.log("You spin my way Down!");
            _cube.setPushable(false);
            _cube.setVelocityX(0);
            _cube.setVelocityY(0);
            _cube.setPosition(_cube.x, _cube.y);
            // console.log("cube velo", _cube.body.velocity, _cube.body.velocity);
        }
    }

    GameOver() {
        if (this.gameUI.timedEvent.paused) {
            AudioManager.StopBGAudio();
            this.player.player.destroy();
            this.player.sheath.destroy();
            this.popUp.CreateGameOverPopUp();

        }
    }

    update() {
        // this.physics.world.syncToRender = true;
        // if (this.player.player.x >= 10000) {
        //     this.player.player.body.setVelocityX(0);
        // }
        // if (this.isDown) {
        //     this.player.player.x += 4;
        // this.physics.world.syncToRender = true;
        this.MoveBg();
        this.MovePlatform();
        this.Reposition();
    }
}
