class Obstacles {
    constructor(scene) {
        this.scene = scene;
        this.totalObsArray = [];
        this.obsPatternArray = [];
        this.obsSpeed = 400;
    }
    CreateObstacles() {

        let obsPatternOne = [{ x: 2000, y: 1536 },
        { x: 2156.52, y: 1536 },
        { x: 2313.04, y: 1536 },
        { x: 2156.52, y: 1382 }];
        // let obsPatternOne = [{ x: 100, y: 200 },
        // { x: 100, y: -10 }];
        // // { x: 2313.04, y: 200 },
        // // { x: 2156.52, y: 46 }];
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

    RepositionObstacles() {
        // console.log("Rep");
        this.totalObsArray.map(obsContainers => {
            obsContainers.list.map(obs => {
                if (obs.x <= -game.config.width / 3.6) {
                    // console.log("Rep");
                    obs.x = game.config.width / 0.082;
                }
            });
        });
    }
}
export default Obstacles;