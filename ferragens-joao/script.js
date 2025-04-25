//martelo, prego, alicate, parafuso
//19,90 10,00 23,00
const precos ={
    "parafuso" :19,90,
    "martelo" :23.70,
    "chave de fenda" :10.99,
    "serrote" :30.00,
}
const estoque ={    // DICIONÁRIO 
    "parafuso": 100,
    "martelo": 4,
    "chave de fenda": 6,
    "serrote": 1000,
};
//ACESSAR GUARDAR A QUANTIDADE
//CALCULAR O PREÇO TOTAL
function calcularpreco(){

    let qtd = document.getElementById("quantidade").value; //PEGA A QUANTIDADE ATUAL DIGITADA
    let escolha = document.getElementById("produto").value; //PEGA O NOME DO PRODUTO SELECIONADO
    let valortotal = qtd * precos[escolha]} //CALCULAR O VALOR TOTAL MULTIPLICANDO O PREÇO DO PRODUTO PELA QUANTIDADE
    //DECISÃO
    //PARA VER O QUE TEM NO ESTOQUE
    if(estoque[escolha] - qtd >= 0){
        document.getElementById("resultado").innerHTML = valortotal.toFixed(2); //exibir o resultado
        estoque[escolha] -= qtd; //CALCULO DO ESTOQUE PRA QUANDO FOR TIRANDO
        window.alert("compra realizada com sucesso" + "valor total:" + valortotal.toFixed(2))

//APARECE A MENSAGEM NA TELA SE NÃO TIVER MAIS NADA NO ESTOQUE 
}else{
    window.alert("ESTOQUE INDISPONIVEL")    
}
console.log(estoque[escolha])







