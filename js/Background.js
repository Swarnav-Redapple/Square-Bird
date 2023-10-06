class Background {
    constructor(scene) {
        this.scene = scene;
        this.bg = null;
        this.cloudArray = [];
        this.arrayBg = [];
        this.lastIndexBG = null;
        this.lastIndexCloud = null;
    }
    CreateTutorialBG() {
        this.bg = this.scene.add.tileSprite(Math.round(game.config.width / 2), Math.round(game.config.height / 2), Math.round(game.config.width), Math.round(game.config.height), 'tutorial_bg');
    }
    CreateGameBG() {
        let gameBgOne = this.scene.add.image(Math.round(game.config.width / 2), Math.round(game.config.height / 2), 'bgOne');
        let gameBgTwo = this.scene.add.image(gameBgOne.x + gameBgOne.width, Math.round(game.config.height / 2), 'bgTwo');
        let gameBgThree = this.scene.add.image(gameBgTwo.x + gameBgTwo.width, Math.round(game.config.height / 2), 'bgThree');
        let gameBgFour = this.scene.add.image(gameBgThree.x + gameBgThree.width, Math.round(game.config.height / 2), 'bgFour');
        this.arrayBg.push(gameBgOne, gameBgTwo, gameBgThree, gameBgFour);
        this.lastIndexBG = this.arrayBg.length - 1;
        let cloudOne = this.scene.add.image(game.config.width / 5.4, game.config.height / 9.6, 'cloud_one');
        let cloudTwo = this.scene.add.image(game.config.width / 2.16, game.config.height / 3.2, 'cloud_two');
        let cloudThree = this.scene.add.image(game.config.width / 1.14, game.config.height / 5.48, 'cloud_three');
        let cloudFour = this.scene.add.image(game.config.width / 0.72, game.config.height / 3.2, 'cloud_four');
        let cloudFive = this.scene.add.image(game.config.width / 0.43, game.config.height / 3.84, 'cloud_five');
        let cloudSix = this.scene.add.image(game.config.width / 0.36, game.config.height / 6.4, 'cloud_six');
        this.cloudArray.push(cloudOne, cloudTwo, cloudThree, cloudFour, cloudFive, cloudSix);
        this.lastIndexCloud = this.cloudArray.length - 1;
        console.log(this.cloudArray);
    }
    MoveGameBG() {
        // this.gameBg.tilePositionX += 5;
        for (let i = 0; i < this.arrayBg.length; i++) {
            this.arrayBg[i].x -= 5;
            if (this.arrayBg[i].x <= -1000) {
                this.arrayBg[i].x = this.arrayBg[this.lastIndexBG].x + this.arrayBg[this.lastIndexBG].width - 6;
                this.lastIndexBG = i;
            }
        }

        for (let i = 0; i < this.cloudArray.length; i++) {
            this.cloudArray[i].x -= 5;
            if (this.cloudArray[i].x <= -290) {
                let rndDist = Phaser.Math.Between(100, 500);
                this.cloudArray[i].x = this.cloudArray[this.lastIndexCloud].x + this.cloudArray[this.lastIndexCloud].width + rndDist;
                this.lastIndexCloud = i;
                // this.cloudArray[i].x = 1200;
            }
        }
    }
}
export default Background;