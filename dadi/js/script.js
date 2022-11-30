let min = 1
let max = 6
let x = Math.floor(Math.random() * (max - min + 1) + min)
console.log(x)
let y = Math.floor(Math.random() * (max - min + 1) + min)
console.log(y)

    if(x > y){
        console.log('Il primo giocatore ha vinto')
    }

    else if (x == y){
        console.log('Pareggio')
    }

    else {
        console.log ('Il secondo giocatore ha vinto')
    }

