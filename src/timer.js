class Timer {
    constructor(time) {
        this.time = time;
        this._interval = null;
      }

    display() {
        let hours = Math.floor(this.time / 3600);
        let minutes = Math.floor((this.time / 60) % 60);
        let seconds = Math.floor(this.time % 60);

        if (seconds < 10){seconds = "0" + seconds;}
        if (minutes < 10){minutes = "0" + minutes;}
        if (hours < 10){hours = "0" + hours;}
        
        document.getElementById("timer").innerHTML = 
            `${hours} : ${minutes} : ${seconds}`;
    }

    countDown() {
        this.time -= 1;
        this.display();
    }

    start() {
        this._interval = setInterval(() => this.countDown(), 1000);
      }
        
    stop() {
        clearInterval(this._interval);
        this._interval = null;
    }

    backFive() {
        this.time += 300;
        this.display();
    }

    skipFive() {
        this.time -= 300;
        this.display();
    }
}

export {Timer}