import PreloadScene from './PreloadScene.js';
import TutorialScene from './TutorialScene.js';
import GameScene from './GameScene.js';
import PausedScene from './PausedScene.js'

let preloadScene = new PreloadScene();
let tutorialScene = new TutorialScene();
let gameScene = new GameScene();
let pausedScene = new PausedScene();

window.onload = function () {

    isMobile = /iPhone|iPhoneX|iPod|iPad|BlackBerry|kindle|playbook|Windows Phone|Android/i.test(navigator.userAgent);
    let config = null;
    let gameStarted = false;

    if (isMobile) {
        config = {
            type: Phaser.AUTO,
            parent: 'super_bird',
            pixelArt: true,
            antialias: true,
            // backgroundColor: '#34568b',
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
            },
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 4000 },
                    // debug: true,
                    // fps: 300,
                    // fixedStep: false,
                    // OVERLAP_BIAS: 16,
                    // debugBodyColor: 0x000000,
                },
            },
            plugins: {
                scene: [
                    {
                        key: 'SpinePlugin',
                        plugin: window.SpinePlugin,
                        sceneKey: 'spine',
                    }
                ]
            },
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }
    else {
        config = {
            type: Phaser.AUTO,
            parent: 'super_bird',
            pixelArt: true,
            antialias: true,
            // backgroundColor: '#34568b',
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
            },
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 100 },
                    // tileBias: 154,
                    // debug: true,
                    // fps: 300,
                    // fixedStep: false,
                    // timestep: 1 / 120,
                    // OVERLAP_BIAS: 32,
                    // forceX: false,
                    // debugBodyColor: 0x000000,
                },
            },
            plugins: {
                scene: [
                    {
                        key: 'SpinePlugin',
                        plugin: window.SpinePlugin,
                        sceneKey: 'spine',
                    }
                ]
            },
            width: 1080,
            height: 1920
        };
    }

    game = new Phaser.Game(config);

    if (isMobile) {
        scaleFactorX = config.width / 1080;
        scaleFactorY = config.height / 1920;
        scaleFactor = config.width / 1080;
    }

    else {
        // scaleFactorX = config.width / 1080;
        // scaleFactorY = config.height / 1920;
        scaleFactor = config.width / 1080;
    }
    if (game.device.os.android) {
        // console.log("Android!");
        scaleFactorX = config.width / 1070;
        scaleFactorY = config.height / 1910;
    }
    currentAspectRatio = (config.height / config.width);
    originalAspectRatio = (1920 / 1080);
    currentRatio = (currentAspectRatio / originalAspectRatio)

    window.focus();

    game.scene.add('PreloadScene', preloadScene);
    game.scene.add('TutorialScene', tutorialScene);
    game.scene.add('GameScene', gameScene);
    game.scene.add('PausedScene', pausedScene);

    if (isMobile && window.innerHeight < window.innerWidth) {
    } else {
        game.scene.start("PreloadScene");
    }
    window.addEventListener("orientationchange", function () {
        if (isMobile && window.screen.orientation == 90 || isMobile && window.screen.orientation == 270) // WHEN IN LANDSCAPE MODE//
        {
        } else {
            if (!gameStarted) {
                window.location.reload();
            }
        }
    }, false);
}