const emails = ['nome.utente@gmail.com', 'utente.nome@gmail.com', 'francesco.utente@gmail.com']
console.log(emails)

const button= document.getElementById('get-email')
let presenza = document.getElementById('presenza')


button.addEventListener('click', function(){
    
    let flag = false;
    let email= document.getElementById('input-email').value
    console.log(email)

    for (let i=0; i<emails.length; i++){
        if(emails[i] == email){
            flag = true;
        }
    }
    
    if(flag){
        presenza.innerHTML =('Email presente nella lista')
    }
    
    else {
        presenza.innerHTML = ('Email non presente nella lista')
    }
})
