function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let botao = jogo.querySelector(".dashboard__item__button");
    let img = jogo.querySelector(".dashboard__item__img");

    if (botao.classList.contains("dashboard__item__button--return")) {
        let check = prompt("Você quer mesmo devolver o jogo? (Digite 'sim')");
        
        if (check && check.toLowerCase() === "sim") {
            botao.textContent = "Alugar";
            img.classList.toggle("dashboard__item__img--rented");
            botao.classList.toggle("dashboard__item__button--return");
        }
    } else {
        let check2 = prompt("Você quer mesmo alugar o jogo? (Digite 'sim')");
    
        if (check2 && check2.toLowerCase() === "sim") {
            botao.textContent = "Devolver";
            img.classList.toggle("dashboard__item__img--rented");
            botao.classList.toggle("dashboard__item__button--return");
        }
    }
}