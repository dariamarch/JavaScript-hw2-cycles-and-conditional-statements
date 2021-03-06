
// Условные и логические операторы
// задание №1
// 1.	В переменную x записывается число, введенное пользователем в диалоговое окно. Проверить и вывести на экран, x – отрицательное число, положительное или ноль.
"use strict" 
		
		let x = prompt("Введите число");
		if ((x<=0) || (x >= 0)) {
			alert(x)
		} 	else {
			alert("Неверно!")
		}
		
// задание №2
// 2.	Создайте три переменные с любыми числовыми значениями. Используя условный оператор  и не используя логические, найдите минимальное число и отобразите
//  на экране имя переменной и ее значение.	

		let a = 3;
        let b = 6;
        let c = 4;
        if (a < b) {
            if (a < c) { 
				alert("a = " + a);
		    }	
        }   else if (b < c) {
				alert("b = " + b);
		} 	else {
				alert("c = " + c);
		}

// задание №3
// 3.	У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt.
//  В зависимости от общей суммы ваших сбережений вы можете полететь на Майорку или выпить пива. 
//  С помощью условного оператора определите ваши возможности и отобразите на экране в alert.

		let myMoney = +prompt("У меня, грн");
		let friendsMoney = +prompt("У друга, грн");
		if ((myMoney + friendsMoney) >= 80000) {
			alert("Летим на Майорку");
		} 	else if ((myMoney + friendsMoney < 80000) && (myMoney + friendsMoney >= 0)) {
			alert("Идем пить пиво");
		}	else {
			alert("Ошибка");
		}

// задание №4
// 4.	В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 27, в alert выводится “Выслать повестку”.

		let age = +prompt("Укажите возраст");
		if ((age >= 20) &&  (age < 27)) {
			alert("Выслать повестку");
		}	else if (age <= 0) {
			alert ("Ошибка");
		}	else {
		alert ("Не подлежит призыву");
		}

// задание №5
// 5.	Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая маршрутка приехала – определяется в prompt.
// Если ваша, то вы едете домой, в противном случае – ожидаете.

		let busNumber = +prompt("Укажите № маршрутки");
		if ((busNumber == 7) || (busNumber == 225) || (busNumber == 255)) {
			alert("Еду домой");
		}	else if (busNumber <= 0) {
			alert ("Ошибка");
		}	else {
			alert("Ожидаю");
		}

// задание №6
//6.	В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert сообщение о необходимости идти на работу.

		let day = prompt("Какой сегодня день недели?");
		if ((day !== "Суббота") && (day !== "Воскресенье")) {
			alert("Нужно идти на работу!(((");
		}	else {
			alert("Выходной!)))");
		}

// задание №7
// 7.	Запросите из prompt переменные x и y значения от -20 до 20. Если переменная x равна или меньше 1, а переменная y больше или равна 3 или меньше 0,
//  то выведите сумму этих переменных, иначе выведите 'Неверно!'.

		let x = +prompt("Введите 1е число от -20 до 20");
		let y = +prompt("Введите 2е число от -20 до 20");
		if ((x <= 1) && ((y >= 3) || (y < 0))) {
			alert(x + y);
		}	else {
			alert("Неверно!");
		}

// задание №8
// 8.	Если переменная x больше 2 и меньше 11, или переменная y больше или равна 6 и меньше 14, то увеличьте x на 2, иначе прибавьте к x число 5.
//  Выведите новое значение переменной на экран.

		let x = +prompt("Введите 1е число");
		let y = +prompt("Введите 2е число");
		if (((x > 2) && (x < 11)) || ((y >= 6) && (y < 14))) {
			x = x + 2;
		}	else {
			x = x + 5;
		}
		alert(x);

// задание №9
//9.	Получите из prompt значение для имени пользователя. Выведите на экран приветствие. Учтите вариант,
// что пользователь может не ввести ничего или нажать на Отмена.

		let userName = prompt("Введите имя");
		if ((userName == null) || (userName == "")) { 
		alert("Ошибка! Вы НЕ ввели имя")
		}	else {
		alert("Привет ," + " " + userName);
		}

