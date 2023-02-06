let menu = prompt("Солнышко, введи название напитка")
let Starbucks = {
    coffee: {
        latte:'1',
        cappuccino:'2',
        rastvorimyi:'3',
        americano:'4',
        espresso:'5',
        icedcoffee:'6',
    },
    tea: {
        dark:"a",
        green:'b',
        cyelon:'c',
        whitetea:'d',
        yellowtea:'i',
        flavored:'f',
    }
}
if (menu in Starbucks.tea || menu in Starbucks.coffee){
    console.log("Ваш заказ принят :)")
}
else {
    console.log('not found.')
}



