class AlignGrid {
    constructor(config) {
        if (!config.scene) {
            console.log("missing scene!");
            return;
        }
        console.log(game.config.width);
        this.h = game.config.height;
        this.w = game.config.width;
        this.rows = game.config.rows;
        this.cols = game.config.cols;
        this.scene = config.scene;
        // console.log(game.config.rows);
        this.cw = this.w / this.cols;
        //ch cell height is the scene height divided the number of rows
        this.ch = this.h / this.rows;

        console.log(this.scene);

    }
    show(a = 100) {
        this.cw = this.w / this.cols;
        //ch cell height is the scene height divided the number of rows
        this.ch = this.h / this.rows;
        this.graphics = this.scene.add.graphics();
        this.graphics.lineStyle(4, 0xff0000, a);
        //
        //
        //this.graphics.beginPath();
        for (var i = 0; i < this.w; i += this.cw) {
            this.graphics.moveTo(i, 0);
            this.graphics.lineTo(i, this.h);
        }
        for (var i = 0; i < this.h; i += this.ch) {
            this.graphics.moveTo(0, i);
            this.graphics.lineTo(this.w, i);
        }
        this.graphics.strokePath();
    }
    showNumbers(a = 1) {
        this.show(a);
        let n = 0;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let numText = this.scene.add.text(0, 0, n, {
                    color: 'red'
                });
                numText.setOrigin(0.5, 0.5);
                this.placeAt(j, i, numText);
                n++;
            }
        }
    }

}
export default AlignGrid;