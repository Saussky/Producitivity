import {Timer} from "./timer.js"
import {Hundred} from "./hundred.js"
import {Counter} from "./counter.js"
import "./style.css"

const workTimer = new Timer(28800, 'down', 'Work');

const hundred = new Hundred();

const codingTimer = new Timer(0, 'up', 'Coding');

const water = new Counter('Water', 'Litres');

// TODO: Add motivational quotes from API
// also read the notes from workbook about ideas

