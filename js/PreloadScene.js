import { AudioManager } from "./AudioManager.js";
export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super('PreloadScene');
        this.progressBase = null;
        this.progressLine = null;
        this.fonts = {
            "PoetsenOne-Regular": null,
        }
    }
    preload() {
        this.load.setPath('assets/images/');
        this.load.image('bg', 'BG.png');
        this.load.image('bird', 'Character.png');
        this.load.image('effects', 'Effects.png');
        this.load.image('ice_cube', 'Ice.png');
        this.load.image('rocks', 'Rocks.png');
        this.load.image('title', 'title_art.png')
        this.load.image('progressLine', 'loading_bar.png');
        this.load.image('progressBase', 'loading_base.png');
    }
    create() {
        let bg = this.add.image(game.config.width / 2, game.config.height / 2, 'bg');
        let platform = this.add.image(game.config.width / 2, game.config.height / 1.165, 'rocks');
        let iceCube = this.add.image(game.config.width / 1.7, game.config.height / 1.361, 'ice_cube');
        let effects = this.add.image(0, 0, 'effects');
        effects.copyPosition(iceCube);
        effects.x -= 210;
        effects.y -= 47;
        let title = this.add.image(game.config.width / 2.02, game.config.height / 3.77, 'title');
        let bird = this.add.image(game.config.width / 1.99, game.config.height / 1.8, 'bird');
        this.progressBase = this.add.image(Math.round(game.config.width / 2), Math.round(game.config.height / 1.08), "progressBase").setOrigin(0.5, 0.5) //.setScale(1 * scaleFactorX, 1 * scaleFactorY);
        this.progressLine = this.add.image(Math.round(game.config.width / 2), Math.round(game.config.height / 1.081), "progressLine").setOrigin(0.5, 0.5) //.setScale(1.4 * scaleFactorX, 1 * scaleFactorY);
        this.progressLine.setCrop(0, 0, 0, this.progressLine.height);
        // this.LoadAssets();
        this.LoadFonts();
    }
    LoadFonts() {
        let propNames = Object.getOwnPropertyNames(this.fonts);
        propNames.forEach((fontName, index) => {
            // console.log("Here");
            let isLast = index >= propNames.length - 1;
            // console.log("Here");
            this.fonts[fontName] = new FontFaceObserver(fontName);
            this.fonts[fontName].load().then(this.FontLoadSuccess.bind(this, fontName, isLast), this.FontLoadError.bind(this, fontName));
        });
    };

    FontLoadSuccess(fontName, isLast) {
        if (isLast) {
            // console.log('this.load')
            this.LoadAssets();
            // this.AddAudio();
        }
    };
    FontLoadError(fontName) { console.log('error------') };

    LoadAssets() {
        this.load.on('progress', this.LoadProgress, this);
        this.load.on('complete', this.OnComplete, { scene: this.scene });

        this.load.setPath('assets/images/');
        // this.load.image('title_intro', 'Title_art.png');
        this.load.image('playButton', 'Play_button.png');
        this.load.image('backButton', 'back_button.png');
        this.load.image('yesButton', 'yes_button.png');
        this.load.image('noButton', 'no_button.png');
        this.load.spritesheet('sound_btns', 'sound button spritesheet.png', { frameWidth: 169, frameHeight: 169 });
        this.load.image('tutorial_bg', 'Tutorial_bg.jpg');
        this.load.image('bgOne', 'bg_one.png');
        this.load.image('bgTwo', 'bg_two.png');
        this.load.image('bgThree', 'bg_three.png');
        this.load.image('bgFour', 'bg_four.png');
        this.load.image('cloud_one', 'cloud_one.png');
        this.load.image('cloud_two', 'cloud_two.png');
        this.load.image('cloud_three', 'cloud_three.png');
        this.load.image('cloud_four', 'cloud_four.png');
        this.load.image('cloud_five', 'cloud_five.png');
        this.load.image('cloud_six', 'cloud_six.png');
        this.load.image('overlay', 'Overlay_box.png');
        this.load.image('instruction_box', 'Instruction_box.png');
        this.load.image('right_corner_top', '06_Right_corner_top.png');
        this.load.image('left_corner_top', '09_Left_corner_top.png');
        this.load.image('right_corner_down', 'right_corner_down.png');
        this.load.image('left_corner_down', 'left_corner_down.png');
        this.load.image('right_side', 'right_side.png');
        this.load.image('left_side', 'left_side.png');
        this.load.image('left_corner_small', '11_Left_corner_small.png');
        this.load.image('left_corner_small_top', 'left_corner_small.png');
        this.load.image('right_corner_small_top', 'right_corner_small.png');
        this.load.image('top', '01_Top.png');
        this.load.image('bottom', 'bottom.png');
        this.load.image('right_corner_small', '10_Right_corner_small.png');
        this.load.image('center', 'center.png');
        this.load.image('platform', 'Platform.png');
        this.load.image('player', 'Penguin.png');
        this.load.image('cubes', '14_Ice_cube.png');
        this.load.tilemapTiledJSON('platformInstruction', 'platformTutorial.json');
        this.load.image('tutorial_overlay', 'Overlay_box.png');
        this.load.image('instruction_box', 'Instruction_box.png');
        this.load.image('gameOver_box', 'game_over_box_bar.png');
        this.load.image('settings_box', 'Gameover_box_pannel.png');
        this.load.image("gameOver_player", "pengiun_gameover.png");
        this.load.image('onepixel', 'onepixel.png');
        this.load.image('ground', 'ground_tiles.png');
        this.load.image('obstacle_cube', 'ice_block.png');
        this.load.image('sheath', 'protector.png');
        this.load.image('score_base', 'base.png');
        this.load.image('distance_icon', 'distance_icon.png');
        this.load.image('stopwatch', 'stopwatch.png');

        this.load.setPath('assets/audio/');
        this.load.audio('bg_audio', 'background.mp3');
        this.load.audio('create_audio', 'creation.mp3');
        this.load.audio('drop_audio', 'ground_drop.mp3');
        this.load.audio('hit_audio', 'hit.mp3');
        this.load.audio('game_over', 'game_over.wav');

        this.load.setPath('assets/spines/');
        this.load.spine('penguin', 'Penguin Character.json', 'Penguin Character.atlas');
        this.load.spine('intro', 'Intro.json', 'Intro.atlas');
        this.load.spine('smoke', 'Smoke.json', 'Smoke.atlas');
        this.load.spine('pointer', 'skeleton.json', 'skeleton.atlas');

        this.load.start();
    }

    AddAudio() {
        AudioManager.CreateAudio();
    }

    LoadProgress(percentage) {
        this.progressLine.setCrop(0, 0, this.progressLine.width * percentage, this.progressLine.height);
        percentage = percentage * 100;
    }

    OnComplete() {
        this.scene.stop('PreloadScene');
        this.scene.start('TutorialScene');
        this.scene.scene.AddAudio();
    }
}