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

        let bottomPlatformOne = this.scene.add.image(300, 1470, 'bottomFloor_One');
        this.arrayBottomPlatform.push(bottomPlatformOne);
        // // this.bottomContainer_One.setSize(2151, 923);
        // // this.scene.physics.world.enable(this.bottomContainer_One);
        // // this.bottomContainer_One.setPosition(bottomPlatformOne.x, bottomPlatformOne.y);

        this.bottomContainer_One.add(bottomPlatformOne);
        // // this.bottomContainer_One.body.allowGravity = false;

        // // bottomPlatformOne.body.allowGravity = false;

        let collider_One = this.scene.physics.add.image(-400, 1620, 'onepixel').setScale(780, 620).setAlpha(0.5);
        collider_One.body.allowGravity = false;
        // console.log('cont', this.bottomContainer_One.x, collider_One.x)
        this.arrayBottomColliders.push(collider_One);
        this.bottomContainer_One.add(collider_One);

        let collider_Two = this.scene.physics.add.image(220, 1663, 'onepixel').setScale(250 * scaleFactorX, 990 * scaleFactorY).setAlpha(0.5);
        collider_Two.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Two);
        this.bottomContainer_One.add(collider_Two);

        let collider_Three = this.scene.physics.add.image(605, 1509, 'onepixel').setScale(160 * scaleFactorX, 990 * scaleFactorY).setAlpha(0.5);
        collider_Three.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Three);
        this.bottomContainer_One.add(collider_Three);

        let collider_Four = this.scene.physics.add.image(833, 1605, 'onepixel').setScale(86 * scaleFactorX, 880 * scaleFactorY).setAlpha(0.5);
        collider_Four.body.allowGravity = false;
        this.arrayBottomColliders.push(collider_Four);
        this.bottomContainer_One.add(collider_Four);

        this.bottomContainer_Two = this.scene.add.container(0, 0);
        let bottomPlatformTwo = this.scene.add.image(300 + bottomPlatformOne.width + 220, 1703, 'bottomFloor_Two');
        this.bottomContainer_Two.add(bottomPlatformTwo);

        this.arrayBottomPlatform.push(bottomPlatformTwo);

        let collider_Five = this.scene.physics.add.image(1215, 1780, 'onepixel').setScale(328 * scaleFactorX, 300 * scaleFactorY).setAlpha(0.5);
        collider_Five.body.allowGravity = false;
        this.bottomContainer_Two.add(collider_Five);

        let collider_Six = this.scene.physics.add.image(1745, 1769, 'onepixel').setScale(243 * scaleFactorX, 1200 * scaleFactorY).setAlpha(0.5);
        collider_Six.body.allowGravity = false;
        this.bottomContainer_Two.add(collider_Six);

        let collider_Seven = this.scene.physics.add.image(2050, 1769, 'onepixel').setScale(84 * scaleFactorX, 900 * scaleFactorY).setAlpha(0.5);
        collider_Seven.body.allowGravity = false;
        this.bottomContainer_Two.add(collider_Seven);

        let collider_Eight = this.scene.physics.add.image(2438, 1773, 'onepixel').setScale(338 * scaleFactorX, 600 * scaleFactorY).setAlpha(0.5);
        collider_Eight.body.allowGravity = false;
        this.bottomContainer_Two.add(collider_Eight);

        let collider_Nine = this.scene.physics.add.image(2983, 1750, 'onepixel').setScale(254 * scaleFactorX, 850 * scaleFactorY).setAlpha(0.5);
        collider_Nine.body.allowGravity = false;
        this.bottomContainer_Two.add(collider_Nine);

        let collider_Ten = this.scene.physics.add.image(3440, 1590, 'onepixel').setScale(250 * scaleFactorX, 850 * scaleFactorY).setAlpha(0.5);
        collider_Ten.body.allowGravity = false;
        this.bottomContainer_Two.add(collider_Ten);

        let collider_Eleven = this.scene.physics.add.image(3820, 1950, 'onepixel').setScale(168 * scaleFactorX, 650 * scaleFactorY).setAlpha(0.5);
        collider_Eleven.body.allowGravity = false;
        this.bottomContainer_Two.add(collider_Eleven);

        // let bottomPlatformThree = this.scene.add.image(bottomPlatformTwo.x + bottomPlatformTwo.width + 800, 1700, 'bottomFloor_Three');
        this.bottomContainer_Three = this.scene.add.container(0, 0);
        // let bottomPlatformThree = this.scene.add.image(500, 1470, 'bottomFloor_Three');
        let bottomPlatformThree = this.scene.add.image(bottomPlatformTwo.x + bottomPlatformTwo.width + 800, 1700, 'bottomFloor_Three');

        this.arrayBottomPlatform.push(bottomPlatformThree);

        this.bottomContainer_Three.add(bottomPlatformThree);

        let collider_Twelve = this.scene.physics.add.image(bottomPlatformThree.x - bottomPlatformThree.width / 2.083, bottomPlatformThree.y + bottomPlatformThree.height / 4.51, 'onepixel').setScale(85 * scaleFactorX, 625 * scaleFactorY).setAlpha(0.5);
        collider_Twelve.body.allowGravity = false;
        this.bottomContainer_Three.add(collider_Twelve);

        let collider_Thirteen = this.scene.physics.add.image(bottomPlatformThree.x - bottomPlatformThree.width / 2.35, bottomPlatformThree.y + bottomPlatformThree.height / 4.6, 'onepixel').setScale(163 * scaleFactorX, 920 * scaleFactorY).setAlpha(0.5);
        collider_Thirteen.body.allowGravity = false;
        this.bottomContainer_Three.add(collider_Thirteen);

        let collider_Fourteen = this.scene.physics.add.image(bottomPlatformThree.x - bottomPlatformThree.width / 3.59, bottomPlatformThree.y - bottomPlatformThree.height / 14.5, 'onepixel').setScale(495 * scaleFactorX, 920).setAlpha(0.5);
        collider_Fourteen.body.allowGravity = false;
        this.bottomContainer_Three.add(collider_Fourteen);

        let collider_Fifteen = this.scene.physics.add.image(bottomPlatformThree.x - bottomPlatformThree.width / 10.62, bottomPlatformThree.y + bottomPlatformThree.height / 4.6, 'onepixel').setScale(336 * scaleFactorX, 920).setAlpha(0.5);
        collider_Fifteen.body.allowGravity = false;
        this.bottomContainer_Three.add(collider_Fifteen);

        let collider_Sixteen = this.scene.physics.add.image(bottomPlatformThree.x + bottomPlatformThree.width / 18, bottomPlatformThree.y + bottomPlatformThree.height / 9.6, 'onepixel').setScale(335 * scaleFactorX, 200 * scaleFactorX).setAlpha(0.5);
        collider_Sixteen.body.allowGravity = false;
        this.bottomContainer_Three.add(collider_Sixteen);

        let collider_Seventeen = this.scene.physics.add.image(bottomPlatformThree.x + bottomPlatformThree.width / 4.88, bottomPlatformThree.y + bottomPlatformThree.height / 24.9, 'onepixel').setScale(335 * scaleFactorX, 290 * scaleFactorX).setAlpha(0.5);
        collider_Seventeen.body.allowGravity = false;
        this.bottomContainer_Three.add(collider_Seventeen);

        let collider_Eighteen = this.scene.physics.add.image(bottomPlatformThree.x + bottomPlatformThree.width / 2.57, bottomPlatformThree.y + bottomPlatformThree.height / 17.2, 'onepixel').setScale(495 * scaleFactorX, 480 * scaleFactorX).setAlpha(0.5);
        collider_Eighteen.body.allowGravity = false;
        this.bottomContainer_Three.add(collider_Eighteen);
        console.log(this.bottomContainer_Three);







        // collider_Fifteen.body.allowGravity = false;
        // this.bottomContainer_Three.add(collider_Fifteen);
        // let bottomPlatformFour = this.scene.physics.add.image(bottomPlatformThree.x + bottomPlatformThree.width / 2 + 1090, 1700, 'bottomFloor_Four');
        // bottomPlatformFour.body.allowGravity = false;
        // this.bottomPlatformArray.push(bottomPlatformOne, bottomPlatformTwo, bottomPlatformThree, bottomPlatformFour);
        // console.log(" this.bottomPlatformArray", this.bottomPlatformArray);
    }
    MoveBottomPlatform() {
        for (let i = 0; i < this.arrayBottomPlatform.length; i++) {
            this.arrayBottomPlatform[i].x -= 7;
        }
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