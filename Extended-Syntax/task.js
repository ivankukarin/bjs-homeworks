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
        console.log("Корней нет!");
    } else if (d == 0) {
        x[0] = (- b / 2*a);
    } else if (d > 0) {
        x[0] = (( -b - Math.sqrt(d) ) / ( 2 * a ) );
        x[1] = (( -b + Math.sqrt(d) ) / ( 2 * a ) );
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
    let now = new Date();
    let resultOfDrink;

    // console.log((now.getFullYear() - dateOfBirthday.getFullYear() ) > 18 );  // для проверки условий по отдельности
   
    // console.log(( (now.getFullYear() - dateOfBirthday.getFullYear() ) === 18 ) && ( (now.getMonth() - dateOfBirthday.getMonth() ) >= 1 ));

    // console.log(( (now.getFullYear() - dateOfBirthday.getFullYear() ) === 18 ) && (( now.getMonth() - dateOfBirthday.getMonth() ) === 0 ) && ( ( now.getDate() - dateOfBirthday.getDate()) >= 0 ) ) ;

    if ( ((now.getFullYear() - dateOfBirthday.getFullYear()) > 18 ) || (( (now.getFullYear() - dateOfBirthday.getFullYear() ) === 18 ) && ( (now.getMonth() - dateOfBirthday.getMonth() ) >= 1 ))  || (( (now.getFullYear() - dateOfBirthday.getFullYear() ) === 18 ) && (( now.getMonth() - dateOfBirthday.getMonth() ) === 0 ) && ( ( now.getDate() - dateOfBirthday.getDate()) >= 0 ) )  ) {
        resultOfDrink = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        resultOfDrink = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }  
    
    return resultOfDrink;
   
}



function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    
    if (marks.length > 5) {
       console.log(marks.length);
       marks.splice(5);
       console.log(marks);
    } else {
        console.log(marks.length);
    }

    let sumOfMarks = 0;

    for (let i = 0; i < marks.length; i++) {  
        console.log(marks[i]);
        sumOfMarks += marks[i];
        console.log(sumOfMarks);
    }

    // for (let mark of marks) {   //работает оба варианта перебора массива
    //     sumOfMarks += mark
    // };

    let averageMark = (sumOfMarks / marks.length);
    console.log(averageMark);

    return averageMark;
}
