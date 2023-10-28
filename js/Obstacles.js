class Obstacles {
    constructor(scene) {
        this.scene = scene;
        this.totalObsArray = [];
        this.obsPatternArray = [];
        this.obsSpeed = 600;
    }
    CreateObstacles(_posY) {
        // console.log("_posY", _posY);
        let yPos = _posY + game.config.height / 278.26;
        let obsWidth = game.config.height / 12.88;
        if (game.device.os.android) {
            // console.log("Android");
            yPos = _posY + game.config.height / 38.4;
        }

        else if (game.device.os.iPhone) {
            // console.log("Iphone");
            yPos = _posY + game.config.height / 32;
            obsWidth = game.config.height / 11.29;
        }

        let obsPatternOne = [{ x: 2000, y: yPos },
        { x: 2156.52, y: yPos },
        { x: 2313.04, y: yPos },
        { x: 2156.52, y: (yPos - obsWidth) }];

        this.obsPatternArray.push(obsPatternOne);

        let obsPatternTwo = [{ x: 3000, y: yPos },
        { x: 3156.52, y: yPos },
        { x: 3313.04, y: yPos },
        { x: 3469.56, y: yPos },
        { x: 3313.04, y: (yPos - obsWidth) },
        { x: 3469.56, y: (yPos - obsWidth) },
        { x: 3626.08, y: (yPos - obsWidth) },
        { x: 3782.6, y: (yPos - obsWidth) }];

        this.obsPatternArray.push(obsPatternTwo);

        let obsPatternThree = [{ x: 4500, y: yPos },
        { x: 4656.52, y: yPos },
        { x: 4813.04, y: yPos },
        { x: 4969.56, y: yPos },
        { x: 4500, y: (yPos - obsWidth) },
        { x: 4656.52, y: (yPos - obsWidth) },
        { x: 4813.04, y: (yPos - obsWidth) },
        { x: 4969.56, y: (yPos - obsWidth) }];

        this.obsPatternArray.push(obsPatternThree);

        let obsPatternFour = [{ x: 5510.2, y: yPos },
        { x: 5666.72, y: yPos },
        { x: 5823.24, y: yPos },
        { x: 5979.76, y: yPos },
        { x: 5979.76, y: (yPos - obsWidth) },
        { x: 5510.2, y: (yPos - obsWidth) }];

        this.obsPatternArray.push(obsPatternFour);

        let obsPatternFive = [{ x: 6352.94, y: yPos },
        { x: 6509.46, y: yPos },
        { x: 6509.46, y: (yPos - obsWidth) },
        { x: 6509.46, y: (yPos - (2 * obsWidth)) }];

        this.obsPatternArray.push(obsPatternFive);

        let obsPatternSix = [{ x: 7200, y: yPos },
        { x: 7356.52, y: yPos },
        { x: 7200, y: (yPos - obsWidth) },
        { x: 7356.52, y: (yPos - obsWidth) },
        { x: 7200, y: (yPos - (2 * obsWidth)) }];

        this.obsPatternArray.push(obsPatternSix);

        let obsPatternSeven = [{ x: 8000, y: yPos },
        { x: 8000, y: (yPos - obsWidth) },
        { x: 8000, y: (yPos - (2 * obsWidth)) }];

        this.obsPatternArray.push(obsPatternSeven);

        let obsPatternEight = [{ x: 8925.62, y: yPos },
        { x: 8809.49, y: (yPos - obsWidth) },
        { x: 8927.62, y: (yPos - (2 * obsWidth)) }];

        this.obsPatternArray.push(obsPatternEight);

        let obsPatternNine = [{ x: 10000, y: yPos },
        { x: 9883.87, y: (yPos - obsWidth) },
        { x: 9767.74, y: (yPos - (2 * obsWidth)) }];

        this.obsPatternArray.push(obsPatternNine);

        let obsPatternTen = [{ x: 10485.44, y: yPos },
        { x: 10641.96, y: yPos, },
        { x: 10485.44, y: (yPos - obsWidth) },
        { x: 10641.96, y: (yPos - obsWidth) },
        { x: 10641.96, y: (yPos - (2 * obsWidth)) },
        { x: 10641.96, y: (yPos - (3 * obsWidth)) }];

        this.obsPatternArray.push(obsPatternTen);

        let obsPatternEleven = [{ x: 11134.02, y: yPos },
        { x: 11250.149, y: (yPos - obsWidth) },
        { x: 11136.02, y: (yPos - (2 * obsWidth)) },
        { x: 11250.149, y: (yPos - (3 * obsWidth)) }];

        this.obsPatternArray.push(obsPatternEleven);

        let obsPatternTwelve = [{ x: 12053.57, y: yPos },
        { x: 12169.699, y: (yPos - obsWidth) },
        { x: 12169.699, y: (yPos - (2 * obsWidth)) },
        { x: 12051.57, y: (yPos - (3 * obsWidth)) }];

        this.obsPatternArray.push(obsPatternTwelve);

        let obsPatternThirteen = [{ x: 12750.88, y: yPos },
        { x: 12867, y: (yPos - obsWidth) },
        { x: 12983.14, y: (yPos - (2 * obsWidth)) },
        { x: 13099.267, y: (yPos - (3 * obsWidth)) }];

        this.obsPatternArray.push(obsPatternThirteen);


        // for (let i = 0; i < this.obsPatternArray.length; i++) {
        //     let obstaclesPatternContainer = this.scene.add.container();
        //     // console.log("Containers", i);
        //     for (let j = 0; j < this.obsPatternArray[i].length; j++) {
        //         let obs = this.scene.physics.add.image(Math.floor(this.obsPatternArray[i][j].x), Math.floor(this.obsPatternArray[i][j].y), 'ground_cubes').setFrictionX(0).setPushable(false).setBounce(0);
        //         obs.setSize(obs.width, obs.height - game.config.height / 174.54, true);
        //         obs.body.allowGravity = false;
        //         obs.body.immovable = true;
        //         obs.setVelocityX(-this.obsSpeed);
        //         obstaclesPatternContainer.add(obs);
        //     }
        //     this.totalObsArray.push(obstaclesPatternContainer);
        // }

        this.obsPatternArray.forEach(patternArray => {
            let obstaclesPatternContainer = this.scene.add.container();
            patternArray.forEach(pos => {
                let obs = this.scene.physics.add.image(pos.x, pos.y, 'obstacle_cube').setFrictionX(0).setBounce(0).setScale(0.97 * scaleFactor);//.setOrigin(1, 1);
                // console.log("obs", obs);
                // obs.setSize(obs.width, obs.height - game.config.height / 174.54, true);
                obs.body.allowGravity = false;
                obs.body.immovable = true;
                obs.setVelocityX(-this.obsSpeed);
                obstaclesPatternContainer.add(obs);
            });
            this.totalObsArray.push(obstaclesPatternContainer);
        });
        this.scene.physics.world.syncToRender = true;
        this.scene.physics.world.fixedStep = false;
        // console.log(" totalObsArray", this.totalObsArray);
    }

    RepositionObstacles() {
        // console.log("Rep");
        this.totalObsArray.forEach(obsContainers => {
            obsContainers.list.forEach(obs => {
                if (obs.x <= -game.config.width / 3.6) {
                    // console.log("Rep");
                    obs.x = game.config.width / 0.082;
                }
            });
        });
    }
}
export default Obstacles;