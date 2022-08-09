class Save{
    constructor(timeWorked, activityChoice, activityCount, codingTime, litresWater){
        this.date = this.getDate();

        this.timeWorked = timeWorked;
        this.activityChoice = activityChoice;
        this.activityCount = activityCount;
        this.codingTime = codingTime;
        this.litresWater = litresWater;

        this.div = document.createElement("div");
        this.div.id = "Save";
        document.body.appendChild(this.div);

        this.saveButton();
    }

    getDate(){
        const date = new Date();
        const today = date.getDate();
        const month = (date.getMonth() + 1)
        const year = date.getFullYear();
        return (`${today}/${month}/${year}`);
    }

    saveButton(){
        const saveButton = document.createElement("button");
        saveButton.innerHTML = "Save";
        this.div.appendChild(saveButton);
    }

    getInfo(){
        return (this.date + this.timeWorked + this.activityChoice + this.activityCount
            + this.codingTime + this.litresWater)
    }
}

export {Save}

