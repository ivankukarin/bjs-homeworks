"use strict";

Array.isArray(); ///
name.indexOf(value); /// вернет порядковый номер (и -1 если его нет в массиве)
arr.includes(item); /// true/false
name.lastIndexOf(value); /// с конца массива
arr.findIndex(funct); // возвращает индекс
arr.find(funct); // возвращаем сам элемент  (numbers.find(isEven)===undefined)
numbers.some(func); // возвращает true если бы хотя бы один соответствует func
arr.every(func); // true если только все соответствуют func
empoloyees.filter(func); //  вернет новый массив с соответствующим функции
arr.map(func); // вернет новый массив с новыми элементами каждый из оторых прееобразован с помощью func

// let compare = (arr1, arr2) => {
//   (arr1.length === arr2.length)
//   return arr1.every(func (item, index) {
//     item === arr2[index];
//   })
// }

const compareArrays = function(arr1, arr2) {
  console.log(
    arr1.length === arr2.length &&
      arr1.every(function(el, i) {
        return el === arr2[i];
      })
  );
};

const sum = (a, b) => a + b;
const mSum = memoize(sum, 2);

sum(3, 4); // 7
mSum(3, 4); // 7

function memoize(fn, limit) {
  const memory = [];
  return function() {
    let args = Array.from(arguments);
    let checkAc = memory.find(mem => compareArrays(mem, args));
    if (checkAc === undefined) {
      console.log(`Функция вызвана не из памяти.`);
      return checkAc.result;
    } else {
      memory.push({ arg: args, result: fn.apply(args) });

      return fn.apply(args);
    }
  };
}
