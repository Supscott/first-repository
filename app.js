const answer = prompt('КАПЧА! \nСколько будет 7 + или - 15?')

switch (answer) {
    case '8':
        console.log('Успех!');
        break;
    case '22':
        console.log('Успех!');
        break;
    case 'я не робот':
        console.log('Успех!');
        break;
    case 'Я не робот':
        console.log('Успех!');
        break;
    default:
        console.log('Прочь робот!');
}


