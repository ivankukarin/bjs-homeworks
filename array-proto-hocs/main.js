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

compareArrays([8, 9], [6]); // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]); // true
