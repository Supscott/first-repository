/*
Пользователь хочет приобрести игру в магазине
Он может это сделать отлько если:
- Его баланс больше 1000 (balance) или число бонусов больше 100 (bonusBalance)
- Он не забанен (¿sBanned)
- Игра не кулена (isExist)
- Игра в продаже (isSelling)
Напишите условие для покупки и выведите в консоль результат
*/

const balance = 1000;
const bonusBalance = 100;
const isBanned = false;
const isExist = true;
const isSelling = true; 

let user = 'Dragon777';

const userBalance = 1000;
const userBonusBalance = 50;

const canBuy = (userBalance >= balance || userBonusBalance >= bonusBalance) && !isBanned && isExist && isSelling;

if (canBuy) {
console.log(`Пользователь ${user} может купить игру`)
} else console.log(`Пользователь ${user} не может купить игру`)

