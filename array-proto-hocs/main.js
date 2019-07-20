"use strict";

// Array.isArray(); ///
// name.indexOf(value); /// вернет порядковый номер (и -1 если его нет в массиве)
// arr.includes(item); /// true/false
// name.lastIndexOf(value); /// с конца массива
// arr.findIndex(funct); // возвращает индекс
// arr.find(funct); // возвращаем сам элемент  (numbers.find(isEven)===undefined)
// numbers.some(func); // возвращает true если бы хотя бы один соответствует func
// arr.every(func); // true если только все соответствуют func
// empoloyees.filter(func); //  вернет новый массив с соответствующим функции
// arr.map(func); // вернет новый массив с новыми элементами каждый из оторых прееобразован с помощью func

const compareArrays = function(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every(function(el, i) {
      return el === arr2[i];
    })
  );
};

const sum = (a, b) => a + b;
const mSum = memoize(sum, 4);

// sum(3, 4); // 7

function memoize(fn, limit) {
  const memory = [];
  let i = 0;

  return function() {
    let args = Array.from(arguments);
    const checkAviabl = memory.find(x => compareArrays(x.arg, args));

    console.group(`Функция выполнялась ${fn.name} ${++i} раз(a)`);
    console.log(memory);

    if (checkAviabl != undefined) {
      let resultCalc = checkAviabl.result;
      console.log(`Функция вызвана из памяти. Ответ: ${resultCalc}`);
      return resultCalc;
    } else {
      let resultCalc = fn.apply(null, args);
      console.log(
        `Функция ${
          fn.name
        } вызвана НЕ из памяти. Вот какой результат вычисления: ${resultCalc}`
      );
      console.groupEnd;

      memory.push({ arg: args, result: resultCalc });
      if (memory.length > limit) {
        memory.shift();
      }
      return resultCalc;
    }
  };
};

let test = memoize((a, b, c) => a + b + c, 3);
test(7, 7, 7);
mSum(3, 4); // 7
mSum(3, 4); // 7
mSum(7, 9); // 7
mSum(1, 9);
mSum(9987, 12);
// console.log(mSum(2, 6));
const func = memoize((a, b, c) => a + b + c, 8);
// func(1, 6, 11);
func(33, 9, 0);
func(333, 9, 0);
func(343, 9, 0);
func(323, 9, 0);
func(313, 9, 0);
mSum(6666, 4); // 7
// test(7, 7, 7);
