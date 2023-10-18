import AlignGrid from "./AlignGrid.js";
class Platform {
    constructor(scene) {
        this.scene = scene;
        this.alignGrid = new AlignGrid(this.scene);
        this.bottomLayer = null;
        this.topPlatformArray = [];
        this.topPlatformArrayTwo = [];
        this.lowerPlatformArray = []
        this.platformSpeed = 7;

        this.topPosArray = [0, 70, 71, 141, 142, 143, 144, 74, 4, 5, 6, 7, 8, 9, 79, 80, 81, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 92, 162, 163, 164, 165, 166, 96, 26, 27, 28, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 177, 178, 179, 180, 181, 182, 183, 254, 255, 256, 257, 258, 259, 260, 190, 120, 121, 122, 192, 193, 194, 195, 196, 197, 127, 57, 126, 56, 55, 125, 124, 54, 53, 123, 50, 51, 52, 49, 119, 189, 48, 118, 188, 47, 117, 187, 46, 116, 186, 45, 115, 185, 44, 114, 184, 43, 113, 42, 112, 41, 111, 40, 110, 39, 109, 38, 108, 29, 30, 31, 32, 33, 34, 35, 36, 37, 23, 24, 25, 93, 94, 95, 1, 2, 3, 10, 72, 73];


        this.topPosArray_Two = [59, 129, 130, 131, 132, 133, 134, 204, 206, 139, 69, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 135, 136, 137, 138, 205];

        this.key = ["top", "right_corner_top", "left_corner_top", "right_side", "left_side", "left_corner_small", "right_corner_small", "center", "right_corner_down", "left_corner_down", "bottom", "left_corner_small_top", "right_corner_small_top"];
        this.bottomLastIndex = null;
        // this.ptA = [];
    }
    CreateTutorialPlatform() {
        let tutorialPlatform = this.scene.make.tilemap({ key: 'platformInstruction', tileWidth: 154, tileHeight: 154 });
        let platformTileset = tutorialPlatform.addTilesetImage('platformTutorial', 'platform');
        let layer = tutorialPlatform.createLayer('InstructionBottomLayer', platformTileset, 0, 70);
        // console.log("layer", layer);
    }
    CreateTutorialBoxPlatform() {
        let boxPlatform = this.scene.make.tilemap({ key: 'platformInBox', tileWidth: 154, tileHeight: 154 });
        let boxPlatformTileset = boxPlatform.addTilesetImage('platform_In_Box', 'platform');
        let layer = boxPlatform.createLayer('BoxLayer', boxPlatformTileset, 65, 55);
    }
    CreateTopPlatform() {
        for (let i = 0; i < this.topPosArray.length; i++) {
            if (this.topPosArray[i] == 0 || this.topPosArray[i] == 92) {
                let right_side = this.scene.physics.add.image(0, 0, this.key[3]).setScale(1.05 * scaleFactor);
                if (isMobile) {
                    right_side.setScale(1.2 * scaleFactor);
                }
                right_side.body.allowGravity = false;
                right_side.body.immovable = true;
                this.topPlatformArray.push(right_side);
                this.scene.alignGrid.placeAtIndex(this.topPosArray[i], right_side);
            }
            else if (this.topPosArray[i] == 74 || this.topPosArray[i] == 96 || this.topPosArray[i] == 190 || this.topPosArray[i] == 127 || this.topPosArray[i] == 57) {
                let left_side = this.scene.physics.add.image(0, 0, this.key[4]).setScale(1.05 * scaleFactor);
                if (isMobile) {
                    left_side.setScale(1.2 * scaleFactor);
                }
                left_side.body.allowGravity = false;
                left_side.body.immovable = true;
                this.topPlatformArray.push(left_side);
                this.scene.alignGrid.placeAtIndex(this.topPosArray[i], left_side);
                // this.scene.alignGrid.placeAtIndex(this.topPosArray[i], this.scene.add.image(0, 0, this.key[4]));
            }
            else if (this.topPosArray[i] == 70 || this.topPosArray[i] == 141 || this.topPosArray[i] == 79 || this.topPosArray[i] == 162 || this.topPosArray[i] == 98 || this.topPosArray[i] == 177 || this.topPosArray[i] == 254 || this.topPosArray[i] == 192) {
                let right_corner_down = this.scene.physics.add.image(0, 0, this.key[8]).setScale(1.05 * scaleFactor);
                if (isMobile) {
                    right_corner_down.setScale(1.2 * scaleFactor);
                }
                right_corner_down.body.allowGravity = false;
                right_corner_down.body.immovable = true;
                this.topPlatformArray.push(right_corner_down);
                this.scene.alignGrid.placeAtIndex(this.topPosArray[i], right_corner_down);
                // this.scene.alignGrid.placeAtIndex(this.topPosArray[i], this.scene.add.image(0, 0, this.key[8]));
            }
            else if (this.topPosArray[i] == 144 || this.topPosArray[i] == 81 || this.topPosArray[i] == 166 || this.topPosArray[i] == 260 || this.topPosArray[i] == 197) {
                let left_corner_down = this.scene.physics.add.image(0, 0, this.key[9]).setScale(1.05 * scaleFactor);
                if (isMobile) {
                    left_corner_down.setScale(1.2 * scaleFactor);
                }
                left_corner_down.body.allowGravity = false;
                left_corner_down.body.immovable = true;
                this.topPlatformArray.push(left_corner_down);
                this.scene.alignGrid.placeAtIndex(this.topPosArray[i], left_corner_down);
                // this.scene.alignGrid.placeAtIndex(this.topPosArray[i], this.scene.add.image(0, 0, this.key[9]));
            }
            else if (this.topPosArray[i] == 142 || this.topPosArray[i] == 143 || (this.topPosArray[i] >= 5 && this.topPosArray[i] <= 8) || this.topPosArray[i] == 80 || (this.topPosArray[i] >= 12 && this.topPosArray[i] <= 21) || (this.topPosArray[i] >= 163 && this.topPosArray[i] <= 165) || this.topPosArray[i] == 27 || (this.topPosArray[i] >= 99 && this.topPosArray[i] <= 106) || (this.topPosArray[i] >= 178 && this.topPosArray[i] <= 183) || (this.topPosArray[i] >= 255 && this.topPosArray[i] <= 259) || this.topPosArray[i] == 121 || (this.topPosArray[i] >= 193 && this.topPosArray[i] <= 196)) {
                let bottom = this.scene.physics.add.image(0, 0, this.key[10]).setScale(1.05 * scaleFactor);
                if (isMobile) {
                    bottom.setScale(1.2 * scaleFactor);
                }
                bottom.body.allowGravity = false;
                bottom.body.immovable = true;
                this.topPlatformArray.push(bottom);
                this.scene.alignGrid.placeAtIndex(this.topPosArray[i], bottom);
                // this.scene.alignGrid.placeAtIndex(this.topPosArray[i], this.scene.add.image(0, 0, this.key[10]));
            }
            else if (this.topPosArray[i] == 4 || this.topPosArray[i] == 11 || this.topPosArray[i] == 26 || this.topPosArray[i] == 120) {
                let left_corner_small_top = this.scene.physics.add.image(0, 0, this.key[11]).setScale(1.05 * scaleFactor);
                if (isMobile) {
                    left_corner_small_top.setScale(1.2 * scaleFactor);
                }
                left_corner_small_top.body.allowGravity = false;
                left_corner_small_top.body.immovable = true;
                this.topPlatformArray.push(left_corner_small_top);
                this.scene.alignGrid.placeAtIndex(this.topPosArray[i], left_corner_small_top);
                // this.scene.alignGrid.placeAtIndex(this.topPosArray[i], this.scene.add.image(0, 0, this.key[11]));
            }
            else if (this.topPosArray[i] == 71 || this.topPosArray[i] == 9 || this.topPosArray[i] == 22 || this.topPosArray[i] == 28 || this.topPosArray[i] == 107 || this.topPosArray[i] == 184 || this.topPosArray[i] == 122) {
                let right_corner_small_top = this.scene.physics.add.image(0, 0, this.key[12]).setScale(1.05 * scaleFactor);
                if (isMobile) {
                    right_corner_small_top.setScale(1.2 * scaleFactor);
                }
                right_corner_small_top.body.allowGravity = false;
                right_corner_small_top.body.immovable = true;
                this.topPlatformArray.push(right_corner_small_top);
                this.scene.alignGrid.placeAtIndex(this.topPosArray[i], right_corner_small_top);
                // this.scene.alignGrid.placeAtIndex(this.topPosArray[i], this.scene.add.image(0, 0, this.key[12]));
            }
            else {
                let center = this.scene.physics.add.image(0, 0, this.key[7]).setScale(1.05 * scaleFactor);
                if (isMobile) {
                    center.setScale(1.2 * scaleFactor);
                }
                center.body.allowGravity = false;
                center.body.immovable = true;
                this.topPlatformArray.push(center);
                this.scene.alignGrid.placeAtIndex(this.topPosArray[i], center);
                //     // this.scene.alignGrid.placeAtIndex(this.topPosArray[i], this.scene.add.image(0, 0, this.key[7]));
            }
        }
        for (let i = 0; i < this.topPosArray_Two.length; i++) {
            if (this.topPosArray_Two[i] == 59) {
                let right_side = this.scene.physics.add.image(0, 0, this.key[3]).setScale(1.05 * scaleFactor);
                if (isMobile) {
                    right_side.setScale(1.2 * scaleFactor);
                }
                right_side.body.allowGravity = false;
                right_side.body.immovable = true;
                this.topPlatformArrayTwo.push(right_side);
                this.scene.alignGrid.placeAtIndex(this.topPosArray_Two[i], right_side);
            }
            else if (this.topPosArray_Two[i] == 69) {
                let left_side = this.scene.physics.add.image(0, 0, this.key[4]).setScale(1.05 * scaleFactor);
                if (isMobile) {
                    left_side.setScale(1.2 * scaleFactor);
                }
                left_side.body.allowGravity = false;
                left_side.body.immovable = true;
                this.topPlatformArrayTwo.push(left_side);
                this.scene.alignGrid.placeAtIndex(this.topPosArray_Two[i], left_side);
            }
            else if (this.topPosArray_Two[i] == 129 || this.topPosArray_Two[i] == 204) {
                let right_corner_down = this.scene.physics.add.image(0, 0, this.key[8]).setScale(1.05 * scaleFactor);
                if (isMobile) {
                    right_corner_down.setScale(1.2 * scaleFactor);
                }
                right_corner_down.body.allowGravity = false;
                right_corner_down.body.immovable = true;
                this.topPlatformArrayTwo.push(right_corner_down);
                this.scene.alignGrid.placeAtIndex(this.topPosArray_Two[i], right_corner_down);
            }
            else if (this.topPosArray_Two[i] == 206 || this.topPosArray_Two[i] == 139) {
                let left_corner_down = this.scene.physics.add.image(0, 0, this.key[9]).setScale(1.05 * scaleFactor);
                if (isMobile) {
                    left_corner_down.setScale(1.2 * scaleFactor);
                }
                left_corner_down.body.allowGravity = false;
                left_corner_down.body.immovable = true;
                this.topPlatformArrayTwo.push(left_corner_down);
                this.scene.alignGrid.placeAtIndex(this.topPosArray_Two[i], left_corner_down);
            }
            else if ((this.topPosArray_Two[i] >= 130 && this.topPosArray_Two[i] <= 133) || this.topPosArray_Two[i] == 275 || this.topPosArray_Two[i] == 276 || (this.topPosArray_Two[i] >= 137 && this.topPosArray_Two[i] <= 138) || this.topPosArray_Two[i] == 205) {
                let bottom = this.scene.physics.add.image(0, 0, this.key[10]).setScale(1.05 * scaleFactor);
                if (isMobile) {
                    bottom.setScale(1.2 * scaleFactor);
                }
                bottom.body.allowGravity = false;
                bottom.body.immovable = true;
                this.topPlatformArrayTwo.push(bottom);
                this.scene.alignGrid.placeAtIndex(this.topPosArray_Two[i], bottom);
            }
            else if (this.topPosArray_Two[i] == 136) {
                let left_corner_small_top = this.scene.physics.add.image(0, 0, this.key[11]).setScale(1.05 * scaleFactor);
                if (isMobile) {
                    left_corner_small_top.setScale(1.2 * scaleFactor);
                }
                left_corner_small_top.body.allowGravity = false;
                left_corner_small_top.body.immovable = true;
                this.topPlatformArrayTwo.push(left_corner_small_top);
                this.scene.alignGrid.placeAtIndex(this.topPosArray_Two[i], left_corner_small_top);
            }
            else if (this.topPosArray_Two[i] == 134) {
                let right_corner_small_top = this.scene.physics.add.image(0, 0, this.key[12]).setScale(1.05 * scaleFactor);
                if (isMobile) {
                    right_corner_small_top.setScale(1.2 * scaleFactor);
                }
                right_corner_small_top.body.allowGravity = false;
                right_corner_small_top.body.immovable = true;
                this.topPlatformArrayTwo.push(right_corner_small_top);
                this.scene.alignGrid.placeAtIndex(this.topPosArray_Two[i], right_corner_small_top);
            }
            else {
                let center = this.scene.physics.add.image(0, 0, this.key[7]).setScale(1.05 * scaleFactor);
                if (isMobile) {
                    center.setScale(1.2 * scaleFactor);
                }
                center.body.allowGravity = false;
                center.body.immovable = true;
                this.topPlatformArrayTwo.push(center);
                this.scene.alignGrid.placeAtIndex(this.topPosArray_Two[i], center);
            }
        }
    }
    CreateBottomPlatform() {
        for (let i = 0; i < 10; i++) {
            let ground = this.scene.physics.add.image(-game.config.width / 10 + (i * game.config.width / 7.1), game.config.height / 1, 'ground')//.setScale(1000, 1);
            // ground.setSize(ground.width * 100, ground.height * 2000);
            ground.body.allowGravity = false;
            ground.body.immovable = true;
            ground.setPushable(false);
            this.lowerPlatformArray.push(ground);
        }
        this.bottomLastIndex = this.lowerPlatformArray.length - 1;
    }

