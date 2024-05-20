do {
    // código a ser repetido pelo menos uma vez
} while (condição);

// O do...while é uma estrutura de repetição em JavaScript que executa um bloco de código uma vez e, em seguida, repete a execução enquanto uma condição especificada for verdadeira.

let contador = 0;

do {
    console.log("O contador é: " + contador);
    contador++; // Incrementa o contador em 1 a cada iteração
} while (contador < 5);

/*
Neste exemplo:

Inicializamos uma variável contador com o valor 0.
Em seguida, temos o bloco de código dentro do do, que é executado pelo menos uma vez, independentemente da condição.
Dentro do bloco do, estamos imprimindo o valor atual do contador no console.
Depois, incrementamos o contador em 1 a cada iteração usando o operador de incremento ++.
Após cada iteração, a expressão de condição contador < 5 é avaliada. Enquanto essa condição for verdadeira, o bloco de código dentro do do será executado novamente.
O do...while continuará executando até que a condição contador < 5 se torne falsa. Assim que o contador atingir ou ultrapassar o valor 5, o loop será encerrado.

No exemplo acima, o loop do...while imprimirá os números de 0 a 4, já que o bloco de código é executado pelo menos uma vez e, em seguida, repetido enquanto o contador for menor que 5.
*/
