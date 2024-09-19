function calc(number1, symbol, number2) {
    switch(symbol) {
        case '+' :
            return number1 + number2;
        case '-' :
            return number1 - number2;
        case '/' :
            if (number2 === 0){
                return 'Error 0';
            }
            return number1 / number2;
        case '*' :
            return number1 * number2;
        default :
            return 'Error'

    }
}

console.log(calc(1, '+', 1));
console.log(calc(1, '/', 0));
console.log(calc(1, 'a', 5));

const a = parseFloat(prompt('chislo'));
const b = prompt('symbol');
const c = parseFloat(prompt('chislo'));

console.log(calc(a, b, c));
