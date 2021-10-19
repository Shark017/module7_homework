/*Задание 4.
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
Реализуйте его на прототипах. Определить иерархию электроприборов. Включить некоторые в розетку. 
Посчитать потребляемую мощность. Таких приборов должно быть, как минимум, два 
(например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает..*/

function Electronics(color, elecName, requiredPower) { //Создадим функцию конструктор
  this.color = color,
  this.name = elecName,
  this.requiredPower = requiredPower,
  this.turnPowerOn = function(){                         //Создадим метод для включения
  console.log(`Power ${elecName} is on.`)
  }
}

Electronics.prototype.turnPowerOff = function(){       //Создадим метод для выключения из прототипа 
  console.log(`Power ${elecName} is off.`)
} 

function wifiEnabled(color, elecName, requiredPower, wifiEnable) {       //метод определяющий наличие wi-fi
	this.color = color,
  this.name = elecName,
  this.requiredPower = requiredPower,
	this.wifiEnable = wifiEnable
}

wifiEnabled.prototype = new Electronics();   //установка делегирующей связи

const televisionSet = new Electronics('black', 'televisionSet', 120); //Создадим объект телевизор

televisionSet.turnPowerOn(televisionSet); //Включим телевизор в розетку

const notebook = new wifiEnabled('grey', 'notebook', 100, true); //Создадим объект ноутбук с возможностью подключения к wi-fi

console.log(`Overall required power is: ${televisionSet['requiredPower'] + notebook['requiredPower']}`); //выводим в консоль потребляемую мощность