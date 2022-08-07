import {Timer} from "./timer.js"
import {Hundred} from "./hundred.js"
import "./style.css"

const workTimer = new Timer(28800, 'down', 'Work');
workTimer.display();


const hundred = new Hundred();
hundred.display();

const codingTimer = new Timer(0, 'up', 'Coding');
codingTimer.display();

