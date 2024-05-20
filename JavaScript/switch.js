//O comando switch é usado para avaliar uma expressão e executar código correspondente a diferentes casos. 
let diaSemana = 3;
let mensagem;

switch (diaSemana) {
    case 1:
        mensagem = "Hoje é segunda-feira.";
        break;
    case 2:
        mensagem = "Hoje é terça-feira.";
        break;
    case 3:
        mensagem = "Hoje é quarta-feira.";
        break;
    case 4:
        mensagem = "Hoje é quinta-feira.";
        break;
    case 5:
        mensagem = "Hoje é sexta-feira.";
        break;
    case 6:
    case 7:
        mensagem = "É fim de semana!";
        break;
    default:
        mensagem = "Dia inválido.";
}

console.log(mensagem);

/*Neste exemplo:

A variável diaSemana contém um número que representa o dia da semana.
O comando switch avalia o valor de diaSemana.
Cada caso (case) especifica um valor possível de diaSemana e o código a ser executado se diaSemana for igual a esse valor.
O comando break é usado para sair do switch após o código de um caso ser executado. Isso impede que os casos subsequentes sejam executados.
O default especifica o código a ser executado se nenhum dos casos corresponder ao valor de diaSemana.
Neste caso, se diaSemana for 3, a mensagem "Hoje é quarta-feira." será exibida no console. Se diaSemana for 6 ou 7, a mensagem "É fim de semana!" será exibida. Se diaSemana não corresponder a nenhum dos casos, a mensagem "Dia inválido." será exibida. */
