function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
    let doNumero = parseInt(document.getElementById("de").value);
    let ateNumero = parseInt(document.getElementById("ate").value);

    if (isNaN(quantidadeDeNumeros) || isNaN(doNumero) || isNaN(ateNumero)) {
    alert('Por favor, preencha todos os campos!');
    return;
}
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidadeDeNumeros; i++) {
        numero = obterNumero(doNumero, ateNumero);

        while (sorteados.includes(numero)) {
            numero = obterNumero(doNumero, ateNumero);
        }

        sorteados.push(numero);
    }
    exibirResultado(sorteados);
    alterarBotao();
}
function obterNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function exibirResultado(numeroSorteado) {
    let resultado = document.getElementById("resultado");
    let texto = numeroSorteado.length > 1 ? "Números sorteados" : "Número sorteado";
    
    resultado.innerHTML = `<label class="texto__paragrafo">${texto}: ${numeroSorteado}</label>`;
}
function reiniciar() {
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    alterarBotao()
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
}
function alterarBotao() {
    let botao = document.getElementById("btn-reiniciar");
    
    if(botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    }else { 
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    } 
}