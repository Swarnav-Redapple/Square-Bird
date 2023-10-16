import AlignGrid from "./AlignGrid.js";
class Platform {
    constructor(scene) {
        this.scene = scene;
        this.alignGrid = new AlignGrid(this.scene);
        this.platformArray = [];
        this.bottomPlatformArray = [];
        this.topPlatformArray = [];
        // this.colliderArray = [];
        this.sideCollider = null;
        this.bottomLayer = null;
        this.bottomMidLayer = null;
        this.rect = null;
        // this.tutorialPlatform = null;
        this.bottomAllArray_One = [];
        this.bottomAllArray_Two = [];
        this.bottomAllArray_Three = [];
        this.bottomPlatformArray_One = [];
        this.bottomPlatformArray_Two = [];
        this.bottomPlatformArray_Three = [];
        this.colliderArray_One = [];
        this.colliderArray_Two = [];
        this.colliderArray_Three = [];
        this.bottomContainer_One = null;
        this.bottomContainer_Two = null;
        this.bottomContainer_Three = null;
        this.bottomContainer_Four = null;
        this.numberOfBottomPlatforms = 4;
        this.platformLastIndex = null;
        this.arrayBottomPlatform = [];
        this.arrayBottomColliders = [];
        this.colliderArray = [];
        this.posOne = null;
        this.posTwo = null;
        this.posThree = null;
        this.numberOfColliders = 11;
        this.index = null;
        this.contain = null;
        // this.centerArray = [];
        // this.leftArray = [];
        // this.rightArray = [];
        // this.topArray = [];
        // this.leftCornerTopArray = [];
        // this.rightCornerTopArray = [];
        // this.leftCornerSmallArray = [];
        // this.rightCornerSmallArray = [];
        this.topPlatformArray = [];
        this.topPlatformArrayTwo = [];
        this.lowerPlatformArray = [];
        this.totalObsArray = [];
        this.sheathArray = [];
        this.lowerPlatformArrayTwo = [];
        this.lowerPlatformArrayThree = [];
        this.platformSpeed = 400;
        this.obsArrayOne = [];
        this.obsArrayTwo = [];
        this.obsArrayThree = [];
        this.obsArrayFour = [];
        this.obsArrayFive = [];
        this.obsArraySix = [];
        this.obsArraySeven = [];
        this.obsArrayEight = [];
        this.obsArrayNine = [];
        this.obsArrayTen = [];
        this.obsArrayEleven = [];
        this.obsArrayTwelve = [];
        this.obsArrayThirteen = [];
        this.obsSpeed = 400;
        this.platformSpeed = 7;

        this.bottomPosArray = [770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 799, 800, 710, 700, 701, 702, 703, 704, 711, 712, 713, 643, 640, 630, 631, 632, 633, 634, 705, 706, 707, 708, 709, 570, 560, 561, 562, 563, 564, 500, 499, 498, 565, 635, 636, 637, 638, 639, 566, 567, 568, 569, 573, 504, 574, 434, 364, 365, 366, 437, 436, 508, 507, 509, 510, 511, 512, 443, 444, 448, 445, 376, 377, 378, 447, 517, 588, 589, 590, 659, 729, 587, 797, 798, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 730, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 660, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 505, 506, 513, 514, 515, 516, 518, 435, 446];

        this.bottomPosArray_Two = [802, 732, 662, 592, 593, 524, 525, 456, 386, 387, 388, 389, 390, 391, 461, 531, 532, 533, 534, 604, 605, 606, 607, 608, 538, 539, 540, 541, 542, 472, 473, 474, 475, 476, 477, 547, 617, 687, 757, 827, 663, 783, 803, 594, 664, 734, 804, 595, 665, 735, 805, 526, 596, 666, 736, 806, 457, 527, 597, 667, 737, 807, 458, 528, 598, 668, 738, 808, 459, 529, 599, 669, 739, 809, 460, 530, 600, 670, 740, 810, 601, 671, 741, 811, 602, 672, 742, 812, 603, 673, 743, 813, 674, 744, 814, 675, 745, 815, 676, 746, 816, 677, 747, 817, 678, 748, 818, 609, 679, 749, 819, 610, 680, 750, 820, 611, 681, 751, 822, 733, 821, 612, 682, 752, 543, 613, 683, 753, 823, 544, 814, 604, 754, 824, 545, 615, 605, 755, 825, 546, 616, 606, 756, 826, 614, 684, 685, 686];

        this.bottomPosArray_Three = [830, 760, 690, 691, 692, 693, 694, 695, 625, 555, 556, 486, 487, 488, 418, 419, 489, 557, 558, 559, 626, 627, 628, 629, 696, 697, 698, 699, 761, 762, 763, 764, 765, 766, 767, 768, 769, 831, 832, 833, 834, 835, 836, 837, 838, 839];

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

    CreateObstacles() {
        for (let i = 0; i < 4; i++) {
            let obsOne = this.scene.physics.add.image(game.config.width / 0.54 + (i * game.config.width / 7.1), game.config.height / 1.25, 'ground_cubes').setFrictionX(0).setPushable(false);//.setDepth(2);
            obsOne.setSize(obsOne.width, obsOne.height - 11, true);
            obsOne.body.allowGravity = false;
            obsOne.body.immovable = true;
            if (i == 3) {
                obsOne.x = game.config.width / 0.54 + game.config.width / 7.1;
                obsOne.y = obsOne.y - obsOne.height;
            }
            obsOne.setVelocityX(-this.obsSpeed);
            this.obsArrayOne.push(obsOne);
        }
        this.totalObsArray.push(this.obsArrayOne);

        for (let i = 0; i < 8; i++) {
            let obsTwo = this.scene.physics.add.image(game.config.width / 0.36 + (i * game.config.width / 7.1), game.config.height / 1.25, 'ground_cubes').setFrictionX(0).setPushable(false);//.setDepth(2);
            obsTwo.setSize(obsTwo.width, obsTwo.height - 11, true);
            obsTwo.body.allowGravity = false;
            obsTwo.body.immovable = true;
            if (i >= 4) {
                obsTwo.x = game.config.width / 0.36 + ((i - 2) * game.config.width / 7.1);
                obsTwo.y = obsTwo.y - obsTwo.height;
            }
            obsTwo.setVelocityX(-this.obsSpeed);
            this.obsArrayTwo.push(obsTwo);
            // this.obsArray.push( this.obsArrayTwo);
        }
        this.totalObsArray.push(this.obsArrayTwo);

        for (let i = 0; i < 8; i++) {
            let obsThree = this.scene.physics.add.image(game.config.width / 0.24 + (i * game.config.width / 7.1), game.config.height / 1.25, 'ground_cubes').setFrictionX(0).setPushable(false);//.setDepth(2);
            obsThree.setSize(obsThree.width, obsThree.height - 11, true);
            obsThree.body.allowGravity = false;
            obsThree.body.immovable = true;
            if (i >= 4) {
                obsThree.x = game.config.width / 0.24 + ((i - 4) * game.config.width / 7.1);
                obsThree.y = obsThree.y - obsThree.height;
            }
            obsThree.setVelocityX(-this.obsSpeed);
            this.obsArrayThree.push(obsThree);
        }
        this.totalObsArray.push(this.obsArrayThree);

        for (let i = 0; i < 6; i++) {
            let obsFour = this.scene.physics.add.image(game.config.width / 0.196 + (i * game.config.width / 7.1), game.config.height / 1.25, 'ground_cubes').setFrictionX(0).setPushable(false);//.setDepth(2);
            obsFour.setSize(obsFour.width, obsFour.height - 11, true);
            obsFour.body.allowGravity = false;
            obsFour.body.immovable = true;
            if (i == 4) {
                obsFour.x = game.config.width / 0.196 + ((i - 1) * game.config.width / 7.1);
                obsFour.y = obsFour.y - obsFour.height;
            }
            if (i == 5) {
                obsFour.x = game.config.width / 0.196 + ((i - 5) * game.config.width / 7.1);
                obsFour.y = obsFour.y - obsFour.height;
            }
            obsFour.setVelocityX(-this.obsSpeed);
            this.obsArrayFour.push(obsFour);
        }
        this.totalObsArray.push(this.obsArrayFour);

        for (let i = 0; i < 4; i++) {
            let obsFive = this.scene.physics.add.image(game.config.width / 0.17 + (i * game.config.width / 7.1), game.config.height / 1.25, 'ground_cubes').setFrictionX(0).setPushable(false);
            obsFive.setSize(obsFive.width, obsFive.height - 11, true);
            obsFive.body.allowGravity = false;
            obsFive.body.immovable = true;
            if (i >= 2) {
                obsFive.x = game.config.width / 0.17 + game.config.width / 7.1;
                obsFive.y = obsFive.y - ((i - 1) * obsFive.height);
            }
            obsFive.setVelocityX(-this.obsSpeed);
            this.obsArrayFive.push(obsFive);
        }
        this.totalObsArray.push(this.obsArrayFive);

        for (let i = 0; i < 5; i++) {
            let obsSix = this.scene.physics.add.image(game.config.width / 0.15 + (i * game.config.width / 7.1), game.config.height / 1.25, 'ground_cubes').setFrictionX(0).setPushable(false);
            obsSix.setSize(obsSix.width, obsSix.height - 11, true);
            obsSix.body.allowGravity = false;
            obsSix.body.immovable = true;
            if (i >= 2) {
                obsSix.x = game.config.width / 0.15 + ((i - 2) * game.config.width / 7.1);
                obsSix.y = obsSix.y - obsSix.height;
            }
            if (i >= 4) {
                obsSix.x = game.config.width / 0.15 + ((i - 4) * game.config.width / 7.1);
                obsSix.y = obsSix.y - obsSix.height;
            }
            obsSix.setVelocityX(-this.obsSpeed);
            this.obsArraySix.push(obsSix);
        }
        this.totalObsArray.push(this.obsArraySix);

        for (let i = 0; i < 3; i++) {
            let obsSeven = this.scene.physics.add.image(game.config.width / 0.135, game.config.height / 1.25 - (i * game.config.height / 12.467), 'ground_cubes').setFrictionX(0).setPushable(false);
            obsSeven.setSize(obsSeven.width, obsSeven.height - 11, true);
            obsSeven.body.allowGravity = false;
            obsSeven.body.immovable = true;
            obsSeven.setVelocityX(-this.obsSpeed);
            this.obsArraySeven.push(obsSeven);
        }
        this.totalObsArray.push(this.obsArraySeven);

        for (let i = 0; i < 3; i++) {
            let obsEight = this.scene.physics.add.image(game.config.width / 0.121, game.config.height / 1.25, 'ground_cubes').setFrictionX(0).setPushable(false);
            obsEight.setSize(obsEight.width, obsEight.height - 11, true);
            obsEight.body.allowGravity = false;
            obsEight.body.immovable = true;
            if (i == 1) {
                obsEight.x = game.config.width / 0.121 - (i * game.config.width / 9.3);
                obsEight.y = obsEight.y - obsEight.height;
            }
            if (i == 2) {
                obsEight.x = game.config.width / 0.121 + ((i - 1) * game.config.width / 540);
                obsEight.y = obsEight.y - (i * obsEight.height);
            }
            obsEight.setVelocityX(-this.obsSpeed);
            this.obsArrayEight.push(obsEight);
        }
        this.totalObsArray.push(this.obsArrayEight);

        for (let i = 0; i < 3; i++) {
            let obsNine = this.scene.physics.add.image(game.config.width / 0.108, game.config.height / 1.25, 'ground_cubes').setFrictionX(0).setPushable(false);
            obsNine.setSize(obsNine.width, obsNine.height - 11, true);
            obsNine.body.allowGravity = false;
            obsNine.body.immovable = true;
            if (i > 0) {
                obsNine.x = game.config.width / 0.108 - (i * game.config.width / 9.3);
                obsNine.y = obsNine.y - (i * obsNine.height);
            }
            obsNine.setVelocityX(-this.obsSpeed);
            this.obsArrayNine.push(obsNine);
        }
        this.totalObsArray.push(this.obsArrayNine);

        for (let i = 0; i < 6; i++) {
            let obsTen = this.scene.physics.add.image(game.config.width / 0.103 + (i * game.config.width / 7.1), game.config.height / 1.25, 'ground_cubes').setFrictionX(0).setPushable(false);
            obsTen.setSize(obsTen.width, obsTen.height - 11, true);
            obsTen.body.allowGravity = false;
            obsTen.body.immovable = true;
            if (i >= 2) {
                obsTen.x = game.config.width / 0.103 + ((i - 2) * game.config.width / 7.1);
                obsTen.y = obsTen.y - (obsTen.height);
            }
            if (i >= 4) {
                obsTen.x = game.config.width / 0.103 + game.config.width / 7.1;
                obsTen.y = obsTen.y - ((i - 3) * obsTen.height);
            }
            obsTen.setVelocityX(-this.obsSpeed);
            this.obsArrayTen.push(obsTen);
        }
        this.totalObsArray.push(this.obsArrayTen);

        for (let i = 0; i < 4; i++) {
            let obsEleven = this.scene.physics.add.image(game.config.width / 0.097, game.config.height / 1.25, 'ground_cubes').setFrictionX(0).setPushable(false);
            obsEleven.setSize(obsEleven.width, obsEleven.height - 11, true);
            obsEleven.body.allowGravity = false;
            obsEleven.body.immovable = true;
            if (i == 1) {
                obsEleven.x = game.config.width / 0.097 + game.config.width / 9.3;
                obsEleven.y = obsEleven.y - obsEleven.height;
            }
            if (i == 2) {
                obsEleven.x = game.config.width / 0.097 + game.config.width / 540;
                obsEleven.y = obsEleven.y - (i * obsEleven.height);
            }
            if (i == 3) {
                obsEleven.x = game.config.width / 0.097 + game.config.width / 9.3;
                obsEleven.y = obsEleven.y - (i * obsEleven.height);
            }
            obsEleven.setVelocityX(-this.obsSpeed);
            this.obsArrayEleven.push(obsEleven);
        }
        this.totalObsArray.push(this.obsArrayEleven);

        for (let i = 0; i < 4; i++) {
            let obsTwelve = this.scene.physics.add.image(game.config.width / 0.0896, game.config.height / 1.25, 'ground_cubes').setFrictionX(0).setPushable(false);
            obsTwelve.setSize(obsTwelve.width, obsTwelve.height - 11, true);
            obsTwelve.body.allowGravity = false;
            obsTwelve.body.immovable = true;
            if (i >= 1) {
                obsTwelve.x = game.config.width / 0.0896 + game.config.width / 9.3;
                obsTwelve.y = obsTwelve.y - i * obsTwelve.height;
            }
            if (i == 3) {
                obsTwelve.x = game.config.width / 0.0896 - game.config.width / 540;
            }
            obsTwelve.setVelocityX(-this.obsSpeed);
            this.obsArrayTwelve.push(obsTwelve);
        }
        this.totalObsArray.push(this.obsArrayTwelve);

        for (let i = 0; i < 4; i++) {
            let obsThirteen = this.scene.physics.add.image(game.config.width / 0.0847, game.config.height / 1.25, 'ground_cubes').setFrictionX(0).setPushable(false);
            obsThirteen.setSize(obsThirteen.width, obsThirteen.height - 11, true);
            obsThirteen.body.allowGravity = false;
            obsThirteen.body.immovable = true;
            if (i > 0) {
                obsThirteen.x = game.config.width / 0.0847 + (i * game.config.width / 9.3);
                obsThirteen.y = obsThirteen.y - (i * obsThirteen.height);
            }
            obsThirteen.setVelocityX(-this.obsSpeed);
            this.obsArrayThirteen.push(obsThirteen);
        }
        this.totalObsArray.push(this.obsArrayThirteen);

        this.scene.physics.world.syncToRender = true;
        // console.log("obsArray", this.totalObsArray);
    }

    // MoveObstacles() {
    //     this.obsArray.forEach(obs => {
    //         obs.setVelocityX(-this.obsSpeed);
    //     });
    //     this.scene.physics.world.syncToRender = true;
    // }
    RepositionObstacles() {
        // this.obsArrayOne.map((obs) => {
        //     if (obs.x <= -game.config.width / 3.6) {
        //         obs.x = game.config.width / 0.082;
        //     }
        // });
        // this.obsArrayTwo.map((obs) => {
        //     if (obs.x <= -game.config.width / 3.6) {
        //         obs.x = game.config.width / 0.082;
        //     }
        // });
        // this.obsArrayThree.map((obs) => {
        //     if (obs.x <= -game.config.width / 3.6) {
        //         obs.x = game.config.width / 0.082;
        //     }
        // });
        // this.obsArrayFour.map((obs) => {
        //     if (obs.x <= -game.config.width / 3.6) {
        //         obs.x = game.config.width / 0.082;
        //     }
        // });
        // this.obsArrayFive.map((obs) => {
        //     if (obs.x <= -game.config.width / 3.6) {
        //         obs.x = game.config.width / 0.082;
        //     }
        // });
        // this.obsArrayFive.map((obs) => {
        //     if (obs.x <= -game.config.width / 3.6) {
        //         obs.x = game.config.width / 0.082;
        //     }
        // });
        // this.obsArraySix.map((obs) => {
        //     if (obs.x <= -game.config.width / 3.6) {
        //         obs.x = game.config.width / 0.082;
        //     }
        // });
        // this.obsArraySeven.map((obs) => {
        //     if (obs.x <= -game.config.width / 3.6) {
        //         obs.x = game.config.width / 0.082;
        //     }
        // });
        // this.obsArrayEight.map((obs) => {
        //     if (obs.x <= -game.config.width / 3.6) {
        //         obs.x = game.config.width / 0.082;
        //     }
        // });
        // this.obsArrayNine.map((obs) => {
        //     if (obs.x <= -game.config.width / 3.6) {
        //         obs.x = game.config.width / 0.082;
        //     }
        // });
        // this.obsArrayTen.map((obs) => {
        //     if (obs.x <= -game.config.width / 3.6) {
        //         obs.x = game.config.width / 0.082;
        //     }
        // });
        // this.obsArrayEleven.map((obs) => {
        //     if (obs.x <= -game.config.width / 3.6) {
        //         obs.x = game.config.width / 0.082;
        //     }
        // });
        // this.obsArrayTwelve.map((obs) => {
        //     if (obs.x <= -game.config.width / 3.6) {
        //         obs.x = game.config.width / 0.082;
        //     }
        // });
        // this.obsArrayThirteen.map((obs) => {
        //     if (obs.x <= -game.config.width / 3.6) {
        //         obs.x = game.config.width / 0.082;
        //     }
        // });
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
    // }
    RepositionTopPlatform() {
        this.topPlatformArray.map((block) => {
            if (block.x <= -game.config.width / 0.27) {
                block.x = game.config.width / 0.15;
            }
        });

        this.topPlatformArrayTwo.map((block) => {
            if (block.x <= -game.config.width / 0.27) {
                block.x = game.config.width / 0.15;
            }
        });
    }
    // CreateBottomPlatformXXX() {
    //     // this.AddingPlatformTiles();
    //     for (let i = 0; i < this.bottomPosArray.length; i++) {
    //         // console.log(this.bottomPosArray[i]);
    //         if ((this.bottomPosArray[i] >= 560 && this.bottomPosArray[i] <= 567) || this.bottomPosArray[i] == 499 || (this.bottomPosArray[i] >= 508 && this.bottomPosArray[i] <= 512) || (this.bottomPosArray[i] == 377) || (this.bottomPosArray[i] == 589) || (this.bottomPosArray[i] == 711 || this.bottomPosArray[i] == 712) || (this.bottomPosArray[i] == 444 || this.bottomPosArray[i] == 445) || this.bottomPosArray[i] == 365) {
    //             // console.log("i", i);
    //             let top = this.scene.physics.add.image(0, 0, this.key[0]).setScale(1.05 * scaleFactor)//.setMass(50);
    //             // top.setData({ platform: i });
    //             top.body.allowGravity = false;
    //             top.body.immovable = true;
    //             this.lowerPlatformArray.push(top);
    //             this.scene.alignGrid.placeAtIndex(this.bottomPosArray[i], top);
    //         }
    //         else if (this.bottomPosArray[i] == 498 || this.bottomPosArray[i] == 573 || this.bottomPosArray[i] == 443 || this.bottomPosArray[i] == 364 || this.bottomPosArray[i] == 376) {
    //             let right_corner_top = this.scene.physics.add.image(0, 0, this.key[1]).setScale(1.05 * scaleFactor);
    //             // let overlapper = this.scene.add.image(0, 0, 'onepixel').setScale(50, 154).setOrigin(-1, 0.5);

    //             right_corner_top.body.allowGravity = false;
    //             right_corner_top.body.immovable = true;
    //             this.lowerPlatformArray.push(right_corner_top);
    //             this.scene.alignGrid.placeAtIndex((this.bottomPosArray[i]), right_corner_top);
    //             // this.scene.alignGrid.placeAtIndex(497, overlapper);
    //         }
    //         else if (this.bottomPosArray[i] == 429 || this.bottomPosArray[i] == 500 || this.bottomPosArray[i] == 366 || this.bottomPosArray[i] == 378 || this.bottomPosArray[i] == 590 || this.bottomPosArray[i] == 437) {
    //             let left_corner_top = this.scene.physics.add.image(0, 0, this.key[2]).setScale(1.05 * scaleFactor);
    //             left_corner_top.body.allowGravity = false;
    //             left_corner_top.body.immovable = true;
    //             this.lowerPlatformArray.push(left_corner_top);
    //             this.scene.alignGrid.placeAtIndex((this.bottomPosArray[i]), left_corner_top);
    //         }
    //         else if (this.bottomPosArray[i] == 643 || this.bottomPosArray[i] == 504 || this.bottomPosArray[i] == 434) {
    //             let right_side = this.scene.physics.add.image(0, 0, this.key[3]).setScale(1.05 * scaleFactor);
    //             right_side.body.allowGravity = false;
    //             right_side.body.immovable = true;
    //             this.lowerPlatformArray.push(right_side);
    //             this.scene.alignGrid.placeAtIndex((this.bottomPosArray[i]), right_side);
    //         }
    //         else if (this.bottomPosArray[i] == 570 || this.bottomPosArray[i] == 640 || this.bottomPosArray[i] == 448 || this.bottomPosArray[i] == 518 || this.bottomPosArray[i] == 660 || this.bottomPosArray[i] == 730 || this.bottomPosArray[i] == 800) {
    //             let left_side = this.scene.physics.add.image(0, 0, this.key[4]).setScale(1.05 * scaleFactor);
    //             left_side.body.allowGravity = false;
    //             left_side.body.immovable = true;
    //             this.lowerPlatformArray.push(left_side);
    //             this.scene.alignGrid.placeAtIndex((this.bottomPosArray[i]), left_side);
    //         }
    //         else if (this.bottomPosArray[i] == 710 || this.bottomPosArray[i] == 436 || this.bottomPosArray[i] == 507 || this.bottomPosArray[i] == 588) {
    //             let left_corner_small = this.scene.physics.add.image(0, 0, this.key[5]).setScale(1.05 * scaleFactor);
    //             left_corner_small.body.allowGravity = false;
    //             left_corner_small.body.immovable = true;
    //             this.lowerPlatformArray.push(left_corner_small);
    //             this.scene.alignGrid.placeAtIndex((this.bottomPosArray[i]), left_corner_small);
    //         }
    //         else if (this.bottomPosArray[i] == 498 || this.bottomPosArray[i] == 568 || this.bottomPosArray[i] == 713 || this.bottomPosArray[i] == 574 || this.bottomPosArray[i] == 513 || this.bottomPosArray[i] == 446) {
    //             let right_corner_small = this.scene.physics.add.image(0, 0, this.key[6]).setScale(1.05 * scaleFactor);
    //             right_corner_small.body.allowGravity = false;
    //             right_corner_small.body.immovable = true;
    //             this.lowerPlatformArray.push(right_corner_small);
    //             this.scene.alignGrid.placeAtIndex((this.bottomPosArray[i]), right_corner_small);
    //         }
    //         // else {
    //         //     let center = this.scene.physics.add.image(0, 0, this.key[7]).setScale(1.05 * scaleFactor);
    //         //     center.body.allowGravity = false;
    //         //     center.body.immovable = true;
    //         //     this.lowerPlatformArray.push(center);
    //         //     this.scene.alignGrid.placeAtIndex(this.bottomPosArray[i], center);
    //         // }
    //     }

    //     for (let i = 0; i < this.bottomPosArray_Two.length; i++) {
    //         // console.log("stud");
    //         if (this.bottomPosArray_Two[i] == 593 || this.bottomPosArray_Two[i] == 525 || (this.bottomPosArray_Two[i] >= 387 && this.bottomPosArray_Two[i] <= 390) || (this.bottomPosArray_Two[i] >= 532 && this.bottomPosArray_Two[i] <= 533) || (this.bottomPosArray_Two[i] >= 605 && this.bottomPosArray_Two[i] <= 607) || (this.bottomPosArray_Two[i] >= 539 && this.bottomPosArray_Two[i] <= 541) || (this.bottomPosArray_Two[i] >= 473 && this.bottomPosArray_Two[i] <= 476)) {
    //             let top = this.scene.physics.add.image(0, 0, this.key[0]).setScale(1.05 * scaleFactor);
    //             top.body.allowGravity = false;
    //             top.body.immovable = true;
    //             this.lowerPlatformArrayTwo.push(top);
    //             this.scene.alignGrid.placeAtIndex(this.bottomPosArray_Two[i], top);
    //         }
    //         else if (this.bottomPosArray_Two[i] == 592 || this.bottomPosArray_Two[i] == 524 || this.bottomPosArray_Two[i] == 386 || this.bottomPosArray_Two[i] == 538 || this.bottomPosArray_Two[i] == 472) {
    //             let right_corner_top = this.scene.physics.add.image(0, 0, this.key[1]).setScale(1.05 * scaleFactor);
    //             right_corner_top.body.allowGravity = false;
    //             right_corner_top.body.immovable = true;
    //             this.lowerPlatformArrayTwo.push(right_corner_top);
    //             this.scene.alignGrid.placeAtIndex(this.bottomPosArray_Two[i], right_corner_top);
    //         }
    //         else if (this.bottomPosArray_Two[i] == 391 || this.bottomPosArray_Two[i] == 534 || this.bottomPosArray_Two[i] == 477) {
    //             let left_corner_top = this.scene.physics.add.image(0, 0, this.key[2]).setScale(1.05 * scaleFactor);
    //             left_corner_top.body.allowGravity = false;
    //             left_corner_top.body.immovable = true;
    //             this.lowerPlatformArrayTwo.push(left_corner_top);
    //             this.scene.alignGrid.placeAtIndex(this.bottomPosArray_Two[i], left_corner_top);
    //         }
    //         else if (this.bottomPosArray_Two[i] == 802 || this.bottomPosArray_Two[i] == 732 || this.bottomPosArray_Two[i] == 662 || this.bottomPosArray_Two[i] == 456) {
    //             let right_side = this.scene.physics.add.image(0, 0, this.key[3]).setScale(1.05 * scaleFactor);
    //             right_side.body.allowGravity = false;
    //             right_side.body.immovable = true;
    //             this.lowerPlatformArrayTwo.push(right_side);
    //             this.scene.alignGrid.placeAtIndex(this.bottomPosArray_Two[i], right_side);
    //         }
    //         else if (this.bottomPosArray_Two[i] == 461 || this.bottomPosArray_Two[i] == 547 || this.bottomPosArray_Two[i] == 617 || this.bottomPosArray_Two[i] == 687 || this.bottomPosArray_Two[i] == 757 || this.bottomPosArray_Two[i] == 827) {
    //             let left_side = this.scene.physics.add.image(0, 0, this.key[4]).setScale(1.05 * scaleFactor);
    //             left_side.body.allowGravity = false;
    //             left_side.body.immovable = true;
    //             this.lowerPlatformArrayTwo.push(left_side);
    //             this.scene.alignGrid.placeAtIndex(this.bottomPosArray_Two[i], left_side);
    //         }
    //         else if (this.bottomPosArray_Two[i] == 391 || this.bottomPosArray_Two[i] == 531 || this.bottomPosArray_Two[i] == 604) {
    //             let left_corner_small = this.scene.physics.add.image(0, 0, this.key[5]).setScale(1.05 * scaleFactor);
    //             left_corner_small.body.allowGravity = false;
    //             left_corner_small.body.immovable = true;
    //             this.lowerPlatformArrayTwo.push(left_corner_small);
    //             this.scene.alignGrid.placeAtIndex(this.bottomPosArray_Two[i], left_corner_small);
    //         }
    //         else if (this.bottomPosArray_Two[i] == 594 || this.bottomPosArray_Two[i] == 526 || this.bottomPosArray_Two[i] == 608 || this.bottomPosArray_Two[i] == 542) {
    //             let right_corner_small = this.scene.physics.add.image(0, 0, this.key[6]).setScale(1.05 * scaleFactor);
    //             right_corner_small.body.allowGravity = false;
    //             right_corner_small.body.immovable = true;
    //             this.lowerPlatformArrayTwo.push(right_corner_small);
    //             this.scene.alignGrid.placeAtIndex(this.bottomPosArray_Two[i], right_corner_small);
    //         }
    //         // else {
    //         //     let center = this.scene.physics.add.image(0, 0, this.key[7]).setScale(1.05 * scaleFactor);;
    //         //     center.body.allowGravity = false;
    //         //     center.body.immovable = true;
    //         //     this.lowerPlatformArrayTwo.push(center);
    //         //     this.scene.alignGrid.placeAtIndex(this.bottomPosArray_Two[i], center);
    //         // }
    //     }
    //     for (let i = 0; i < this.bottomPosArray_Three.length; i++) {
    //         if ((this.bottomPosArray_Three[i] >= 691 && this.bottomPosArray_Three[i] <= 694) || this.bottomPosArray_Three[i] == 487) {
    //             let top = this.scene.physics.add.image(0, 0, this.key[0]).setScale(1.05 * scaleFactor);
    //             top.body.allowGravity = false;
    //             top.body.immovable = true;
    //             this.lowerPlatformArrayThree.push(top);
    //             this.scene.alignGrid.placeAtIndex(this.bottomPosArray_Three[i], top);
    //         }
    //         else if (this.bottomPosArray_Three[i] == 690 || this.bottomPosArray_Three[i] == 555 || this.bottomPosArray_Three[i] == 486 || this.bottomPosArray_Three[i] == 418) {
    //             let right_corner_top = this.scene.physics.add.image(0, 0, this.key[1]).setScale(1.05 * scaleFactor);
    //             right_corner_top.body.allowGravity = false;
    //             right_corner_top.body.immovable = true;
    //             this.lowerPlatformArrayThree.push(right_corner_top);
    //             this.scene.alignGrid.placeAtIndex(this.bottomPosArray_Three[i], right_corner_top);
    //         }
    //         else if (this.bottomPosArray_Three[i] == 419) {
    //             let left_corner_top = this.scene.physics.add.image(0, 0, this.key[2]).setScale(1.05 * scaleFactor);
    //             left_corner_top.body.allowGravity = false;
    //             left_corner_top.body.immovable = true;
    //             this.lowerPlatformArrayThree.push(left_corner_top);
    //             this.scene.alignGrid.placeAtIndex(this.bottomPosArray_Three[i], left_corner_top);
    //         }
    //         else if (this.bottomPosArray_Three[i] == 830 || this.bottomPosArray_Three[i] == 760 || this.bottomPosArray_Three[i] == 625) {
    //             let right_side = this.scene.physics.add.image(0, 0, this.key[3]).setScale(1.05 * scaleFactor);
    //             right_side.body.allowGravity = false;
    //             right_side.body.immovable = true;
    //             this.lowerPlatformArrayThree.push(right_side);
    //             this.scene.alignGrid.placeAtIndex(this.bottomPosArray_Three[i], right_side);
    //         }
    //         else if (this.bottomPosArray_Three[i] == 489 || this.bottomPosArray_Three[i] == 559 || this.bottomPosArray_Three[i] == 629 || this.bottomPosArray_Three[i] == 699 || this.bottomPosArray_Three[i] == 769 || this.bottomPosArray_Three[i] == 839) {
    //             let left_side = this.scene.physics.add.image(0, 0, this.key[4]).setScale(1.05 * scaleFactor);
    //             left_side.body.allowGravity = false;
    //             left_side.body.immovable = true;
    //             this.lowerPlatformArrayThree.push(left_side);
    //             this.scene.alignGrid.placeAtIndex(this.bottomPosArray_Three[i], left_side);
    //         }
    //         else if (this.bottomPosArray_Three[i] == 695 || this.bottomPosArray_Three[i] == 556 || this.bottomPosArray_Three[i] == 488) {
    //             let right_corner_small = this.scene.physics.add.image(0, 0, this.key[6]).setScale(1.05 * scaleFactor);
    //             right_corner_small.body.allowGravity = false;
    //             right_corner_small.body.immovable = true;
    //             this.lowerPlatformArrayThree.push(right_corner_small);
    //             this.scene.alignGrid.placeAtIndex(this.bottomPosArray_Three[i], right_corner_small);
    //         }
    //         // else {
    //         //     let center = this.scene.physics.add.image(0, 0, this.key[7]).setScale(1.05 * scaleFactor);
    //         //     center.body.allowGravity = false;
    //         //     center.body.immovable = true;
    //         //     this.lowerPlatformArrayThree.push(center);
    //         //     this.scene.alignGrid.placeAtIndex(this.bottomPosArray_Three[i], center);
    //         // }
    //     }

    // }

    // MovePlatform() {
    //     this.lowerPlatformArray.forEach(tiles => {
    //         tiles.body.setVelocityX(-this.platformSpeed);
    //         tiles.num = '1';
    //     });
    //     this.lowerPlatformArrayTwo.forEach(tiles => {
    //         tiles.body.setVelocityX(-this.platformSpeed);
    //         tiles.num = '2';
    //     });
    //     this.lowerPlatformArrayThree.forEach(tiles => {
    //         tiles.body.setVelocityX(-this.platformSpeed);
    //         tiles.num = '3';
    //     });
    //     this.topPlatformArray.forEach(tiles => {
    //         // tiles.setSize(500, 500);
    //         tiles.body.setVelocityX(-this.platformSpeed);
    //     });
    //     this.topPlatformArrayTwo.forEach(tiles => {
    //         tiles.body.setVelocityX(-this.platformSpeed);
    //     });
    // }
    // RepositioningPlatform() {
    //     // console.log("iwhdofihw");
    //     for (let i = 0; i < this.lowerPlatformArray.length; i++) {
    //         platformDetect = this.lowerPlatformArray[i];
    //         if (this.lowerPlatformArray[i].x <= -game.config.width / 0.27) {

    //             // console.log("iwhdofihw");
    //             this.lowerPlatformArray[i].x = game.config.width / 0.15;
    //         }
    //     }
    //     for (let i = 0; i < this.lowerPlatformArrayTwo.length; i++) {
    //         if (this.lowerPlatformArrayTwo[i].x <= -game.config.width / 0.27) {
    //             // console.log("iwhdofihw");
    //             this.lowerPlatformArrayTwo[i].x = game.config.width / 0.15;
    //         }
    //     }
    //     for (let i = 0; i < this.lowerPlatformArrayThree.length; i++) {
    //         if (this.lowerPlatformArrayThree[i].x <= -game.config.width / 0.27) {
    //             // console.log("iwhdofihw");
    //             this.lowerPlatformArrayThree[i].x = game.config.width / 0.15;
    //         }
    //     }
    //     for (let i = 0; i < this.topPlatformArray.length; i++) {
    //         if (this.topPlatformArray[i].x <= -game.config.width / 0.27) {
    //             // console.log("iwhdofihw");
    //             this.topPlatformArray[i].x = game.config.width / 0.15;
    //         }
    //     }
    //     for (let i = 0; i < this.topPlatformArrayTwo.length; i++) {
    //         if (this.topPlatformArrayTwo[i].x <= -game.config.width / 0.27) {
    //             // console.log("iwhdofihw");
    //             this.topPlatformArrayTwo[i].x = game.config.width / 0.15;
    //         }
    //     }
    // }
    AddingPlatformTilesXXX() {
        for (let i = 0; i < 200; i++) {
            let center = this.scene.physics.add.image(0, 0, 'center');
            center.body.allowGravity = false;
            center.body.immovable = false;
            this.centerArray.push(center);
        }
        for (let i = 0; i < 10; i++) {
            let left_side = this.scene.physics.add.image(0, 0, 'left_side');
            left_side.body.allowGravity = false;
            left_side.body.immovable = false;
            this.leftArray.push(left_side);
        }
        for (let i = 0; i < 100; i++) {
            let right_side = this.scene.physics.add.image(0, 0, 'right_side');
            right_side.body.allowGravity = false;
            right_side.body.immovable = false;
            this.rightArray.push(right_side);
        }
        for (let i = 0; i < 100; i++) {
            let left_corner_small = this.scene.physics.add.image(0, 0, 'left_corner_small');
            left_corner_small.body.allowGravity = false;
            left_corner_small.body.immovable = false;
            this.leftCornerSmallArray.push(left_corner_small);
        }
        for (let i = 0; i < 100; i++) {
            let right_corner_small = this.scene.physics.add.image(0, 0, 'right_corner_small');
            right_corner_small.body.allowGravity = false;
            right_corner_small.body.immovable = false;
            this.rightCornerSmallArray.push(right_corner_small);
        }
        for (let i = 0; i < 100; i++) {
            let top = this.scene.physics.add.image(0, 0, 'top');
            top.body.allowGravity = false;
            top.body.immovable = false;
            this.topArray.push(top);
        }
        for (let i = 0; i < 100; i++) {
            let left_corner_top = this.scene.physics.add.image(0, 0, 'left_corner_top');
            left_corner_top.body.allowGravity = false;
            left_corner_top.body.immovable = false;
            this.leftCornerTopArray.push(left_corner_top);
        }
        for (let i = 0; i < 100; i++) {
            let right_corner_top = this.scene.physics.add.image(0, 0, 'right_corner_top');
            right_corner_top.body.allowGravity = false;
            right_corner_top.body.immovable = false;
            this.rightCornerTopArray.push(right_corner_top);
        }
    }
    CreatePlatformXXX() {

        let platform = this.scene.make.tilemap({ key: 'platform_map', tileWidth: 154, tileHeight: 154 });
        let platformTileset = platform.addTilesetImage('GamePlatformTiles', 'platform');
        this.bottomLayer = platform.createLayer('BottomLayer', platformTileset, 0, 0);
        // console.log("bottomLayer", bottomLayer);

        // bottomLayer.setCollisionByProperty({ collides: true });
        // this.sideCollider = platform.createFromObjects('SideColliders');
        // this.sideCollider.forEach(colls => {
        //     //     //     //     // colls.setOrigin(0.1);
        //     this.scene.physics.add.existing(colls);
        //     colls.body.allowGravity = false;
        //     //     //     // colls.body.setBounce(0);
        // });
        // this.sideCollider.refresh();
        // platform.setCollisionBetween(0, 13);

        // console.log(this.bottomLayer);
        // let toplayer = platform.createLayer('TopLayer', platformTileset, 0, 0);
        this.bottomLayer.setCollisionBetween(0, 13);
        // // thisideCollider.setCollisionBetween(1, 9);
        // toplayer.setCollisionBetween(0, 12);
        // this.bottomPlatformArray.push(bottomLayer);
        // this.topPlatformArray.push(toplayer);

        // this.platformArray.push(bottomMidLayer);SSSSSS
        // console.log("layer", layer);
    }
    MoveBottomPlatform() {
        this.contain.body.setVelocityX(-270);
        console.log("this.contain", this.contain);
        console.log("body vel", this.contain.body.velocity);

    }
    RepositionPlatform() {
        // if()
        // for (let i = 0; i < this.bottomContainer_One.list.length; i++) {
        //     if (this.bottomContainer_One.list[i].x <= -600) {
        //         console.log("rep");
        //         this.bottomContainer_One.list[i].x = 1080;
        //         console.log(this.bottomContainer_One.list[i].x);
        //     }
        // }
        if (this.bottomContainer_One.x <= -2300) {
            // console.log("j,jh");
            this.bottomContainer_One.x = this.bottomContainer_Four.list[0].x - 480;
        }
        if (this.bottomContainer_Two.x <= -4100) {
            this.bottomContainer_Two.x = this.bottomContainer_Four.list[0].x - 2310;
        }
        if (this.bottomContainer_Three.x <= -8300) {
            this.bottomContainer_Three.x = this.bottomContainer_Two.list[0].x + 100;
        }
        if (this.bottomContainer_Four.x <= -10200) {
            this.bottomContainer_Four.x = this.bottomContainer_Three.list[0].x - 5200;
        }
    }
    RepositionCollidersXXX() {

    }
    CreateMidPlatformXXX() {
        let midPlatform = this.scene.make.tilemap({ key: 'mid_bottom_platform', tileWidth: 154, tileHeight: 154 });
        let platformTileset = midPlatform.addTilesetImage('MidPlatform', 'platform');
        let bottomMidLayer = midPlatform.createLayer('MidBottomLayer', platformTileset, 0, 0);
        bottomMidLayer.setCollision(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
        let topMidLayer = midPlatform.createLayer('MidTopLayer', platformTileset, 0, 0);
        topMidLayer.setCollisionBetween(0, 12);
        this.bottomPlatformArray.push(bottomMidLayer);
        this.topPlatformArray.push(topMidLayer);
    }
    MoveCollisionBoxesXXX() {
        this.sideCollider.forEach(colls => {
            //     // colls.setOrigin(0.1);
            // this.scene.physics.world.enable(colls);
            colls.body.setVelocityX(-450);

        })
    }
    MoveBottomPlatformxxx() {
        // this.sideCollider.forEach(colls => {
        //     // colls.setOrigin(0.1);
        //     // this.scene.physics.world.enable(colls);
        //     colls.body.setVelocityX(-100);

        // })
        this.bottomPlatformArray.forEach((currentElement, index) => {
            // console.log("current elem", currentElement);
            currentElement.x -= 7;
            if (index == 0 && currentElement.x <= -13000) {
                currentElement.x = 1200;
            }
            if (index == 1 && currentElement.x <= -14000) {
                currentElement.x = 100;
            }
        });

    }
    MoveTopPlatformxxx() {
        this.topPlatformArray.forEach((currentElement, index) => {
            currentElement.x -= 7;
            if (index == 0 && currentElement.x <= -13000) {
                currentElement.x = 1200;
            }
            if (index == 1 && currentElement.x <= -14000) {
                currentElement.x = 100;
            }
        });
    }
}

export default Platform;