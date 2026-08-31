let carrinho=[];

function adicionar(){
    let produto = document.getElementById("produto");
    let quantidade = document.getElementById("quantidade").value;

    if (!quantidade || quantidade <= 0){
        alert("Digite uma quantidade valida.");
        return;
    }
    carrinho.push(produto);
    console.log(carrinho);

}