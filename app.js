/*
Дан список задач
const tasks = ['Задача 1'];
- Добавление задачи в конец
- Удаление задачи по названию
- Перенос
- Перенос задачи в начало списка по названию
- Всегда меняем исходный массив
*/

const tasks = ['Task 1'];

function Add(task) {
	tasks.push(task)
}

function Delete(task) {
	const index = tasks.indexOf(task);
	if (index !== -1) {
		tasks.splice(index, 1);
	}
}

function moveToStart(task) {
	const index = tasks.indexOf(task);
	if (index !== -1) {
		const oldTask = tasks.splice(index, 1)[0];
		tasks.unshift(oldTask);
	}
}

Add('Почистить зубы');
Add('Убарться');
Add('Купить хлеб');
console.log(tasks);

Delete('Почистить зубы');
console.log(tasks);

moveToStart('Купить хлеб')
console.log(tasks);