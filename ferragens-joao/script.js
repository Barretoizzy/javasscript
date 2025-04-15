//martelo, prego, alicate, parafuso
//19,90 10,00 23,00

const precos={    // DICIONÁRIO 
    "parafuso": 10.90,
    "martelo": 23.70,
    "chave de fenda": 10.99,
    "serrote": 30.00,
};
// ACESSAR GUARDAR A QUANTIDADE 
let qtd = document.getElementById("quantidade").Value;

console.log(qtd);


//CALCULAR O PREÇO TOTAL 
function calcularpreco(){
    let qtd = document.getElementById("quantidade").value; //pega quantidade atual digitada 
    let escolha = document.getElementById("produto").value; //pega o nome do produto selecionado 
    let valortxoal = qtd * precos [escolha] //calcular o valor multiplicado o preço do produto pela quantidade 
    document.getElementById("resultado").innerHTML = valortxoal    
}








