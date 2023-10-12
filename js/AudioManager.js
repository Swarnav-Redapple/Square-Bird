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
        if (localStorage.getItem("super_bird_audio_on") == null) {
            localStorage.setItem("super_bird_audio_on", 1);
        }
        if (localStorage.getItem("super_bird_audio_on") == "1") {
            this.bgAudio.play();
            this.bgAudio.loop = true;
            this.bgAudio.volume = 4;
        }
    }
    StopBGAudio() {
        this.bgAudio.loop = false;
        this.bgAudio.stop();
        // game.sound.stopAll();
    }
    PlayCubeCreateAudio() {
        if (localStorage.getItem("super_bird_audio_on") == null) {
            localStorage.setItem("super_bird_audio_on", 1);
        }
        if (localStorage.getItem("super_bird_audio_on") == "1") {
            this.cubeCreateAudio.play();
        }
    }
    PlayDropAudio() {
        if (localStorage.getItem("super_bird_audio_on") == null) {
            localStorage.setItem("super_bird_audio_on", 1);
        }
        if (localStorage.getItem("super_bird_audio_on") == "1") {
            this.dropAudio.play();
        }
    }
    PlayHitAudio() {
        if (localStorage.getItem("super_bird_audio_on") == null) {
            localStorage.setItem("super_bird_audio_on", 1);
        }
        if (localStorage.getItem("super_bird_audio_on") == "1") {
            this.hitAudio.play();
        }
    }
}
let audio = new AudioManager();

export { audio as AudioManager };