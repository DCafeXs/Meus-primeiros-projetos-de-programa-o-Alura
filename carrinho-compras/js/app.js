let carrinho=[];

function adicionar(){
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;

    if (!quantidade || quantidade <= 0){
        alert("Digite uma quantidade valida.");
        return;
    }
    let nomeProduto = produtoSelect.split(" - ")[0];
    let valorUnitario = parseFloat(produtoSelect.split("R$")[1]);
    let precoTotal = quantidade * valorUnitario;

    carrinho.push({
      nome: nomeProduto,
      quantidade: quantidade,
      preco: precoTotal
});
}