function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let botao = jogo.querySelector(".dashboard__item__button");
    let img = jogo.querySelector(".dashboard__item__img");
    let name = jogo.querySelector(".dashboard__item__name");

    if (botao.classList.contains("dashboard__item__button--return")){
        botao.textContent= "Alugar";
    }else {
        botao.textContent= "Devolver";
    }

    img.classList.toggle("dashboard__item__img--rented");
    botao.classList.toggle("dashboard__item__button--return");
}