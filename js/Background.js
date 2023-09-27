class Background {
    constructor(scene) {
        this.scene = scene;
        this.bg = null;
        this.gameBg = null;
        // this.arrayBg = [];
    }
    CreateTutorialBG() {
        this.bg = this.scene.add.tileSprite(Math.round(game.config.width / 2), Math.round(game.config.height / 2), Math.round(game.config.width), Math.round(game.config.height), 'tutorial_bg');
    }
    CreateGameBG() {
        this.gameBg = this.scene.add.tileSprite(Math.round(game.config.width / 2), Math.round(game.config.height / 2), Math.round(game.config.width), Math.round(game.config.height), 'game_bg');
    }
    MoveGameBG() {
        this.gameBg.tilePositionX += 4;
    }
}
export default Background;