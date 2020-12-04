export default class Login {
    constructor() {
        this.entrar1 = document.getElementsByClassName('entrar1')[0]; //Aqueles VAR saem e fica assim a declaração de variáveis
        this.entrar2 = document.getElementsByClassName('entrar2')[0];
        this.welcomePage = document.getElementsByClassName('welcome-page')[0]
        this.loginPage = document.getElementsByClassName('login-page')[0]
        this.email = document.getElementById ('email');
        this.senha = document.getElementById ('senha');

    }    

    logar() { // O event.preventDefault sai daqui e fica na chamada do botão no index.js

        if(this.email.value === 'admin' && this.senha.value ==='admin'){
            this.loginPage.classList.add('esconder');
            this.welcomePage.classList.remove('esconder');
            window.localStorage.setItem('email', this.email.value);
            window.localStorage.setItem('senha', this.senha.value);
        } else {
            alert("E-mail ou senha inválido");
        }
    }

    verificarStorage() {
        if (window.localStorage.getItem('email') === 'admin' && window.localStorage.getItem('senha') === 'admin') {
            this.welcomePage.classList.add('esconder'); 
            this.loginPage.classList.remove('esconder');
        }
    }

    logout(){
        window.localStorage.removeItem('email');
        window.localStorage.removeItem('senha');
        this.loginPage.classList.remove('esconder');
        this.welcomePage.classList.add('esconder');
        document.getElementById ('email').value = '';
        document.getElementById ('senha').value = '';
    }
} 
