function validarLogin() {
    let usuario = document.querySelector('#login').value
    let password = document.querySelector('#password').value

    if (usuario == '' || password == '') {
        window.alert('Todos os campos são obrigatórios!')
    }else{
        window.alert('Login efetuado com sucesso!')
    }
}