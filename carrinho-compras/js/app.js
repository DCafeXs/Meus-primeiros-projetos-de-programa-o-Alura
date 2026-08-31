let carrinho=[];

function adicionar(){
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;

    if (!quantidade || quantidade <= 0){
        alert("Digite uma quantidade valida.");
        return;
    }
    
    // Ajustado de produtoSelect para produto
    let nomeProduto = produto.split(" - ")[0];
    let valorUnitario = parseFloat(produto.split("R$")[1]);
    let precoTotal = quantidade * valorUnitario;

    carrinho.push({
      nome: nomeProduto,
      quantidade: quantidade,
      preco: precoTotal
    });

    let listaCarrinho = document.getElementById("lista-produtos");
    listaCarrinho.innerHTML = ""; 
    let valorTotalGeral = 0;

    carrinho.forEach(item => {
        valorTotalGeral += item.preco;
        listaCarrinho.innerHTML += `
            <section class="carrinho__produtos__produto">
                <span class="texto-azul">${item.quantidade}x</span> ${item.nome} <span class="texto-azul">R$${item.preco}</span>
            </section>
        `;
    });

    document.getElementById("valor-total").textContent = `R$ ${valorTotalGeral}`;
}