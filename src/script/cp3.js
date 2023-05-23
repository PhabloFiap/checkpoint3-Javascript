const form = document.getElementById ('form')
const primeiroNome = document.getElementById ('primeiroNome')
const segundoNome = document.getElementById ('segundoNome')
const email = document.getElementById ('email')
const senha = document.getElementById ('senha')
const confirmeSenha = document.getElementById ('confirmeSenha')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    checkInputs()
})
function checkInputs(){
    const primeiroNome = primeiroNome.value.trim()
    const segundoNome = segundoNome.value.trim()
    const email = email.value.trim()
    const senha = senha.value.trim()
    const confirmeSenha = confirmeSenha.value.trim()


    if(primeiroNome ===''){

        errorValidation(primeiroNome, 'Preencha este campo')
    }else{


    }
}

function errorValidation(input, message){
    const small = formControl.querySelector('small')

    small.innerText = message

    const formControl = input.parentElement;
    formControl.className="form-control error"

}