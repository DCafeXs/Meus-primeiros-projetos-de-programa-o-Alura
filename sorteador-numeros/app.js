function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
    let doNumero = parseInt(document.getElementById("de").value);
    let ateNumero = parseInt(document.getElementById("ate").value);
    
    let sorteados =[];

    for(let i = 0; i < quantidadeDeNumeros; i++) {
        let numero = obterNumero(doNumero , ateNumero);
        sorteados.push(numero);
        
    }

    exibirResultado(sorteados);
}
function obterNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exibirResultado(numeroSorteado){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML =  `<label class="texto__paragrafo">Números sorteados:os numeros sorteados foram ${numeroSorteado}</label>`
    
}  