/*Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.*/

function func(string,obj) {                
  return obj.hasOwnProperty(string);  // Проверяем наличие у объекта свойства
}
const obj = {name: 'Ivan', age: 20, city: 'Moscow'};
alert(func('city',obj));              // Выводим на экран true или false