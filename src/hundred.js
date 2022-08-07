class Hundred {
    constructor() {
        this.count = 100;
        this.exerciseList = ["Chin Ups", "Push Ups", "Sit Ups"]
        this.counter = document.createElement("div");
    }

    createDropdown() {
        const select = document.createElement("select");
        select.id = "selection";
        document.body.appendChild(select);

        for (let i in this.exerciseList){
            const option = document.createElement("option");
            option.value = this.exerciseList[i];
            option.text = this.exerciseList[i];
            select.appendChild(option);
        }
    }

    createCounter() {
        document.body.appendChild(this.counter);
        this.counter.innerHTML = this.count;
    }

    display() {
        this.counter.innerHTML = this.count
    }

    // doneOne() {
    //     count -= 1;
    //     display();
    // }

    doneTen() {
        this.count -= 10;
        this.display();
    }

}



export {Hundred}