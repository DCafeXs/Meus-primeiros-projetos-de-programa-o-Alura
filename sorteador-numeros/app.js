function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
    let doNumero = parseInt(document.getElementById("de").value);
    let ateNumero = parseInt(document.getElementById("ate").value);

    let numero = obterNumero(doNumero , ateNumero)
    alert(`numero sorteado ${numero}`)

}
function obterNumero(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}