// задание №10
// 10.	Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. Переменная lang может принимать три значения: 'ru', 'en', 'de' (например, из prompt).
//  Если она имеет значение 'ru', то в переменную greeting запишите приветствие на русском языке, если имеет значение 'en' – то на английском, если 'de' – на немецком.
//   Выведите на экран приветствие в зависимости от значения переменной lang. Решите задачу через if-else и через switch-case.

		let greeting = "";
		let lang = prompt("Введите язык: ru, en или de");
		if (lang == "ru") {
			greeting = "Привет!"; 
			alert(greeting);
		}   else if (lang == "en") {
			greeting = "Hello!"; 
			alert(greeting);
		}	else if (lang == "de") {
			greeting = "Guten Tag!"; 
			alert(greeting);
		}	else {
			alert("Ошибка!")
		}

		// через SWITCH:

		let greeting = "";
		let lang = prompt("Введите язык: ru, en или de");
		switch(lang) {
			case "ru":
				alert(greeting = "Привет!");
				break;
			case "en":
				alert(greeting = "Hello!");
				break;
			case "de":
				alert(greeting = "Guten Tag!");
				break;	
			default:
				alert("Ошибка!");			
		}
 
// задание №11
//11.	В переменной month хранится текущий месяц (new Date()). Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let date = new Date();
let month = date.getMonth();
if (((month >= "0") && (month <= "1")) || (month == "11")) {
 	alert("Зима");
}	else if ((month >= "2") && (month <= "4")) {
  	alert("Весна");
}	else if ((month >= "5") && (month <= "7")) {
  	alert("Лето");
}	else {
  	((month >= "8") && (month <= "10"));
  	alert("Осень");
}

// задание №12
// 12.	Переменная lang может принимать два значения: 'ru' и 'en'. Переменная day принимает значение от 0 до 6-ти. Если lang имеет значение 'ru',
//  то в переменную result запишите название дня недели на русском языке в соответствии со значением переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.).
//   Если же lang имеет значение 'en' – то аналогично, но день недели будет на английском.

let lang = prompt("Введите язык, ru либо en");
let day;
if ((lang == "ru") || (lang == "en")) {
day = +prompt("Ввести значение от 0 до 6");
}	else {
	alert("Ошибка");
}
let result;
if ((day >= 0) && (day <= 6)) {
if ((lang == "ru") && (day == 0)) {
	result = "Воскресенье";
} 	else if ((lang == "ru") && (day == 1)) {
	result = "Понедельник";
} 	else if ((lang == "ru") && (day == 2)) {
	result = "Вторник";
}	else if ((lang == "ru") && (day == 3)) {
	result = "Среда";
} 	else if ((lang == "ru") && (day == 4)) {
	result = "Четверг";
} 	else if ((lang == "ru") && (day == 5)) {
	result = "Пятница";
} 	else if ((lang == "ru") && (day == 6)) {
	result = "Суббота";
}	else if ((lang == "en") && (day == 0)) {
	result = "Sunday";
} 	else if ((lang == "en") && (day == 1)) {
	result = "Monday";
} 	else if ((lang == "en") && (day == 2)) {
	result = "Thursday";
}	else if ((lang == "en") && (day == 3)) {
	result = "Wednesday";
} 	else if ((lang == "en") && (day == 4)) {
	result = "Thirsday";
} 	else if ((lang == "en") && (day == 5)) {
	result = "Friday";
} 	else if
	((lang == "en") && (day == 6)) {
	result = "Saturday";
}	else {
		alert("Ошибка");
	}
	alert(result);
}	else {
	alert("Ошибка!");
} 

// Циклы

// Задание №1
//1.	Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for.

let i;
for (i = ".#"; i <= ".#.#.#.#"; i = i + ".#") { 
	console.log(i);
	  }
alert(i + ".");

// Задание №2
//2.	Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного значения счетчика.

for (let i = 0; i < 20; i++) {
	if (i % 2 !== 0) continue;
	console.log(i*i);
}

// Задание №3
// 3.	Используя любой цикл, напишите программу, которая в консоли выводит текстовое поздравление.
//  Программа поздравляет того, чье имя определяется в переменной username:
// Happy birthday to you
// Happy birthday to you
// Happy birthday dear {{username}}
// Happy birthday to you

let username = prompt("Введите имя");
let bDay = "Happy birthday to you";
let str = " ";
if ((username == undefined) || (username == "") || (username == " ")) {
	alert("Ошибка");
}	else {
	for (let i = 0; i < 3; i++) { 
		bDay = bDay + str;
    	console.log(bDay);
    if (i == 1) {
		console.log(bDay.slice(0,-9) + " dear " + username);
	}
	}	
}

