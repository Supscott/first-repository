/*
Дан произвольный url -
'https://purpleschool.ru/course/javascript'
Нужно сделать функцию, которая выводит в консоль:
- Протокол | (https)
- Доменное имя (purpleschool.ru)
- Путь внутри сайта (/course/javascript)
*/

const url = 'https://purpleschool.ru/course/javascript'

function splitUrl () {
	const urlArray = url.split('/');
	const [https, _, name, path1, path2] = urlArray;
	console.log('Протокол:', https);
	console.log('Доменное имя:',name);
	console.log('Пусть внутри сайта:',path1, path2);
}

splitUrl();
console.log(`-------------------`);

function urlPars () {
	const [protocol, _, host, ...path] = url.split('/');
	console.log(`Протокол: ${protocol.split(':')[0]}`);
	console.log(`Доменное имя: ${host}`);
	console.log(`Пусть внутри сайта: /${path.join('/')}`)
}

urlPars();