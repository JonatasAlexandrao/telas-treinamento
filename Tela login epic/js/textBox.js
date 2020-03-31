
const login = document.querySelector('.txtLogin')
const txtLogin = document.querySelector('.email')
const notifEmail = document.querySelector('.notifEmail')

const password = document.querySelector('password')
const txtPass = document.querySelector('.passw')
const notifPass = document.querySelector('.notifPass')

const button = document.querySelector('.button')

txtLogin.addEventListener('focus', verificaFocusEmail)
txtLogin.addEventListener('blur', verificaBlurEmail)

txtPass.addEventListener('focus', verificaFocusPass)
txtPass.addEventListener('blur', verificaBlurPass)




function verificaFocusEmail() {
    
    notifEmail.classList.add('none')
    txtLogin.style.backgroundColor = 'rgba(255, 255, 255, .25)'
    
    
}

function verificaBlurEmail(){

    notifEmail.classList.remove('none')
    txtLogin.style.backgroundColor = 'rgba(255, 255, 255, .1)'
    
    if(txtLogin.value == ""){
        txtLogin.style.backgroundColor = 'rgba(255, 150, 150, 0.3)'
        button.style.backgroundColor = '#201f20'
        button.style.color = 'rgba(255, 255, 255, .5)'
        
    }
    else{
        notifEmail.classList.add('none')
        if(txtPass.value != ""){
            button.style.backgroundColor = 'rgb(0, 132, 240)'
            button.style.color = 'rgb(255, 255, 255)'
        }
    }
}


function verificaFocusPass() {
    notifPass.classList.add('none')
    txtPass.style.backgroundColor = 'rgba(255, 255, 255, .25)'
    
    
}

function verificaBlurPass(){

    notifPass.classList.remove('none')
    txtPass.style.backgroundColor = 'rgba(255, 255, 255, .1)'
    
    if(txtPass.value == ""){
        txtPass.style.backgroundColor = 'rgba(255, 150, 150, 0.3)'
        button.style.backgroundColor = '#201f20'
        button.style.color = 'rgba(255, 255, 255, .5)'
    }
    else{
        notifPass.classList.add('none')
        if(txtLogin.value != ""){
            button.style.backgroundColor = 'rgb(0, 132, 240)'
            button.style.color = 'rgb(255, 255, 255)'
        }
        
    }
}

