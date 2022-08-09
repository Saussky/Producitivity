import Timer from './timer';
import Hundred from './hundred';
import Counter from './counter';
// import { Save } from './save';
import './style.css';

const workTimer = new Timer(28800, 'down', 'Work');
workTimer.display();

const hundred = new Hundred();
hundred.display();

const codingTimer = new Timer(0, 'up', 'Coding');
codingTimer.display();

const water = new Counter('Water', 'Litres');
water.display();

// const save = new Save("1", "1", "1", "1", "1",)
// console.log(save.date);

// TODO: Add motivational quotes from API
// also read the notes from workbook about ideas
