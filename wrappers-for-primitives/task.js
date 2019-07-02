'use strict'

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    
    let P = percent/100/12;
    console.log(P);
    const calcMonths = () => 
       Math.floor((((new Date(date)).getTime()) - (new Date().getTime()))/( 86400000 * 29.4 )); /// принимаю 29.4 дня в месяце усредненное 
    
    let n = calcMonths();
    console.log(n);
    let monthlyPayment = amount * ( P + P /((Math.pow (( 1 + P ), n )-1)));
    console.log(monthlyPayment);
    let totalAmount = monthlyPayment * n;
    

    return totalAmount;
}


//////////// Задача 2

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
}