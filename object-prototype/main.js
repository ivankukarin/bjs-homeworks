function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;
    console.log(birthday);
    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = Date.now();
    console.log(now);
    let userBirthday = new Date (birthday).getTime();
    console.log(userBirthday);
    let diff = now - userBirthday;
    console.log(diff);
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

    if (!animal) {
        return null
    } else if (animal) { 
        let sound = animal.sound;
        return sound 
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
    // код для задачи №3 писать здесь
}