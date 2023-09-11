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
        this.bottomPlatformArray = [];
        this.bottomContainer_One = null;
        this.bottomContainer_Two = null;
        this.bottomContainer_Three = null;
        this.bottomContainer_Four = null;
        this.numberOfBottomPlatforms = 4;
        this.platformLastIndex = null;
        this.arrayBottomPlatform = [];
        this.arrayBottomColliders = [];
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
        this.platformLastIndex = this.numberOfBottomPlatforms - 1;
        // let bottomPlatformOne = this.scene.add.image(300, 1470, 'bottomFloor_One');
        this.bottomContainer_One = this.scene.add.container(0, 0);

        let bottomPlatformOne = this.scene.physics.add.image(300, 1470, 'bottomFloor_One');
        bottomPlatformOne.setSize(bottomPlatformOne.width - 1000, bottomPlatformOne.height - 1000);
        bottomPlatformOne.body.allowGravity = false;
        this.arrayBottomPlatform.push(bottomPlatformOne);
        // // this.bottomContainer_One.setSize(2151, 923);
        // // this.scene.physics.world.enable(this.bottomContainer_One);
        // // this.bottomContainer_One.setPosition(bottomPlatformOne.x, bottomPlatformOne.y);

        this.bottomContainer_One.add(bottomPlatformOne);
        // // this.bottomContainer_One.body.allowGravity = false;

        // // bottomPlatformOne.body.allowGravity = false;

        let collider_One = this.scene.physics.add.image(bottomPlatformOne.x - bottomPlatformOne.width / 3.1, bottomPlatformOne.y + bottomPlatformOne.height / 5.7, 'onepixel').setScale(780 * scaleFactor, 620 * scaleFactor).setAlpha(0.5);
        collider_One.body.allowGravity = false;
        collider_One.body.immovable = true;
        // // console.log('cont', this.bottomContainer_One.x, collider_One.x)
        this.arrayBottomColliders.push(collider_One);
        this.bottomContainer_One.add(collider_One);

        let collider_Two = this.scene.physics.add.image(collider_One.x + bottomPlatformOne.width / 3.48, collider_One.y + bottomPlatformOne.height / 30.9, 'onepixel').setScale(450 * scaleFactor, 990 * scaleFactor).setAlpha(0.5);
        collider_Two.body.allowGravity = false;
        collider_Two.body.immovable = true;
        this.arrayBottomColliders.push(collider_Two);
        this.bottomContainer_One.add(collider_Two);

        let collider_Three = this.scene.physics.add.image(collider_Two.x + bottomPlatformOne.width / 5.68, collider_Two.y - bottomPlatformOne.height / 5.9, 'onepixel').setScale(300 * scaleFactor, 990 * scaleFactor).setAlpha(0.5);
        collider_Three.body.allowGravity = false;
        collider_Three.body.immovable = true;
        this.arrayBottomColliders.push(collider_Three);
        this.bottomContainer_One.add(collider_Three);

        let collider_Four = this.scene.physics.add.image(collider_Three.x + bottomPlatformOne.width / 9.3, collider_Three.y + bottomPlatformOne.height / 9, 'onepixel').setScale(156 * scaleFactor, 880 * scaleFactor).setAlpha(0.5);
        collider_Four.body.allowGravity = false;
        collider_Four.body.immovable = true;
        this.arrayBottomColliders.push(collider_Four);
        this.bottomContainer_One.add(collider_Four);

        this.bottomContainer_Two = this.scene.add.container(0, 0);
        let bottomPlatformTwo = this.scene.physics.add.image(300 + bottomPlatformOne.width + 220, 1703, 'bottomFloor_Two');
        // let bottomPlatformTwo = this.scene.physics.add.image(500, 500, 'bottomFloor_Two');
        bottomPlatformTwo.setSize(bottomPlatformTwo.width - 1000, bottomPlatformTwo.height - 1000);
        bottomPlatformTwo.body.allowGravity = false;
        this.arrayBottomPlatform.push(bottomPlatformTwo);
        this.bottomContainer_Two.add(bottomPlatformTwo);



        let collider_Five = this.scene.physics.add.image(bottomPlatformTwo.x - bottomPlatformTwo.width / 1.8, bottomPlatformTwo.y + bottomPlatformTwo.height / 13.83, 'onepixel').setScale(595 * scaleFactor, 300 * scaleFactor).setAlpha(0.5);
        collider_Five.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Five);
        this.bottomContainer_Two.add(collider_Five);

        let collider_Six = this.scene.physics.add.image(bottomPlatformTwo.x - bottomPlatformTwo.width / 2.82, bottomPlatformTwo.y + bottomPlatformTwo.height / 16.2, 'onepixel').setScale(462 * scaleFactor, 1200 * scaleFactor).setAlpha(0.5);
        collider_Six.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Six);
        this.bottomContainer_Two.add(collider_Six);

        let collider_Seven = this.scene.physics.add.image(bottomPlatformTwo.x - bottomPlatformTwo.width / 4.2, bottomPlatformTwo.y + bottomPlatformTwo.height / 16.2, 'onepixel').setScale(155 * scaleFactor, 900 * scaleFactor).setAlpha(0.5);
        collider_Seven.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Seven);
        this.bottomContainer_Two.add(collider_Seven);

        let collider_Eight = this.scene.physics.add.image(collider_Seven.x + bottomPlatformTwo.width / 6.7, bottomPlatformTwo.y + bottomPlatformTwo.height / 15.1, 'onepixel').setScale(625 * scaleFactor, 600 * scaleFactor).setAlpha(0.5);
        collider_Eight.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Eight);
        this.bottomContainer_Two.add(collider_Eight);

        let collider_Nine = this.scene.physics.add.image(collider_Eight.x + bottomPlatformTwo.width / 4.8, bottomPlatformTwo.y + bottomPlatformTwo.height / 25, 'onepixel').setScale(460 * scaleFactor, 850 * scaleFactor).setAlpha(0.5);
        collider_Nine.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Nine);
        this.bottomContainer_Two.add(collider_Nine);

        let collider_Ten = this.scene.physics.add.image(collider_Nine.x + bottomPlatformTwo.width / 5.74, bottomPlatformTwo.y - bottomPlatformTwo.height / 9.6, 'onepixel').setScale(450 * scaleFactor, 850 * scaleFactor).setAlpha(0.5);
        collider_Ten.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Ten);
        this.bottomContainer_Two.add(collider_Ten);

        let collider_Eleven = this.scene.physics.add.image(collider_Ten.x + bottomPlatformTwo.width / 6.82, bottomPlatformTwo.y + bottomPlatformTwo.height / 4.3, 'onepixel').setScale(310 * scaleFactor, 650 * scaleFactor).setAlpha(0.5);
        collider_Eleven.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Eleven);
        this.bottomContainer_Two.add(collider_Eleven);

        // // let bottomPlatformThree = this.scene.add.image(bottomPlatformTwo.x + bottomPlatformTwo.width + 800, 1700, 'bottomFloor_Three');
        this.bottomContainer_Three = this.scene.add.container(0, 0);
        let bottomPlatformThree = this.scene.physics.add.image(bottomPlatformTwo.x + bottomPlatformTwo.width + 800, 1700, 'bottomFloor_Three');
        // let bottomPlatformThree = this.scene.physics.add.image(-1000, 500, 'bottomFloor_Three');
        bottomPlatformThree.setSize(bottomPlatformThree.width - 1000, bottomPlatformThree.height - 1200);
        bottomPlatformThree.body.allowGravity = false;
        this.arrayBottomPlatform.push(bottomPlatformThree);
        this.bottomContainer_Three.add(bottomPlatformThree);

        let collider_Twelve = this.scene.physics.add.image(bottomPlatformThree.x - bottomPlatformThree.width / 2.083, bottomPlatformThree.y + bottomPlatformThree.height / 4.51, 'onepixel').setScale(150 * scaleFactor, 625 * scaleFactor).setAlpha(0.5);
        collider_Twelve.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Twelve);
        this.bottomContainer_Three.add(collider_Twelve);

        let collider_Thirteen = this.scene.physics.add.image(bottomPlatformThree.x - bottomPlatformThree.width / 2.35, bottomPlatformThree.y + bottomPlatformThree.height / 4.6, 'onepixel').setScale(300 * scaleFactor, 920 * scaleFactor).setAlpha(0.5);
        collider_Thirteen.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Thirteen);
        this.bottomContainer_Three.add(collider_Thirteen);

        let collider_Fourteen = this.scene.physics.add.image(bottomPlatformThree.x - bottomPlatformThree.width / 3.59, bottomPlatformThree.y - bottomPlatformThree.height / 14.5, 'onepixel').setScale(918 * scaleFactor, 920 * scaleFactor).setAlpha(0.5);
        collider_Fourteen.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Fourteen);
        this.bottomContainer_Three.add(collider_Fourteen);

        let collider_Fifteen = this.scene.physics.add.image(bottomPlatformThree.x - bottomPlatformThree.width / 10.62, bottomPlatformThree.y + bottomPlatformThree.height / 4.6, 'onepixel').setScale(612 * scaleFactor, 920 * scaleFactor).setAlpha(0.5);
        collider_Fifteen.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Fifteen);
        this.bottomContainer_Three.add(collider_Fifteen);

        let collider_Sixteen = this.scene.physics.add.image(bottomPlatformThree.x + bottomPlatformThree.width / 18, bottomPlatformThree.y + bottomPlatformThree.height / 37, 'onepixel').setScale(631 * scaleFactor, 200 * scaleFactor).setAlpha(0.5);
        collider_Sixteen.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Sixteen);
        this.bottomContainer_Three.add(collider_Sixteen);

        let collider_Seventeen = this.scene.physics.add.image(bottomPlatformThree.x + bottomPlatformThree.width / 4.88, bottomPlatformThree.y - bottomPlatformThree.height / 12.9, 'onepixel').setScale(612 * scaleFactor, 290 * scaleFactor).setAlpha(0.5);
        collider_Seventeen.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Seventeen);
        this.bottomContainer_Three.add(collider_Seventeen);

        let collider_Eighteen = this.scene.physics.add.image(bottomPlatformThree.x + bottomPlatformThree.width / 2.57, bottomPlatformThree.y - bottomPlatformThree.height / 7.6, 'onepixel').setScale(910 * scaleFactor, 480 * scaleFactor).setAlpha(0.5);
        collider_Eighteen.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Eighteen);
        this.bottomContainer_Three.add(collider_Eighteen);
        console.log(this.bottomContainer_Three);

        this.bottomContainer_Four = this.scene.add.container(0, 0);
        let bottomPlatformFour = this.scene.physics.add.image(bottomPlatformThree.x + bottomPlatformThree.width - 1050, 1703, 'bottomFloor_Four');
        // let bottomPlatformFour = this.scene.physics.add.image(500, 500, 'bottomFloor_Four');
        bottomPlatformFour.setSize(bottomPlatformFour.width - 1500, bottomPlatformFour.height - 1000);
        bottomPlatformFour.body.allowGravity = false;
        this.arrayBottomPlatform.push(bottomPlatformFour);
        this.bottomContainer_Four.add(bottomPlatformFour);

        let collider_Nineteen = this.scene.physics.add.image(bottomPlatformFour.x - bottomPlatformFour.width / 3.7, bottomPlatformFour.y + bottomPlatformFour.height / 3.55, 'onepixel').setScale(770 * scaleFactor, 440 * scaleFactor).setAlpha(0.5);
        collider_Nineteen.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Nineteen);

        let collider_Twentieth = this.scene.physics.add.image(collider_Nineteen.x + bottomPlatformFour.width / 3.7, bottomPlatformFour.y + bottomPlatformFour.height / 7.2, 'onepixel').setScale(150 * scaleFactor, 440 * scaleFactor).setAlpha(0.5);
        collider_Twentieth.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Twentieth);

        let collider_TwentyOne = this.scene.physics.add.image(collider_Twentieth.x + bottomPlatformFour.width / 7.3, bottomPlatformFour.y - bottomPlatformFour.height / 150, 'onepixel').setScale(300 * scaleFactor, 440 * scaleFactor).setAlpha(0.5);
        collider_TwentyOne.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_TwentyOne);

        let collider_Twentytwo = this.scene.physics.add.image(collider_TwentyOne.x + bottomPlatformFour.width / 4.4, collider_TwentyOne.y - bottomPlatformFour.height / 3.5, 'onepixel').setScale(456 * scaleFactor, 440 * scaleFactor).setAlpha(0.5);
        collider_Twentytwo.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Twentytwo);

        // let collider_Twentythree = this.scene.physics.add.image(collider_Twentytwo.x + bottomPlatformFour.width / 12.3, bottomPlatformFour.y - bottomPlatformFour.height / 150, 'onepixel').setScale(300 * scaleFactor, 440 * scaleFactor).setAlpha(0.5);
        // collider_Twentytwo.body.allowGravity = false;
        // this.arrayBottomColliders.push(collider_Twentytwo);
        // collider_Fifteen.body.allowGravity = false;
        // this.bottomContainer_Three.add(collider_Fifteen);
        // let bottomPlatformFour = this.scene.physics.add.image(bottomPlatformThree.x + botomPlatformThree.width / 2 + 1090, 1700, 'bottomFloor_Four');
        // bottomPlatformFour.body.allowGravity = false;
        // this.bottomPlatformArray.push(bottomPlatformOne, bottomPlatformTwo, bottomPlatformThree, bottomPlatformFour);
        // console.log(" this.bottomPlatformArray", this.bottomPlatformArray);
    }
    MoveBottomPlatform() {
        for (let i = 0; i < this.arrayBottomPlatform.length; i++) {
            this.arrayBottomPlatform[i].setVelocityX(-70);
        }
    }
    MoveColliders() {
        this.arrayBottomColliders.forEach((elems) => {
            // console.log("elems", elems);
            elems.setVelocityX(-70);
        });
    }
    RepositionPlatform() {
        for (let i = 0; i < this.bottomPlatformArray.length; i++) {
            if (this.bottomPlatformArray[i].x = -100) {
                this.bottomPlatformArray[i].x = this.bottomPlatformArray[this.platformLastIndex].x + this.bottomPlatformArray[this.platformLastIndex].width + 1000;
                this.platformLastIndex = i;
            }
        }
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
    CreateMidPlatform() {
        let midPlatform = this.scene.make.tilemap({ key: 'mid_bottom_platform', tileWidth: 154, tileHeight: 154 });
        let platformTileset = midPlatform.addTilesetImage('MidPlatform', 'platform');
        let bottomMidLayer = midPlatform.createLayer('MidBottomLayer', platformTileset, 0, 0);
        bottomMidLayer.setCollision(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
        let topMidLayer = midPlatform.createLayer('MidTopLayer', platformTileset, 0, 0);
        topMidLayer.setCollisionBetween(0, 12);
        this.bottomPlatformArray.push(bottomMidLayer);
        this.topPlatformArray.push(topMidLayer);
    }
    MoveCollisionBoxes() {
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