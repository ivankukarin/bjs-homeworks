// 'use strict'

/////// Задача 1
let a;
let b;
let c;

function getSolutions( a, b, c) {

    let D = ( b**2 - 4 * a * c);

    if (D < 0) {
        return {D: D};
    } else if (D === 0) {
        let x1 = (- b / (2 * a));
        return { 
            roots: x1,
            D: D
        }
    } else if (D > 0) {
        let x1 = (( -b + Math.sqrt(D) ) / ( 2 * a ) );
        let x2 = (( -b - Math.sqrt(D) ) / ( 2 * a ) );
        return {
            roots: [x1, x2],
            D: D    
        }
    }  
}

function showSolutionsMessage( a, b, c) {

    let result = getSolutions(a,b,c);

    console.log(`Вычисляем корни квадратного уравнения ${a}*x^2 + ${b}*x + ${c} = 0`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (!result.D) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else if (result.D) {
        console.log(`Уравнение имеет два корня. X₁ = ${ result.roots[0] }, X₂ = ${ result.roots[1] }`)   
    }  
};

showSolutionsMessage(1,2,3);
showSolutionsMessage(7,20,-3);
showSolutionsMessage(2,4,2);



///////// Задача 2

let data = {
    algebra: [2, 5, 3, 6, 2, 6],
    geometry: [5, 4, 3, 7, 2],
    russian: [5, 3, 5, 2],
    physics: [6, 3, 5, 2],
    music: [ 4, 5 ,5, 5],
    english: [5, 2, 5, 4, 5 ],
    poetry: [3, 4, 5, 2, 2 ],
    chemistry: [4, 5 ],
    french: [ 4, 3, 5 ],

    getAverageScoreOfLessons: function() {
        for (let prop in data) {
            console.log(`${prop} ${prop.length} `);
            
            let sumOfMarks = 0;
            let averageScoreOfLesson = 0;
            
            for (let i = 0; i < this.prop; i++) {
                console.log(data.prop.length[i]);  
                sumOfMarks += prop[i];
            };
            
            console.log(sumOfMarks);

            // averageScoreOfLesson = sumOfMarks / prop.length;
            // console.log(averageScoreOfLesson);

            // return {
            //     prop: averageScoreOfLesson,
            // };
    
        };
    },

};

function getAverageScore (data) {
    console.log(data);   
};

