import {Timer} from "./timer.js"
import {Hundred} from "./hundred.js"

const timer = new Timer(28800);
timer.display();

const startButton = document.createElement("button");
startButton.innerHTML = "Start"
startButton.addEventListener("click", timer.start);
document.body.appendChild(startButton)

const stopButton = document.createElement("button");
stopButton.innerHTML = "Pause"
stopButton.addEventListener("click", timer.stop);
document.body.appendChild(stopButton)

const fiveButton = document.createElement("button");
fiveButton.innerHTML = "Back 5 Mins";
fiveButton.addEventListener("click", timer.backFive);
document.body.appendChild(fiveButton);





const hundred = new Hundred();
hundred.createDropdown();
hundred.createCounter();
hundred.display();

let oneButton = document.createElement("button");
oneButton.innerHTML = "One";
oneButton.addEventListener("click", hundred.doneOne);
document.body.appendChild(oneButton);

let tenButton = document.createElement("button");
tenButton.innerHTML = "Ten";
tenButton.addEventListener("click", hundred.doneTen);
document.body.appendChild(tenButton);
