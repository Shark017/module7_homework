/*������� 3.
�������� �������, ������� ������� ������ ������, �� ��� ���������.*/

function func() {
  const obj = Object.create(null);         // ������� ������ ������ ��� ���������
  console.log(Object.getPrototypeOf(obj)); // �������� �������� �� ��������, �������� null
}

func();