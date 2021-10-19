/*Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.*/

function func() {
  const obj = Object.create(null);         // Создаем пустой объект без прототипа
  console.log(Object.getPrototypeOf(obj)); // Проводим проверку на прототип, получаем null
}

func();