class AudioManager {
    constructor(scene) {
        this.scene = scene;
        this.bgAudio = null;
        this.cubeCreateAudio = null;
        this.dropAudio = null;
        this.hitAudio = null;
    }
    CreateAudio() {
        this.bgAudio = game.sound.add('bg_audio');
        this.cubeCreateAudio = game.sound.add('create_audio');
        this.dropAudio = game.sound.add('drop_audio');
        this.hitAudio = game.sound.add('hit_audio');
    }
    PlayBGAudio() {
        this.bgAudio.play();
        this.bgAudio.loop = true;
        this.bgAudio.volume = 4;
    }
    StopBGAudio() {
        this.bgAudio.loop = false;
        this.bgAudio.stop();
    }
    PlayCubeCreateAudio() {
        this.cubeCreateAudio.play();
    }
    PlayDropAudio() {
        this.dropAudio.play();
    }
    PlayHitAudio() {
        this.hitAudio.play();
    }
}
let audio = new AudioManager();

export { audio as AudioManager };