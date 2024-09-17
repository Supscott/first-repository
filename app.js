let depositUSD = 12000
let perc = 7
let timeMonth = 24

const itog = depositUSD * (1 + (perc/100)/12) ** timeMonth

if (itog > 13500) {
    console.log('Покупка доступна')
} else     console.log('Покупка недоступна')


