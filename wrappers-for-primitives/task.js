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
    
    function replaceComma (percent) {
        let re = /,/;
        let percentWithoutComma = percent.replace(re, '.');
        console.log(percentWithoutComma);
        return percentWithoutComma;

    };


    let P = +(parseFloat(replaceComma(percent))/100/12);
    console.log(P);

    function checkisNumber( percent, contribution, amount) {
        let arr = { percent, contribution, amount };
        for (let prop in arr) {
            if (isNaN(arr[prop])) {
                console.log(`Параметр ${prop} содержит неправильное значение ${arr[prop]}`);
            }
        }
    }
    
    checkisNumber(percent, contribution, amount);

    function checkDays(date){
        let result;
        if (((new Date(date).getDate())- new Date().getDate()) < 0) {
            result = -1;
        } else { result = 0 } ;
        return result;
    }
    
    const calcMonths = () => {
        let monthOfYear = ((((new Date(date)).getFullYear()) - (new Date().getFullYear())) * 12);
        let months = ((new Date(date).getMonth()) - (new Date().getMonth())); 
        return (monthOfYear + months + checkDays(date)) ;
    }

    let n = calcMonths();
    console.log(`Срок кредита, мес = ${n}`);

    const loanAmount = () => {
        if ((amount-contribution) >= 0) { return (amount - contribution);
        } else { console.log(`Сумма кредита указана неверно, получилось: ${amount - contribution} `)
        }
    }    
        
    let monthlyPayment = +( loanAmount() * ( P + P /((Math.pow (( 1 + P ), n )-1))) ).toFixed(2);
    
    console.log(`Ежемесячный платеж составит: ${monthlyPayment}`);
    
    let totalAmount = (monthlyPayment * n).toFixed(2);
    let totalAll = (+(totalAmount + contribution)).toFixed(2);
    console.log(`Сумма всех оплат составит ${totalAll} руб.`);

    return totalAmount;
};


//////////// Задача 2

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}


function getGreeting(name) {
   function isName (name) {
        if ((name === "") || (name === "undefined") || (!Boolean(name))) { 
            return "Аноним";
            } else { 
                return name };
   };
   return (`Привет, мир! Меня зовут ${isName(name)}`);
}