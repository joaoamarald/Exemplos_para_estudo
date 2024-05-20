//O comando if permite executar um bloco de código se uma condição especificada for verdadeira.
let temperatura = 25;

if (temperatura > 30) {
    console.log("Está muito quente!");
    //Neste exemplo, o código dentro do bloco console.log() só será executado se a temperatura for maior que 30.
}
//---------------------------------------------------------------------
//O comando if...else permite executar um bloco de código se uma condição especificada for verdadeira e outro bloco de código se a condição for falsa.

let hora = 14;

if (hora < 12) {
    console.log("Bom dia!");
} else {
    console.log("Boa tarde!");
}

//Neste exemplo, se a hora for menor que 12, será exibida a mensagem "Bom dia!". Se a hora estiver entre 12 e 18, será exibida a mensagem "Boa tarde!". Caso contrário, será exibida a mensagem "Boa noite!".
//---------------------------------------------------------------------
//Você também pode encadear várias condições usando o comando if...else if...else

let horaa = 20;

if (horaa < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}










