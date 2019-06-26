'use strict'

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c) {
    let d = ( b**2 - 4 * a * c);
    let x = [];
    console.log(d);
 
    if (d < 0) {
        x[0] = undefined;
        console.log("Корней нет!");
        alert("Корней нет!");
    } else if (d == 0) {
        x[0] = (- b / 2*a);
        console.log( x[0] );
    } else if (d > 0) {
        x[0] = (( -b - Math.sqrt(d) ) / ( 2 * a ) );
        x[x.length] = (( -b + Math.sqrt(d) ) / ( 2 * a ) );
        console.log( x );
    }  
  
    console.log(x);
    return x;
 
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let marks2 = [];
    if (marks.length > 5) {
       console.log(marks.length);
       marks.splice(5);
       console.log(marks);
    } else {
        console.log(marks.length);
        marks2 = marks;
    }

    let sumOfMarks = 0;

    for (let i = 0; i < marks.length; i++) {
        console.log(marks[i]);
        sumOfMarks += marks[i];
        console.log(sumOfMarks);
    }

    // for (mark of marks) {    // почему не срабтывает по такому варианту?
    //     sumOfMarks += mark
    // };

    let averageMark = (sumOfMarks / marks.length);
    console.log(averageMark);

    return averageMark;
}
