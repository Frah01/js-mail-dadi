let min = 1
let max = 6
let x = Math.floor(Math.random() * (max - min + 1) + min)
console.log(x)
let y = Math.floor(Math.random() * (max - min + 1) + min)
console.log(y)


const button= document.getElementById('genera')



button.addEventListener('click', function(){

    let primogiocatore = document.getElementById('primo-giocatore')
    let secondogiocatore = document.getElementById('secondo-giocatore')
    primogiocatore.innerHTML = ('Primo giocatore:'+" " + x)
    secondogiocatore.innerHTML = ('Secondo giocatore:'+" " + y)
    let risultato = document.getElementById('risultato')

    
        if(x > y){
            risultato.innerHTML=('Il primo giocatore ha vinto')
        }
    
        else if (x == y){
            risultato.innerHTML=('Pareggio')
        }
    
        else {
            risultato.innerHTML=('Il secondo giocatore ha vinto')
        }
    })

