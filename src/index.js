import Login from './classes/login';
const login = new Login();

const btnEntrar = document.getElementsByClassName('btn-entrar')[0];
const btnSair = document.getElementsByClassName('btn-sair')[0];

login.verificarStorage(); //chama o if pra verificar se está logado

btnEntrar.addEventListener('click', (event) => { //Essa é a forma de chamar o botão com o ES6+
    event.preventDefault();
    
    login.logar();
});

btnSair.addEventListener('click', (event) => {
    event.preventDefault();
    
    login.logout();
});