// Задание №4
//4.Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok.

for (let i = 0; ; i) {
    let a = confirm("Ок или отмена?");
    if (a == true) break;
}

// Задание №5
//5.В окно prompt вводится число. Напишите цикл, в котором суммируются все нечетные числа до диапазона, введенного пользователем. Результат отобразите в окне alert.

let i;
let sum = 0;
let x = +prompt("Введите число");
for (let i = 0; i < x; i++) {
	
	if (i % 2 == 0) continue;
	console.log(i);
	sum = (i + sum);
}
alert(sum);

// Задание №6
// 6.	Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.9.
//  Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.

let x;
let z = 0;
for (let i = 0; i < 10; i)  {
	x = Math.random();
	if (x > 0.9) break;
	console.log(i);
	z++;
}
alert("Цикл прервало это число: " + x);
alert("Количество итераций: " + z);

// Задание №7
//7.	Используя вложенные циклы, распечатайте в консоли значения таблицы умножения: 1х1=1, 1x2=2 ... 2x1=2, 2x2=4... 

for(let i = 1; i < 10; i++) {
	for(let j = 1; j < 10; j++) {
		console.log(i + " " + "*" + " " + j + " " + " = " + i*j);
	}
}

// Задание №8
//8.	С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13... 

let n = 10;
let a = 0;
let b = 1;
let c;
result = a + " " + b + " ";
for (var i = 3; i <= n; i++, c = a + b, a = b, b = c, result = result + c + " ") { }
console.log(result);

// Задание №9
// 9.	Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет нажата Отмена.
//  После выхода из цикла распечатайте количество введенных чисел, их общую сумму и среднее арифметическое.

let i;
let sum = 0;
let res = 0;
let m;
for (i = 0; ; i) {
	let x = prompt("Введите число");
	if (x == null) break;
    if ((x == " ") || (isNaN(+x))) continue;
	x = Number(x);
	console.log(x);
	sum = (1 + sum); // количество итераций
    res = (x + res);
    m = res / sum;
}
alert("Количество введенных чисел: " + sum);
alert("Сумма введенных чисел: " + res);
alert("Среднее арифметическое: " + m);


// Задание №10
// 10.	Напишите проверку пароля, введенного пользователем (заведомо определите пароль). Если введенный пароль правильный,
//  то программа выдает сообщение “Вы успешно авторизованы”. Если пароль неправильный, программа снова выдает запрос пароля – до тех пор,
//   пока пользователь не введет правильный пароль или не нажмет Отмена. В случае отмены авторизации, выдать окно подтверждения с текстом:
//    “Вы уверены, что хотите отменить авторизацию?”. Если ответ утвердительный, тогда выдать сообщение “Вы отменили авторизацию”,
// 	если ответ отрицательный, тогда снова выдать запрос пароля
	
let password = "Пароль";
let reAsk;
let  enterPassword;
  for (let i = 0; ; i++) {
  	enterPassword = prompt("Введите пароль");
    if (enterPassword == null) {
    let reAsk = confirm("Вы уверены, что хотите отменить авторизацию?");
    if (reAsk == true) {
    alert("Вы отменили авторизацию");
	  } 
    if (reAsk == true) break;
    }
    if (enterPassword == null) continue;
    if (enterPassword !== password) continue;
    alert("Вы успешно авторизированы!");
    if (enterPassword == password) break;
}

// Задание №11
// 11.	Напишите цикл от 1 до 50, в котором будет выводиться поочередно числа от 1 до 50, но есть условия:

// - если число делится на 3 без остатка, то выводить не это число, а слово «Fizz»;
// - если число делится на 5 без остатка, то выводить не это число, а слово «Buzz»;
// - если число делится и на 3 и на 5 без остатка, то выводить не это число, а слово «FizzBuzz»; 

for (i = 1; i<=50; i++) {
	if ((i % 3 == 0) && (i % 5 == 0)) {
	console.log("FizzBuzz"); 
    }	else if (i % 3 == 0) {
    console.log("Fizz");
    }   else if (i % 5 == 0) {
    console.log("Buzz");
    }   else {
	 console.log(i);
    }
}



