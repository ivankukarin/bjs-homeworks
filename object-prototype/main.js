function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;
    console.log(birthday);
    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = Date.now();
    let userBirthday = new Date (birthday).getTime();
    let diff = now - userBirthday;
    let age = ( diff / ( (31622400000+(31536000000*3)) /4) );
    console.log(age);
    return (age>18);
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    
    this.animal = animal;
    let sound = animal.sound;

    if (!animal) {
        return null
        } else if (animal) { 
        return sound;
    }
};
   



function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    
    let sum = 0;
    let i = 0;    
    for (let prop in marks) {
        if ( +marks[prop] ) {
        sum += +marks[prop];
        i++;
        }
    }
    let average = sum/i;
    let roundedAverage = Math.round(average);

    return roundedAverage;
}
