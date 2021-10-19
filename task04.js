/*������� 4.
����������� ��������� ���������� ���������� ������� �������, ������� ���������� � �����. 
���������� ��� �� ����������. ���������� �������� ���������������. �������� ��������� � �������. 
��������� ������������ ��������. ����� �������� ������ ����, ��� �������, ��� 
(��������, ���������� ����� � ���������). ������ ������, ���������, ������ ���������� �� ��������..*/

function Electronics(color, elecName, requiredPower) { //�������� ������� �����������
  this.color = color,
  this.name = elecName,
  this.requiredPower = requiredPower,
  this.turnPowerOn = function(){                         //�������� ����� ��� ���������
  console.log(`Power ${elecName} is on.`)
  }
}

Electronics.prototype.turnPowerOff = function(){       //�������� ����� ��� ���������� �� ��������� 
  console.log(`Power ${elecName} is off.`)
} 

function wifiEnabled(color, elecName, requiredPower, wifiEnable) {       //����� ������������ ������� wi-fi
	this.color = color,
  this.name = elecName,
  this.requiredPower = requiredPower,
	this.wifiEnable = wifiEnable
}

wifiEnabled.prototype = new Electronics();   //��������� ������������ �����

const televisionSet = new Electronics('black', 'televisionSet', 120); //�������� ������ ���������

televisionSet.turnPowerOn(televisionSet); //������� ��������� � �������

const notebook = new wifiEnabled('grey', 'notebook', 100, true); //�������� ������ ������� � ������������ ����������� � wi-fi

console.log(`Overall required power is: ${televisionSet['requiredPower'] + notebook['requiredPower']}`); //������� � ������� ������������ ��������