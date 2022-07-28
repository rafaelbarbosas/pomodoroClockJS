// class to implemet a timer
class Timer {
    constructor(time, everySecondAction,actionOnFinish) {
        this.time = time+1;
        this.interval = null;
        this.isPaused = false;
        this.actionOnFinish = actionOnFinish;
        this.everySecondAction = everySecondAction;
    }
    start() {
        this.isPaused = false;
        this.interval = setInterval(() => {
            this.time--;
            if (this.time < 0) {
                this.onFinish();
            } else {
                this.everySecondAction();
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
    }
    onFinish() {
        this.endTimer();
        this.actionOnFinish();
    }
}