function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let botao = jogo.querySelector(".dashboard__item__button");
    let img = jogo.querySelector(".dashboard__item__img");
    let nome = jogo.querySelector(".dashboard__item__name");

    alert (`jogo ${nome.textContent}`);

}