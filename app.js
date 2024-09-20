/*
	Пользователь:
	- Возраст
	- Наличие работы
	- Деньги
	Нужно проверить может ли он купить новый MacBook за 2000$?
	Он может брать не только свои деньги, но и взять кредит.
	Ему дадут 500$, только если ему больше 24-х лет и он
	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
	ином случае.
	Напишите функцию, которая принимает данные пользователя
	и товара и возвращает true или false;
*/

const money = 1500;
const age = 24;
const hasJob = true;
const macBookPrice = 2000;

function canBuy (userAge, userHasJob, userMoney, macPrice) {
	if (userAge >= 24 && userHasJob) {
		userMoney += 500;
	} else if (userAge >= 24 && !userHasJob) {
		userMoney += 100;
	}
	return userMoney >= macPrice; 
}

const result = canBuy(age, hasJob, money, macBookPrice)
console.log(result)