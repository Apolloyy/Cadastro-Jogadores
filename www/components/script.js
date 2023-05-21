var jogador;
var time;
var listar;
var clear;

var array_jogtime = [];


function cadastrar(){
    jogador = document.getElementById('jogador').value;
    time = document.getElementById('time').value;

    array_jogtime[0] = jogador + ' - ' + time;
    //array_jogtime.unshift(jogador + " - " + time);

    localStorage.setItem(jogador, time);

    alert(localStorage.getItem(jogador));
    

}

function Listar(){

    var divinner = document.getElementById('inner');
 
    listar = document.createElement('li');

    if(array_jogtime[0] != null) {
        listar.innerHTML = array_jogtime[0];    
        divinner.appendChild(listar);
        array_jogtime[0] = null;
    }

    else {
        alert("Já dentro da lista. Cadastre outro jogador!")
    }
    


    // listar = document.getElementById('btnListar').value;
    // alert("A chave é: " + pesquisa + " e o valor é " + localStorage.getItem(pesquisa));
}

function Limpar() {
    var divclear = document.getElementById('inner').innerHTML = "";
    alert("A lista foi limpa!");

}var jogador;
var time;
var listar;
var clear;

var array_jogtime = [];


function cadastrar(){
    jogador = document.getElementById('jogador').value;
    time = document.getElementById('time').value;

    array_jogtime[0] = jogador + ' - ' + time;
    //array_jogtime.unshift(jogador + " - " + time);

    localStorage.setItem(jogador, time);

    alert(localStorage.getItem(jogador));
    

}

function Listar(){

    var divinner = document.getElementById('inner');
 
    listar = document.createElement('li');

    if(array_jogtime[0] != null) {
        listar.innerHTML = array_jogtime[0];    
        divinner.appendChild(listar);
        array_jogtime[0] = null;
    }

    else {
        alert("Já dentro da lista. Cadastre outro jogador!")
    }
    


    // listar = document.getElementById('btnListar').value;
    // alert("A chave é: " + pesquisa + " e o valor é " + localStorage.getItem(pesquisa));
}

function Limpar() {
    var divclear = document.getElementById('inner').innerHTML = "";
    alert("A lista foi limpa!");

}

