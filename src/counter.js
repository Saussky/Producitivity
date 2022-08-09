class Counter {
  constructor(item, measure) {
    this.count = 0;
    this.item = item;
    this.measure = measure;

    this.div = document.createElement('div');
    this.div.id = this.item;
    document.body.appendChild(this.div);
  }

  display() {
    this.div.innerHTML = `<h1>${this.measure} of ${this.item}</h1>
                              <p>${this.count}</p>`;
    this.addButton();
    const lineBreak = document.createElement('br');
    this.div.appendChild(lineBreak);

    this.subtractButton();
  }

  addOne() {
    this.count += 1;
    this.display();
  }

  takeOne() {
    this.count -= 1;
    this.display();
  }

  addButton() {
    const addOne = document.createElement('button');
    addOne.innerHTML = '+1';
    addOne.addEventListener('click', () => this.addOne());
    this.div.appendChild(addOne);
  }

  subtractButton() {
    const subOne = document.createElement('button');
    subOne.innerHTML = '-1';
    subOne.addEventListener('click', () => this.takeOne());
    this.div.appendChild(subOne);
  }

  getCount() {
    return this.count;
  }
}

export default Counter;
