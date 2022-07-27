// class to implemet a timer
class Timer {
    constructor(time, everySecondAction,actionOnFinish) {
        this.time = time;
        this.interval = null;
        this.isPaused = false;
        this.actionOnFinish = actionOnFinish;
        this.everySecondAction = everySecondAction;
    }
    start() {
        this.isPaused = false;
        this.interval = setInterval(() => {
            this.everySecondAction();
            this.time--;
            if (this.time <= 0) {
                this.endTimer();
            }
        }, 1000);
    }
    pause() {
        this.isPaused = true;
        clearInterval(this.interval);
    }
    endTimer() {
        clearInterval(this.interval);
        this.time = 0;

        this.actionOnFinish();
    }
}