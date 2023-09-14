class Platform {
    constructor(scene) {
        this.scene = scene;
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
    CreateBottomPlatform() {
        console.log("Platform making");
        this.contain = this.scene.add.container(0, 0);

        this.obstacle = this.scene.physics.add.image(950, 950, 'onepixel').setScale(130).setDepth(0).setFrictionX(0);
        this.obstacle.body.allowGravity = false;
        this.obstacle.body.immovable = true;
        this.contain.add(this.obstacle);
        this.contain.setSize(this.obstacle.width, this.obstacle.height);
        this.scene.physics.world.enable(this.contain);

        this.contain.body.allowGravity = false;
        // this.platformLastIndex = this.numberOfBottomPlatforms - 1;
        // this.index = this.numberOfColliders - 1;















        this.bottomContainer_One = this.scene.add.container(0, 0);

        let bottomPlatformOne = this.scene.add.image(300, 1470, 'bottomFloor_One');
        // let bottomPlatformOne = this.scene.add.image(500, 500, 'bottomFloor_One');
        // this.bottomPlatformArray_One.push(bottomPlatformOne);
        this.bottomContainer_One.setSize(10, 10);
        this.scene.physics.world.enable(this.bottomContainer_One);
        // // this.bottomContainer_One.setPosition(bottomPlatformOne.x, bottomPlatformOne.y);

        this.bottomContainer_One.add(bottomPlatformOne);
        this.bottomContainer_One.body.allowGravity = false;

        let collider_One = this.scene.physics.add.image(-390, 1630, 'onepixel').setScale(780 * scaleFactor, 620 * scaleFactor).setAlpha(0.5);
        collider_One.body.allowGravity = false;
        collider_One.body.immovable = true;
        // // console.log('cont', this.bottomContainer_One.x, collider_One.x)
        this.colliderArray.push(collider_One);
        this.bottomContainer_One.add(collider_One);

        let collider_Two = this.scene.physics.add.image(223, 1664, 'onepixel').setScale(450 * scaleFactor, 990 * scaleFactor).setAlpha(0.5);
        collider_Two.body.allowGravity = false;
        collider_Two.body.immovable = true;
        this.colliderArray.push(collider_Two);
        this.bottomContainer_One.add(collider_Two);

        let collider_Three = this.scene.physics.add.image(605, 1508, 'onepixel').setScale(300 * scaleFactor, 990 * scaleFactor).setAlpha(0.5);
        collider_Three.body.allowGravity = false;
        collider_Three.body.immovable = true;
        this.colliderArray.push(collider_Three);
        this.bottomContainer_One.add(collider_Three);

        let collider_Four = this.scene.physics.add.image(835, 1605, 'onepixel').setScale(156 * scaleFactor, 880 * scaleFactor).setAlpha(0.5);
        collider_Four.body.allowGravity = false;
        collider_Four.body.immovable = true;
        this.colliderArray.push(collider_Four);
        this.bottomContainer_One.add(collider_Four);
        // console.log("container", this.bottomContainer_One.list);

        this.bottomContainer_Two = this.scene.add.container(0, 0);
        let bottomPlatformTwo = this.scene.add.image(300 + bottomPlatformOne.width + 220, 1703, 'bottomFloor_Two');
        this.bottomContainer_Two.setSize(10, 10);
        this.scene.physics.world.enable(this.bottomContainer_Two);
        this.bottomContainer_Two.add(bottomPlatformTwo);
        this.bottomContainer_Two.body.allowGravity = false;

        let collider_Five = this.scene.physics.add.image(1214, 1778, 'onepixel').setScale(595 * scaleFactor, 300 * scaleFactor).setAlpha(0.5);
        collider_Five.body.allowGravity = false;
        collider_Five.body.immovable = true;
        this.colliderArray.push(collider_Five);
        this.bottomContainer_Two.add(collider_Five);

        let collider_Six = this.scene.physics.add.image(1745, bottomPlatformTwo.y + bottomPlatformTwo.height / 16.2, 'onepixel').setScale(462 * scaleFactor, 1200 * scaleFactor).setAlpha(0.5);
        collider_Six.body.allowGravity = false;
        collider_Six.body.immovable = true;
        this.colliderArray.push(collider_Six);
        this.bottomContainer_Two.add(collider_Six);

        let collider_Seven = this.scene.physics.add.image(2050, bottomPlatformTwo.y + bottomPlatformTwo.height / 16.2, 'onepixel').setScale(155 * scaleFactor, 900 * scaleFactor).setAlpha(0.5);
        collider_Seven.body.allowGravity = false;
        collider_Seven.body.immovable = true;
        this.colliderArray.push(collider_Seven);
        this.bottomContainer_Two.add(collider_Seven);

        let collider_Eight = this.scene.physics.add.image(2440, bottomPlatformTwo.y + bottomPlatformTwo.height / 15.1, 'onepixel').setScale(625 * scaleFactor, 600 * scaleFactor).setAlpha(0.5);
        collider_Eight.body.allowGravity = false;
        collider_Eight.body.immovable = true;
        this.colliderArray.push(collider_Eight);
        this.bottomContainer_Two.add(collider_Eight);

        let collider_Nine = this.scene.physics.add.image(2982, bottomPlatformTwo.y + bottomPlatformTwo.height / 25, 'onepixel').setScale(460 * scaleFactor, 850 * scaleFactor).setAlpha(0.5);
        collider_Nine.body.allowGravity = false;
        collider_Nine.body.immovable = true;
        this.colliderArray.push(collider_Nine);
        this.bottomContainer_Two.add(collider_Nine);

        let collider_Ten = this.scene.physics.add.image(3442, bottomPlatformTwo.y - bottomPlatformTwo.height / 9.6, 'onepixel').setScale(450 * scaleFactor, 850 * scaleFactor).setAlpha(0.5);
        collider_Ten.body.allowGravity = false;
        collider_Ten.body.immovable = true;
        this.colliderArray.push(collider_Ten);
        this.bottomContainer_Two.add(collider_Ten);

        let collider_Eleven = this.scene.physics.add.image(3825, bottomPlatformTwo.y + bottomPlatformTwo.height / 4.3, 'onepixel').setScale(310 * scaleFactor, 650 * scaleFactor).setAlpha(0.5);
        collider_Eleven.body.allowGravity = false;
        collider_Eleven.body.immovable = true;
        this.colliderArray.push(collider_Eleven);
        this.bottomContainer_Two.add(collider_Eleven);

        this.bottomContainer_Three = this.scene.add.container(0, 0);
        let bottomPlatformThree = this.scene.add.image(bottomPlatformTwo.x + bottomPlatformTwo.width + 800, 1700, 'bottomFloor_Three');
        this.bottomContainer_Three.setSize(10, 10);
        this.scene.physics.world.enable(this.bottomContainer_Three);
        this.bottomContainer_Three.add(bottomPlatformThree);
        this.bottomContainer_Three.body.allowGravity = false;

        let collider_Twelve = this.scene.physics.add.image(4100, bottomPlatformThree.y + bottomPlatformThree.height / 4.51, 'onepixel').setScale(150 * scaleFactor, 625 * scaleFactor).setAlpha(0.5);
        collider_Twelve.body.allowGravity = false;
        collider_Twelve.body.immovable = true;
        this.colliderArray.push(collider_Twelve);
        this.bottomContainer_Three.add(collider_Twelve);

        let collider_Thirteen = this.scene.physics.add.image(4313, bottomPlatformThree.y + bottomPlatformThree.height / 4.6, 'onepixel').setScale(300 * scaleFactor, 920 * scaleFactor).setAlpha(0.5);
        collider_Thirteen.body.allowGravity = false;
        collider_Thirteen.body.immovable = true;
        this.colliderArray.push(collider_Thirteen);
        this.bottomContainer_Three.add(collider_Thirteen);

        let collider_Fourteen = this.scene.physics.add.image(4935, bottomPlatformThree.y - bottomPlatformThree.height / 14.5, 'onepixel').setScale(918 * scaleFactor, 920 * scaleFactor).setAlpha(0.5);
        collider_Fourteen.body.allowGravity = false;
        collider_Fourteen.body.immovable = true;
        this.colliderArray.push(collider_Fourteen);
        this.bottomContainer_Three.add(collider_Fourteen);

        let collider_Fifteen = this.scene.physics.add.image(5700, bottomPlatformThree.y + bottomPlatformThree.height / 4.6, 'onepixel').setScale(612 * scaleFactor, 920 * scaleFactor).setAlpha(0.5);
        collider_Fifteen.body.allowGravity = false;
        collider_Fifteen.body.immovable = true;
        this.colliderArray.push(collider_Fifteen);
        this.bottomContainer_Three.add(collider_Fifteen);

        let collider_Sixteen = this.scene.physics.add.image(6330, bottomPlatformThree.y + bottomPlatformThree.height / 37, 'onepixel').setScale(631 * scaleFactor, 200 * scaleFactor).setAlpha(0.5);
        collider_Sixteen.body.allowGravity = false;
        collider_Sixteen.body.immovable = true;
        this.colliderArray.push(collider_Sixteen);
        this.bottomContainer_Three.add(collider_Sixteen);

        let collider_Seventeen = this.scene.physics.add.image(6937, bottomPlatformThree.y - bottomPlatformThree.height / 12.9, 'onepixel').setScale(612 * scaleFactor, 290 * scaleFactor).setAlpha(0.5);
        collider_Seventeen.body.allowGravity = false;
        collider_Seventeen.body.immovable = true;
        this.colliderArray.push(collider_Seventeen);
        this.bottomContainer_Three.add(collider_Seventeen);

        let collider_Eighteen = this.scene.physics.add.image(7703, bottomPlatformThree.y - bottomPlatformThree.height / 7.6, 'onepixel').setScale(910 * scaleFactor, 480 * scaleFactor).setAlpha(0.5);
        collider_Eighteen.body.allowGravity = false;
        collider_Eighteen.body.immovable = true;
        this.colliderArray.push(collider_Eighteen);
        this.bottomContainer_Three.add(collider_Eighteen);

        this.bottomContainer_Four = this.scene.add.container(0, 0);
        let bottomPlatformFour = this.scene.add.image(bottomPlatformThree.x + bottomPlatformThree.width - 1050, 1703, 'bottomFloor_Four');
        this.bottomContainer_Four.setSize(10, 10);
        this.scene.physics.world.enable(this.bottomContainer_Four);
        this.bottomContainer_Four.add(bottomPlatformFour);
        this.bottomContainer_Four.body.allowGravity = false;

        let collider_Nineteen = this.scene.physics.add.image(8738, bottomPlatformFour.y + bottomPlatformFour.height / 3.55, 'onepixel').setScale(770 * scaleFactor, 440 * scaleFactor).setAlpha(0.5);
        collider_Nineteen.body.allowGravity = false;
        collider_Nineteen.body.immovable = true;
        this.colliderArray.push(collider_Nineteen);
        this.bottomContainer_Four.add(collider_Nineteen);

        let collider_Twentieth = this.scene.physics.add.image(9200, bottomPlatformFour.y + bottomPlatformFour.height / 7.4, 'onepixel').setScale(150 * scaleFactor, 440 * scaleFactor).setAlpha(0.5);
        collider_Twentieth.body.allowGravity = false;
        collider_Twentieth.body.immovable = true;
        this.colliderArray.push(collider_Twentieth);
        this.bottomContainer_Four.add(collider_Twentieth);


        let collider_TwentyOne = this.scene.physics.add.image(collider_Twentieth.x + bottomPlatformFour.width / 7.5, bottomPlatformFour.y - bottomPlatformFour.height / 150, 'onepixel').setScale(300 * scaleFactor, 440 * scaleFactor).setAlpha(0.5);
        collider_TwentyOne.body.allowGravity = false;
        collider_TwentyOne.body.immovable = true;
        this.colliderArray.push(collider_TwentyOne);
        this.bottomContainer_Four.add(collider_TwentyOne);

        let collider_Twentytwo = this.scene.physics.add.image(collider_TwentyOne.x + bottomPlatformFour.width / 4.4, collider_TwentyOne.y - bottomPlatformFour.height / 3.5, 'onepixel').setScale(456 * scaleFactor, 440 * scaleFactor).setAlpha(0.5);
        collider_Twentytwo.body.allowGravity = false;
        collider_Twentytwo.body.immovable = true;
        this.colliderArray.push(collider_Twentytwo);
        this.bottomContainer_Four.add(collider_Twentytwo);

        // let collider_Twentythree = this.scene.physics.add.image(collider_Twentytwo.x + bottomPlatformFour.width / 12.3, bottomPlatformFour.y - bottomPlatformFour.height / 150, 'onepixel').setScale(300 * scaleFactor, 440 * scaleFactor).setAlpha(0.5);
        // collider_Twentytwo.body.allowGravity = false;
        // this.colliderArray_Three.push(collider_Twentythree);
        // this.bottomAllArray_Three.push(this.bottomPlatformArray_Three, this.colliderArray_Three);
        // console.log(this.bottomAllArray_Three);
        // console.log('colliderpos', bottomPlatformOne.x - bottomPlatformOne.width / 3.1, bottomPlatformFour.x - bottomPlatformFour.width / 3.7)
        // // collider_Fifteen.body.allowGravity = false;
        // this.bottomContainer_Three.add(collider_Fifteen);
        // let bottomPlatformFour = this.scene.physics.add.image(bottomPlatformThree.x + botomPlatformThree.width / 2 + 1090, 1700, 'bottomFloor_Four');
        // bottomPlatformFour.body.allowGravity = false;
        // this.bottomPlatformArray.push(bottomPlatformOne, bottomPlatformTwo, bottomPlatformThree, bottomPlatformFour);
        // console.log(" this.bottomPlatformArray", this.bottomPlatformArray);
    }
    MoveBottomPlatform() {
        // this.bottomContainer_One.body.setVelocityX(-270);
        // this.bottomContainer_Two.body.setVelocityX(-270);
        // this.bottomContainer_Three.body.setVelocityX(-270);
        // this.bottomContainer_Four.body.setVelocityX(-270);


        this.contain.body.setVelocityX(-270);
        console.log("this.contain", this.contain);
        console.log("body vel", this.contain.body.velocity);
        // this.obstacle.body.setVelocityX(-270);
        // for (let i = 0; i < this.colliderArray.length; i++) {
        //     this.colliderArray[i].body.setVelocityX(100);
        // }
        // for (let i = 0; i < this.bottomAllArray_One.length; i++) {
        //     for (let j = 0; j < this.bottomAllArray_One[i].length; j++) {
        //         this.bottomAllArray_One[i][j].setVelocityX(-470);
        //     }
        //     // this.arrayBottomPlatform[i].setVelocityX(-470);
        // }
        // for (let i = 0; i < this.bottomAllArray_Two.length; i++) {
        //     for (let j = 0; j < this.bottomAllArray_Two[i].length; j++) {
        //         this.bottomAllArray_Two[i][j].setVelocityX(-470);
        //     }
        // }
        // for (let i = 0; i < this.bottomAllArray_Three.length; i++) {
        //     for (let j = 0; j < this.bottomAllArray_Three[i].length; j++) {
        //         this.bottomAllArray_Three[i][j].setVelocityX(-470);
        //     }
        // }
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

        // console.log(distanceBetweenPlatforms, distanceBetwwenColliders, distanceBetweenPlatforms + distanceBetwwenColliders);

        // for (let i = 0; i < this.bottomAllArray_One.length; i++) {
        //     for (let j = 0; j < this.bottomAllArray_One[i].length; j++) {
        //         if (this.bottomAllArray_One[i][j].x <= -8000) {
        //             this.bottomAllArray_One[i][j].x = this.bottomPlatformArray_Three[0].x +
        //                 this.bottomPlatformArray_Three[0].width + 1000;
        //         }
        //     }
        // for (let i = 0; i < this.colliderArray_One.length; i++) {
        //     if (this.colliderArray_One[i].x <= -8000) {
        //         if (i == 0) {
        //             this.colliderArray_One[i].x = this.bottomPlatformArray_One[0].x +
        //                 this.bottomPlatformArray_One[0].width + 1000;
        //         }
        //         else {
        //             this.colliderArray_One[i].x = this.colliderArray_One[this.index].x +
        //                 this.colliderArray_One[this.index].width;
        //         }
        //     }
        // }
    }
    // }

    //     for (let i = 0; i < this.bottomAllArray_One.length; i++) {
    //         for (let j = 0; j < this.bottomAllArray_One[i].length; j++) {
    //             if (this.bottomAllArray_One[i][j].x <= -8000) {
    //                 this.bottomAllArray_One[i][j].x = this.bottomPlatformArray_Three[0].x +
    //                     this.bottomPlatformArray_Three[0].width + (j * 500);
    //             }
    //         }
    //     }
    // }

    // let distanceBetwwenColliders = (this.bottomPlatformArray_Three[0].x - this.bottomPlatformArray_Three[0].width / 3.7) - (this.bottomPlatformArray_One[0].x - this.bottomPlatformArray_One[0].width / 3.1);
    // let distanceBetweenPlatforms = (this.bottomPlatformArray_One[0].x - this.bottomPlatformArray_One[0].width / 3.7) - (-8000);
    // let totalDistance = (-8000) + distanceBetwwenColliders + distanceBetweenPlatforms
    // console.log("rep");
    // this.bottomAllArray_One[i][j].x = this.bottomPlatformArray_Three[0].x + this.bottomPlatformArray_Three[0].width + 1000;
    // console.log(i, j);
    // this.colliderArray_One[j].x += totalDistance + (j * 20);
    // console.log('colliderX', this.colliderArray_One[j].x)
    // }

    // this.colliderArray_One, this.bottomPlatformArray_One
    // console.log(" this.arrayBottomPlatform", this.arrayBottomPlatform);
    // for (let i = 0; i < this.arrayBottomPlatform.length; i++) {
    //     if (this.arrayBottomPlatform[i].x <= -8000) {
    //         console.log("reposition");
    //         if (i == 1) {
    //             this.arrayBottomPlatform[i].x = this.arrayBottomPlatform[this.platformLastIndex].x + this.arrayBottomPlatform[this.platformLastIndex].width + 5;
    //         }
    //         else {
    //             this.arrayBottomPlatform[i].x = this.arrayBottomPlatform[this.platformLastIndex].x + this.arrayBottomPlatform[this.platformLastIndex].width + 1000;
    //             this.platformLastIndex = i;
    //         }
    //     }
    // }

    RepositionCollidersXXX() {
        // for (let i = 0; i < this.arrayBottomColliders.length; i++) {
        //     if (this.arrayBottomColliders[i].x <= -8000) {
        //         console.log("reposition");
        //         this.arrayBottomColliders[i].x = this.arrayBottomColliders[this.platformLastIndex].x + this.arrayBottomPlatform[this.platformLastIndex].width + 5;
        //         this.platformLastIndex = i;
        //     }
        // }




    }


    CreatePlatformXXX() {

        let platform = this.scene.make.tilemap({ key: 'platform_map', tileWidth: 154, tileHeight: 154 });
        let platformTileset = platform.addTilesetImage('GamePlatformTiles', 'platform');
        let bottomLayer = platform.createLayer('BottomLayer', platformTileset, 0, 0);
        console.log("bottomLayer", bottomLayer);

        // bottomLayer.setCollisionByProperty({ collides: true });
        this.sideCollider = platform.createFromObjects('SideColliders');
        this.sideCollider.forEach(colls => {
            //     //     //     // colls.setOrigin(0.1);
            this.scene.physics.add.existing(colls);
            colls.body.allowGravity = false;
            //     //     // colls.body.setBounce(0);
        });
        // this.sideCollider.refresh();
        // platform.setCollisionBetween(0, 13);

        // console.log(this.bottomLayer);
        let toplayer = platform.createLayer('TopLayer', platformTileset, 0, 0);
        bottomLayer.setCollisionBetween(0, 13);
        // thisideCollider.setCollisionBetween(1, 9);
        toplayer.setCollisionBetween(0, 12);
        this.bottomPlatformArray.push(bottomLayer);
        this.topPlatformArray.push(toplayer);

        // this.platformArray.push(bottomMidLayer);SSSSSS
        // console.log("layer", layer);
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