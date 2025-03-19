// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if(!nombreAmigo){
        alert ("Por favor, inserte un nombre");
        return;        
    }
    amigo.push(nombreAmigo);
    inputAmigo.value ="";
    inputAmigo.focus();
    listaAmigo();
 }

 function listaAmigo() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i=0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item)
    }
 }

 function sortearAmigo(){
    if(amigo.length < 2){
        alert("Agrega mas de dos personar para iniciar el sorteo");
        return;
    }
    let sorteo = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo elegido es: ${sorteo}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
 }
 function reiniciar() {
    
    listaAmigos = [];
    asignarElementoHTML('Lista reiniciada. Agrega nuevos amigos.');
    document.getElementById('listaAmigos').innerHTML = ""
    document.getElementById('resultado').textContent = ""; 
}



