/*������� 5.

���������� ���������� ���������� �� ����������� ����� �� ������.*/

function Electronics(color, elecName, requiredPower) { //�������� ������� �����������
  this.color = color,
  this.name = elecName,
  this.requiredPower = requiredPower,
  this.turnPowerOn = function(){
    console.log(`Power ${elecName} is on.`)
  }
}

Electronics.prototype.turnPowerOff = function(){       //�������� ����� ��� ���������� �� ���������
  console.log(`Power ${elecName} is off.`)
} 

class Tv extends Electronics {   //��������� ����� Electronics
  constructor(color, elecName, requiredPower, diagonal) {
    super(color, elecName, requiredPower),   //���������� � ��������� � ������� ������������� ������
    this.diagonal = diagonal   //������ ����� �������� ���������    
  }
}

const TvSet  = new Tv('black','TvSet', 100, 32); 	//�������� ������ ���������
TvSet.turnPowerOn(TvSet);							//������� ��������������

class Notebook extends Electronics {   //��������� ����� Electronics
  constructor(color, elecName, requiredPower) {
	super(color, elecName, requiredPower),    //���������� � ��������� � ������� ������������� ������
	this.turnWifiOn = function(){		//������� ����� ����� - ����������� �������� Wi-fi
	  console.log(`Wi-fi ${elecName} is on now.`)
    }
  }
}

const notebookLG  = new Notebook('grey','notebookLG', 250);
notebookLG.turnWifiOn(notebookLG);
console.log(`Sum requiredpower is: ${notebookLG['requiredPower'] + TvSet['requiredPower']} watts.`);