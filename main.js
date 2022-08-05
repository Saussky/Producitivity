class Timer {
    constructor(time) {
        this.time = time;
        this._interval = null;
      }

    start() {
        this._interval = setInterval(function() {
            console.log(this.time);
            this.time -= 1; // this.time is inside this setInterval function!!
            console.log(typeof(this.time));
            
            let hours = Math.floor(this.time / 3600);
            let minutes = Math.floor((this.time / 60) % 60);
            const seconds = Math.floor(this.times % 60);
        
            document.getElementById("container").innerHTML = 
                `${hours} : ${minutes} : ${seconds}`;
        }, 1000);
    }

    stop() {
        clearInterval(this._interval);
        this._interval = null;
    }
}


const timer = new Timer(28800);

const startButton = document.createElement("button");
startButton.innerHTML = "Start"
startButton.addEventListener("click", function () {
    timer.start();
})
document.body.appendChild(startButton)

const stopButton = document.createElement("button");
stopButton.innerHTML = "Pause"
stopButton.addEventListener("click", function () {
    timer.stop();
})
document.body.appendChild(stopButton)