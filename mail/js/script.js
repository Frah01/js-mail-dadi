const emails = ['nome.utente@gmail.com', 'utente.nome@gmail.com', 'francesco.utente@gmail.com']
console.log(emails)

let email= prompt('Inserisci la tua email')
console.log(email)

let flag = false;

for (let i=0; i<emails.length; i++){
    if(emails[i] == email){
        flag = true;
    }
}

if(flag){
    console.log('email presente nella lista')
}

else {
    console.log('email non presente nella lista')
}
