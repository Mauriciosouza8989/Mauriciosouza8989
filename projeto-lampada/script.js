let corpo = document.getElementById('corpo');
let lamp = document.getElementById('lamp');
let liga = document.getElementById('liga');
let desliga = document.getElementById('desliga');
let nova = document.getElementById('nova');
let estado = document.getElementById('estado');


function acenda() {
    lamp.src = "./images/acesa.jpg";
}

function apaga() {
    estado.innerText = 'Clique na lâmpada para quebrá-la!'
    lamp.src = "./images/apagada.jpg";
    nova.style.display = 'none';
    liga.style.display = 'block';
    desliga.style.display = 'block';
}

function quebrar() {
    estado.innerText = 'Ops, você quebrou a lâmpada. Adicione outra!';
    lamp.src = "./images/quebrada.jpg";
    nova.style.display = 'block';
    liga.style.display = 'none';
    desliga.style.display = 'none';

}

function novaLampada() {

    lamp.src = "./images/apagada.jpg";
    alert('Nova lampada será adicionada')



}