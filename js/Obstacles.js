class Obstacles {
    constructor(scene) {
        this.scene = scene;
        this.totalObsArray = [];
        this.obsPatternArray = [];
        this.obsSpeed = 400;
    }
    CreateObstacles() {

        let obsPatternOne = [{ x: 2000, y: 1500 },
        { x: 2156.52, y: 1500 },
        { x: 2313.04, y: 1500 },
        { x: 2156.52, y: 1382 }];
        this.obsPatternArray.push(obsPatternOne);

        let obsPatternTwo = [{ x: 3000, y: 1536 },
        { x: 3156.52, y: 1536 },
        { x: 3313.04, y: 1536 },
        { x: 3469.56, y: 1536 },
        { x: 3313.04, y: 1382 },
        { x: 3469.56, y: 1382 },
        { x: 3626.08, y: 1382 },
        { x: 3782.6, y: 1382 }];
        this.obsPatternArray.push(obsPatternTwo);

        let obsPatternThree = [{ x: 4500, y: 1536 },
        { x: 4656.52, y: 1536 },
        { x: 4813.04, y: 1536 },
        { x: 4969.56, y: 1536 },
        { x: 4500, y: 1382 },
        { x: 4656.52, y: 1382 },
        { x: 4813.04, y: 1382 },
        { x: 4969.56, y: 1382 }];
        this.obsPatternArray.push(obsPatternThree);

        let obsPatternFour = [{ x: 5510.2, y: 1536 },
        { x: 5666.72, y: 1536 },
        { x: 5823.24, y: 1536 },
        { x: 5979.76, y: 1536 },
        { x: 5979.76, y: 1382 },
        { x: 5510.2, y: 1382 }];
        this.obsPatternArray.push(obsPatternFour);

        let obsPatternFive = [{ x: 6352.94, y: 1536 },
        { x: 6509.46, y: 1536 },
        { x: 6509.46, y: 1382 },
        { x: 6509.46, y: 1228 }];
        this.obsPatternArray.push(obsPatternFive);

        let obsPatternSix = [{ x: 7200, y: 1536 },
        { x: 7356.52, y: 1536 },
        { x: 7200, y: 1382 },
        { x: 7356.52, y: 1382 },
        { x: 7200, y: 1228 }];
        this.obsPatternArray.push(obsPatternSix);

        let obsPatternSeven = [{ x: 8000, y: 1536 },
        { x: 8000, y: 1382 },
        { x: 8000, y: 1228 }];
        this.obsPatternArray.push(obsPatternSeven);

        let obsPatternEight = [{ x: 8925.62, y: 1536 },
        { x: 8809.49, y: 1382 },
        { x: 8927.62, y: 1228 }];
        this.obsPatternArray.push(obsPatternEight);

        let obsPatternNine = [{ x: 10000, y: 1536 },
        { x: 9883.87, y: 1382 },
        { x: 9767.74, y: 1228 }];
        this.obsPatternArray.push(obsPatternNine);

        let obsPatternTen = [{ x: 10485.44, y: 1536 },
        { x: 10641.96, y: 1536, },
        { x: 10485.44, y: 1382 },
        { x: 10641.96, y: 1382 },
        { x: 10641.96, y: 1228 },
        { x: 10641.96, y: 1074 }];
        this.obsPatternArray.push(obsPatternTen);

        let obsPatternEleven = [{ x: 11134.02, y: 1536 },
        { x: 11250.149, y: 1382 },
        { x: 11136.02, y: 1228 },
        { x: 11250.149, y: 1074 }];
        this.obsPatternArray.push(obsPatternEleven);

        let obsPatternTwelve = [{ x: 12053.57, y: 1536 },
        { x: 12169.699, y: 1382 },
        { x: 12169.699, y: 1228 },
        { x: 12051.57, y: 1074 }];
        this.obsPatternArray.push(obsPatternTwelve);

        let obsPatternThirteen = [{ x: 12750.88, y: 1536 },
        { x: 12867, y: 1382 },
        { x: 12983.14, y: 1228 },
        { x: 13099.267, y: 1074 }];
        this.obsPatternArray.push(obsPatternThirteen);

        this.obsPatternArray.map(patternArray => {
            let obstaclesPatternContainer = this.scene.add.container();
            // if (game.device.os.android) {
            //     console.log("Android");
            //     obstaclesPatternContainer.y = (obstaclesPatternContainer.y) - (game.config.height / 3.127);
            // }
            patternArray.map(pos => {
                let obs = this.scene.physics.add.image(pos.x, pos.y, 'ground_cubes').setFrictionX(0).setPushable(false).setBounce(0)//.setOrigin(1, 1);
                // console.log("obs", obs);
                obs.setSize(obs.width, obs.height - game.config.height / 174.54, true);
                obs.body.allowGravity = false;
                obs.body.immovable = true;
                obs.setVelocityX(-this.obsSpeed);
                obstaclesPatternContainer.add(obs);
            });
            this.totalObsArray.push(obstaclesPatternContainer);
        });
        this.scene.physics.world.syncToRender = true;
        console.log(" totalObsArray", this.totalObsArray);
    }
    CreateObstaclesXXX() {
        let obsGapX = game.config.width / 6.9;
        let posY = game.config.height / 1.25;
        if (game.device.os.android) {
            // console.log("Android");
            obsGapX = game.config.width / 6.6;
            posY = game.config.height / 1.255;
        }
        else if (game.device.os.iPhone) {
            // console.log("Iphone");
            obsGapX = game.config.width / 6.6;
            posY = game.config.height / 1.27;
        }
        // for (let i = 0; i < 4; i++) {
        //     let obsOne = this.scene.physics.add.image(game.config.width / 0.54 + (i * obsGapX), posY, 'ground_cubes').setFrictionX(0).setPushable(false).setScale(scaleFactorX, scaleFactorY);//.setDepth(2);
        //     obsOne.setSize(obsOne.width, obsOne.height - game.config.height / 174.54, true);
        //     obsOne.body.allowGravity = false;
        //     obsOne.body.immovable = true;
        //     if (i == 3) {
        //         obsOne.x = game.config.width / 0.54 + obsGapX;
        //         obsOne.y = obsOne.y - obsOne.height;
        //     }
        //     obsOne.setVelocityX(-this.obsSpeed);
        //     this.obsArrayOne.push(obsOne);
        // }
        this.totalObsArray.push(this.obsArrayOne);

        // for (let i = 0; i < 8; i++) {
        //     let obsTwo = this.scene.physics.add.image(game.config.width / 0.36 + (i * obsGapX), posY, 'ground_cubes').setFrictionX(0).setPushable(false).setScale(scaleFactorX, scaleFactorY);//.setDepth(2);
        //     obsTwo.setSize(obsTwo.width, obsTwo.height - game.config.height / 174.54, true);
        //     obsTwo.body.allowGravity = false;
        //     obsTwo.body.immovable = true;
        //     if (i >= 4) {
        //         obsTwo.x = game.config.width / 0.36 + ((i - 2) * obsGapX);
        //         obsTwo.y = obsTwo.y - obsTwo.height;
        //     }
        //     obsTwo.setVelocityX(-this.obsSpeed);
        //     this.obsArrayTwo.push(obsTwo);
        //     // this.obsArray.push( this.obsArrayTwo);
        // }
        this.totalObsArray.push(this.obsArrayTwo);

        // for (let i = 0; i < 8; i++) {
        //     let obsThree = this.scene.physics.add.image(game.config.width / 0.24 + (i * obsGapX), posY, 'ground_cubes').setFrictionX(0).setPushable(false).setScale(scaleFactorX, scaleFactorY);//.setDepth(2);
        //     obsThree.setSize(obsThree.width, obsThree.height - game.config.height / 174.54, true);
        //     obsThree.body.allowGravity = false;
        //     obsThree.body.immovable = true;
        //     if (i >= 4) {
        //         obsThree.x = game.config.width / 0.24 + ((i - 4) * obsGapX);
        //         obsThree.y = obsThree.y - obsThree.height;
        //     }
        //     obsThree.setVelocityX(-this.obsSpeed);
        //     this.obsArrayThree.push(obsThree);
        // }
        this.totalObsArray.push(this.obsArrayThree);

        // for (let i = 0; i < 6; i++) {
        //     let obsFour = this.scene.physics.add.image(game.config.width / 0.196 + (i * obsGapX), posY, 'ground_cubes').setFrictionX(0).setPushable(false).setScale(scaleFactorX, scaleFactorY);//.setDepth(2);
        //     obsFour.setSize(obsFour.width, obsFour.height - game.config.height / 174.54, true);
        //     obsFour.body.allowGravity = false;
        //     obsFour.body.immovable = true;
        //     if (i == 4) {
        //         obsFour.x = game.config.width / 0.196 + ((i - 1) * obsGapX);
        //         obsFour.y = obsFour.y - obsFour.height;
        //     }
        //     if (i == 5) {
        //         obsFour.x = game.config.width / 0.196 + ((i - 5) * obsGapX);
        //         obsFour.y = obsFour.y - obsFour.height;
        //     }
        //     obsFour.setVelocityX(-this.obsSpeed);
        //     this.obsArrayFour.push(obsFour);
        // }
        this.totalObsArray.push(this.obsArrayFour);

        // for (let i = 0; i < 4; i++) {
        //     let obsFive = this.scene.physics.add.image(game.config.width / 0.17 + (i * obsGapX), posY, 'ground_cubes').setFrictionX(0).setPushable(false).setScale(scaleFactorX, scaleFactorY);
        //     obsFive.setSize(obsFive.width, obsFive.height - game.config.height / 174.54, true);
        //     obsFive.body.allowGravity = false;
        //     obsFive.body.immovable = true;
        //     if (i >= 2) {
        //         obsFive.x = game.config.width / 0.17 + obsGapX;
        //         obsFive.y = obsFive.y - ((i - 1) * obsFive.height);
        //     }
        //     obsFive.setVelocityX(-this.obsSpeed);
        //     this.obsArrayFive.push(obsFive);
        // }
        this.totalObsArray.push(this.obsArrayFive);

        // for (let i = 0; i < 5; i++) {
        //     let obsSix = this.scene.physics.add.image(game.config.width / 0.15 + (i * obsGapX), posY, 'ground_cubes').setFrictionX(0).setPushable(false).setScale(scaleFactorX, scaleFactorY);
        //     obsSix.setSize(obsSix.width, obsSix.height - game.config.height / 174.54, true);
        //     obsSix.body.allowGravity = false;
        //     obsSix.body.immovable = true;
        //     if (i >= 2) {
        //         obsSix.x = game.config.width / 0.15 + ((i - 2) * obsGapX);
        //         obsSix.y = obsSix.y - obsSix.height;
        //     }
        //     if (i >= 4) {
        //         obsSix.x = game.config.width / 0.15 + ((i - 4) * obsGapX);
        //         obsSix.y = obsSix.y - obsSix.height;
        //     }
        //     obsSix.setVelocityX(-this.obsSpeed);
        //     this.obsArraySix.push(obsSix);
        // }
        this.totalObsArray.push(this.obsArraySix);

        // for (let i = 0; i < 3; i++) {
        //     let obsSeven = this.scene.physics.add.image(game.config.width / 0.135, posY - (i * game.config.height / 12.467), 'ground_cubes').setFrictionX(0).setPushable(false).setScale(scaleFactorX, scaleFactorY);
        //     obsSeven.setSize(obsSeven.width, obsSeven.height - game.config.height / 174.54, true);
        //     obsSeven.body.allowGravity = false;
        //     obsSeven.body.immovable = true;
        //     obsSeven.setVelocityX(-this.obsSpeed);
        //     this.obsArraySeven.push(obsSeven);
        // }
        this.totalObsArray.push(this.obsArraySeven);

        // for (let i = 0; i < 3; i++) {
        //     let obsEight = this.scene.physics.add.image(game.config.width / 0.121, posY, 'ground_cubes').setFrictionX(0).setPushable(false).setScale(scaleFactorX, scaleFactorY);
        //     obsEight.setSize(obsEight.width, obsEight.height - game.config.height / 174.54, true);
        //     obsEight.body.allowGravity = false;
        //     obsEight.body.immovable = true;
        //     if (i == 1) {
        //         obsEight.x = game.config.width / 0.121 - (i * game.config.width / 9.3);
        //         obsEight.y = obsEight.y - obsEight.height;
        //     }
        //     if (i == 2) {
        //         obsEight.x = game.config.width / 0.121 + ((i - 1) * game.config.width / 540);
        //         obsEight.y = obsEight.y - (i * obsEight.height);
        //     }
        //     obsEight.setVelocityX(-this.obsSpeed);
        //     this.obsArrayEight.push(obsEight);
        // }
        this.totalObsArray.push(this.obsArrayEight);

        // for (let i = 0; i < 3; i++) {
        //     let obsNine = this.scene.physics.add.image(game.config.width / 0.108, posY, 'ground_cubes').setFrictionX(0).setPushable(false).setScale(scaleFactorX, scaleFactorY);
        //     obsNine.setSize(obsNine.width, obsNine.height - game.config.height / 174.54, true);
        //     obsNine.body.allowGravity = false;
        //     obsNine.body.immovable = true;
        //     if (i > 0) {
        //         obsNine.x = game.config.width / 0.108 - (i * game.config.width / 9.3);
        //         obsNine.y = obsNine.y - (i * obsNine.height);
        //     }
        //     obsNine.setVelocityX(-this.obsSpeed);
        //     this.obsArrayNine.push(obsNine);
        // }
        this.totalObsArray.push(this.obsArrayNine);

        // for (let i = 0; i < 6; i++) {
        //     let obsTen = this.scene.physics.add.image(game.config.width / 0.103 + (i * obsGapX), posY, 'ground_cubes').setFrictionX(0).setPushable(false).setScale(scaleFactorX, scaleFactorY);
        //     obsTen.setSize(obsTen.width, obsTen.height - game.config.height / 174.54, true);
        //     obsTen.body.allowGravity = false;
        //     obsTen.body.immovable = true;
        //     if (i >= 2) {
        //         obsTen.x = game.config.width / 0.103 + ((i - 2) * obsGapX);
        //         obsTen.y = obsTen.y - (obsTen.height);
        //     }
        //     if (i >= 4) {
        //         obsTen.x = game.config.width / 0.103 + obsGapX;
        //         obsTen.y = obsTen.y - ((i - 3) * obsTen.height);
        //     }
        //     obsTen.setVelocityX(-this.obsSpeed);
        //     this.obsArrayTen.push(obsTen);
        // }
        this.totalObsArray.push(this.obsArrayTen);

        // for (let i = 0; i < 4; i++) {
        //     let obsEleven = this.scene.physics.add.image(game.config.width / 0.097, posY, 'ground_cubes').setFrictionX(0).setPushable(false).setScale(scaleFactorX, scaleFactorY);
        //     obsEleven.setSize(obsEleven.width, obsEleven.height - game.config.height / 174.54, true);
        //     obsEleven.body.allowGravity = false;
        //     obsEleven.body.immovable = true;
        //     if (i == 1) {
        //         obsEleven.x = game.config.width / 0.097 + game.config.width / 9.3;
        //         obsEleven.y = obsEleven.y - obsEleven.height;
        //     }
        //     if (i == 2) {
        //         obsEleven.x = game.config.width / 0.097 + game.config.width / 540;
        //         obsEleven.y = obsEleven.y - (i * obsEleven.height);
        //     }
        //     if (i == 3) {
        //         obsEleven.x = game.config.width / 0.097 + game.config.width / 9.3;
        //         obsEleven.y = obsEleven.y - (i * obsEleven.height);
        //     }
        //     obsEleven.setVelocityX(-this.obsSpeed);
        //     this.obsArrayEleven.push(obsEleven);
        // }
        this.totalObsArray.push(this.obsArrayEleven);

        // for (let i = 0; i < 4; i++) {
        //     let obsTwelve = this.scene.physics.add.image(game.config.width / 0.0896, posY, 'ground_cubes').setFrictionX(0).setPushable(false).setScale(scaleFactorX, scaleFactorY);
        //     obsTwelve.setSize(obsTwelve.width, obsTwelve.height - game.config.height / 174.54, true);
        //     obsTwelve.body.allowGravity = false;
        //     obsTwelve.body.immovable = true;
        //     if (i >= 1) {
        //         obsTwelve.x = game.config.width / 0.0896 + game.config.width / 9.3;
        //         obsTwelve.y = obsTwelve.y - i * obsTwelve.height;
        //     }
        //     if (i == 3) {
        //         obsTwelve.x = game.config.width / 0.0896 - game.config.width / 540;
        //     }
        //     obsTwelve.setVelocityX(-this.obsSpeed);
        //     this.obsArrayTwelve.push(obsTwelve);
        // }
        this.totalObsArray.push(this.obsArrayTwelve);
        // this.scene.physics.world.syncToRender = true;

        // for (let i = 0; i < 4; i++) {
        //     let obsThirteen = this.scene.physics.add.image(game.config.width / 0.0847, posY, 'ground_cubes').setFrictionX(0).setPushable(false).setScale(scaleFactorX, scaleFactorY);
        //     obsThirteen.setSize(obsThirteen.width, obsThirteen.height - game.config.height / 174.54, true);
        //     obsThirteen.body.allowGravity = false;
        //     obsThirteen.body.immovable = true;
        //     if (i > 0) {
        //         obsThirteen.x = game.config.width / 0.0847 + (i * game.config.width / 9.3);
        //         obsThirteen.y = obsThirteen.y - (i * obsThirteen.height);
        //     }
        //     obsThirteen.setVelocityX(-this.obsSpeed);
        //     this.obsArrayThirteen.push(obsThirteen);
        // }
        this.totalObsArray.push(this.obsArrayThirteen);

        this.scene.physics.world.syncToRender = true;
        // console.log("obsArray", this.totalObsArray);
    }

    RepositionObstacles() {
        // console.log("Rep");
        this.totalObsArray.map(obsArray => {
            obsArray.map(obs => {
                if (obs.x <= -game.config.width / 3.6) {
                    // console.log("Rep");
                    obs.x = game.config.width / 0.082;
                }
            });
        });
    }
}
export default Obstacles;