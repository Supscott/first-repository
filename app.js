function toPower (num, power) {
    const res= num ** power;
    return res;
}

console.log (toPower (2, 3));

const toPowerArrow = (num2, power2) => num2 ** power2;

console.log (toPowerArrow (2, 3));