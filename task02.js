/*������� 2.
�������� �������, ������� ��������� � �������� ���������� ������ � ������, 
� ����� ��������� ���� �� � ����������� ������� �������� � ������ ������. 
������� ������ ���������� true ��� false.*/

function func(string,obj) {                
  return obj.hasOwnProperty(string);  // ��������� ������� � ������� ��������
}
const obj = {name: 'Ivan', age: 20, city: 'Moscow'};
alert(func('city',obj));              // ������� �� ����� true ��� false