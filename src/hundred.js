class Hundred {
  constructor() {
    this.count = 100;
    this.exerciseList = ['Chin Ups', 'Push Ups', 'Sit Ups'];

    this.div = document.createElement('div');
    this.div.id = 'Activity';
    document.body.appendChild(this.div);
  }

  createDropdown() {
    const select = document.createElement('select');
    select.id = 'selection';
    this.div.appendChild(select);

    this.exerciseList.map((item) => {
      const option = document.createElement('option');
      option.value = item;
      option.text = item;
      return select.appendChild(option);
    });
  }

  display() {
    this.div.innerHTML = '<h1>Daily Exercise</h1>';
    this.createDropdown();
    this.div.innerHTML += `<p>${this.count}</p>`;

    this.oneButton();
    this.tenButton();
  }

  doneOne() {
    this.count -= 1;
    this.display();
  }

  doneTen() {
    this.count -= 10;
    this.display();
  }

  oneButton() {
    const oneButton = document.createElement('button');
    oneButton.innerHTML = 'One';
    oneButton.addEventListener('click', () => this.doneOne());
    this.div.appendChild(oneButton);
  }

  tenButton() {
    const tenButton = document.createElement('button');
    tenButton.innerHTML = 'Ten';
    tenButton.addEventListener('click', () => this.doneTen());
    this.div.appendChild(tenButton);
  }
}

export default Hundred;
