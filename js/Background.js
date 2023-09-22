class Background {
    constructor(scene) {
        this.scene = scene;
        this.bg = null;
        this.gameBg = null;
        this.arrayBg = [];
    }
    CreateTutorialBG() {
        this.bg = this.scene.add.tileSprite(Math.round(game.config.width / 2), Math.round(game.config.height / 2), Math.round(game.config.width), Math.round(game.config.height), 'tutorial_bg');
    }
    CreateGameBG() {
        // this.gameBgOne = this.scene.add.image(Math.round(game.config.width / 2), Math.round(game.config.height / 2), Math.round(game.config.width), Math.round(game.config.height), 'game_bg');
        this.gameBgOne = this.scene.add.image(Math.round(game.config.width / 2), Math.round(game.config.height / 2), 'game_bg');

        this.gameBgTwo = this.scene.add.image(Math.round(game.config.width / 2) + this.gameBgOne.width, Math.round(game.config.height / 2), 'game_bg');
        this.arrayBg.push(this.gameBgOne, this.gameBgTwo);
        console.log(this.arrayBg);
    }
}
export default Background;