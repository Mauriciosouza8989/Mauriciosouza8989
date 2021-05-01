let botao = document.getElementById('botao')
let resultado = document.getElementById('resultado')
let numero = document.getElementById('numero');
let res = document.getElementById('res');



function adicao() {
    let n = Number(numero.value)

    resultado.innerHTML += 'Adição'
    resultado.innerHTML += '<br>'
    resultado.innerHTML += '<br>'
    for (let i = 0; i <= 10; i += 1) {
        resultado.style.textAlign = 'left'
        resultado.innerHTML += `${n} + ${i} = ${n + i}`
        resultado.innerHTML += '<br>'
        if (i >= 10) {
            resultado.innerHTML += '<br>'
            resultado.innerHTML += '<br>'
        }
    }

}

function subtracao() {
    let n = Number(numero.value)
    resultado.innerHTML += 'Subtração'
    resultado.innerHTML += '<br>'
    resultado.innerHTML += '<br>'


    for (let i = 0; i <= 10; i += 1) {
        resultado.style.textAlign = 'left'
        resultado.innerHTML += `${n} - ${i} = ${n - i}`
        resultado.innerHTML += '<br>'
        if (i >= 10) {
            resultado.innerHTML += '<br>'
            resultado.innerHTML += '<br>'
        }
    }

}

function multiplicacao() {
    let n = Number(numero.value)
    resultado.innerHTML += 'Multiplicação'
    resultado.innerHTML += '<br>'
    resultado.innerHTML += '<br>'


    for (let i = 0; i <= 10; i += 1) {
        resultado.style.textAlign = 'left'
        resultado.innerHTML += `${n} X ${i} = ${n * i}`
        resultado.innerHTML += '<br>'
        if (i >= 10) {
            resultado.innerHTML += '<br>'
            resultado.innerHTML += '<br>'
        }
    }

}

function divisao() {
    let n = Number(numero.value)
    resultado.innerHTML += 'Divisão'
    resultado.innerHTML += '<br>'
    resultado.innerHTML += '<br>'


    for (let i = 0; i <= 10; i += 1) {
        resultado.style.textAlign = 'left'
        let res = n / i
        resultado.innerHTML += `${n} / ${i} =  ${res.toFixed(1)}`
        resultado.innerHTML += '<br>'
        if (i >= 10) {
            resultado.innerHTML += '<br>'
            resultado.innerHTML += '<br>'
        }
    }

}