    MoveTopPlatform() {
        this.topPlatformArray.map(tiles => {
            // tiles.setSize(500, 500);
            tiles.x -= this.platformSpeed;
        });
        this.topPlatformArrayTwo.map(tiles => {
            tiles.x -= this.platformSpeed;
        });
    }

    MoveGroundPlatform() {
        for (let i = 0; i < this.lowerPlatformArray.length; i++) {
            this.lowerPlatformArray[i].x -= this.platformSpeed;
            if (this.lowerPlatformArray[i].x <= -game.config.width / 10.8) {
                this.lowerPlatformArray[i].x = this.lowerPlatformArray[this.bottomLastIndex].x + this.lowerPlatformArray[this.bottomLastIndex].width - game.config.width / 154.28;
                this.bottomLastIndex = i;
            }
        }
    }

    RepositionTopPlatform() {
        this.topPlatformArray.map((block) => {
            if (block.x <= -game.config.width / 0.27) {
                block.x = game.config.width / 0.15;
                if (isMobile) {
                    block.x = game.config.width / 0.133;
                }
            }
        });

        this.topPlatformArrayTwo.map((block) => {
            if (block.x <= -game.config.width / 0.27) {
                block.x = game.config.width / 0.15;
                if (isMobile) {
                    block.x = game.config.width / 0.133;
                }
            }
        });
    }

}

export default Platform;