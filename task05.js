/*Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.*/

function Electronics(color, elecName, requiredPower) { //Создадим функцию конструктор
  this.color = color,
  this.name = elecName,
  this.requiredPower = requiredPower,
  this.turnPowerOn = function(){
    console.log(`Power ${elecName} is on.`)
  }
}

Electronics.prototype.turnPowerOff = function(){       //Создадим метод для выключения из прототипа
  console.log(`Power ${elecName} is off.`)
} 

class Tv extends Electronics {   //расширяем класс Electronics
  constructor(color, elecName, requiredPower, diagonal) {
    super(color, elecName, requiredPower),   //Обращаемся к свойствам и методам родительского класса
    this.diagonal = diagonal   //Вводим новое свойство диагональ    
  }
}

const TvSet  = new Tv('black','TvSet', 100, 32); 	//Создадим объект телевизор
TvSet.turnPowerOn(TvSet);							//Включим электропитание

class Notebook extends Electronics {   //расширяем класс Electronics
  constructor(color, elecName, requiredPower) {
	super(color, elecName, requiredPower),    //Обращаемся к свойствам и методам родительского класса
	this.turnWifiOn = function(){		//Добавим новый метод - возможность включить Wi-fi
	  console.log(`Wi-fi ${elecName} is on now.`)
    }
  }
}

const notebookLG  = new Notebook('grey','notebookLG', 250);
notebookLG.turnWifiOn(notebookLG);
console.log(`Sum requiredpower is: ${notebookLG['requiredPower'] + TvSet['requiredPower']} watts.`);