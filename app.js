const answer = prompt('КАПЧА! \nСколько будет 7 + или - 15?')

switch (answer) {
    case '8':
    case '22':
    case 'я не робот':
    case 'Я не робот':
        console.log('Успех!');
        break;
    default:
        console.log('Прочь робот!');
}


