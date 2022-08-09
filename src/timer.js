class Timer {
  constructor(time, direction, activity) {
    this.time = time;
    this.direction = direction;
    this.activity = activity;

    this.div = document.createElement('div');
    this.div.id = `${this.activity}Timer`;
    document.body.appendChild(this.div);
  }

  display() {
    let hours = Math.floor(this.time / 3600);
    let minutes = Math.floor((this.time / 60) % 60);
    let seconds = Math.floor(this.time % 60);

    if (seconds < 10) { seconds = `0${seconds}`; }
    if (minutes < 10) { minutes = `0${minutes}`; }
    if (hours < 10) { hours = `0${hours}`; }

    this.div.innerHTML = `<h1>${this.activity}</h1>
            <p>${hours} : ${minutes} : ${seconds}</p>`;

    this.startButtonDOM();
    this.stopButtonDOM();
    this.addButtonDOM();
    this.subtractButtonDOM();
  }

  countDown() {
    this.time -= 1;
    this.display();
  }

  countUp() {
    this.time += 1;
    this.display();
  }

  start() {
    if (this.direction === 'down') {
      this.interval = setInterval(() => this.countDown(), 1000);
    } else if (this.direction === 'up') {
      this.interval = setInterval(() => this.countUp(), 1000);
    }
  }

  stop() {
    clearInterval(this.interval);
  }

  addFive() {
    this.time += 300;
    this.display();
  }

  subtractFive() {
    this.time -= 300;
    this.display();
  }

  startButtonDOM() {
    const startButton = document.createElement('button');
    startButton.innerHTML = 'Start';
    startButton.addEventListener('click', () => this.start());
    this.div.appendChild(startButton);
  }

  stopButtonDOM() {
    const stopButton = document.createElement('button');
    stopButton.innerHTML = 'Pause';
    stopButton.addEventListener('click', () => this.stop());
    this.div.appendChild(stopButton);
  }

  addButtonDOM() {
    const addButton = document.createElement('button');
    addButton.innerHTML = '+ 5 Mins';
    addButton.addEventListener('click', () => this.addFive());
    this.div.appendChild(addButton);
  }

  subtractButtonDOM() {
    const subtractButton = document.createElement('button');
    subtractButton.innerHTML = '- 5 Mins';
    subtractButton.addEventListener('click', () => this.subtractFive());
    this.div.appendChild(subtractButton);
  }

  // getTime(){

  // }
}

export default Timer;
