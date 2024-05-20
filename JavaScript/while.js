//O while é uma estrutura de repetição em JavaScript que executa um bloco de código enquanto uma condição especificada for verdadeira.

while (condição) {
    // código a ser repetido enquanto a condição for verdadeira
}

//---------------------------------------------------------------------

let contador = 0;

while (contador < 5) {
    console.log("O contador é: " + contador);
    contador++; // Incrementa o contador em 1 a cada iteração
}

/* 
Neste exemplo:

Inicializamos uma variável contador com o valor 0.
Em seguida, temos o laço while. A condição contador < 5 é avaliada antes de cada iteração. Enquanto essa condição for verdadeira, o bloco de código dentro do while será executado.
Dentro do bloco while, estamos imprimindo o valor atual do contador no console.
Depois, incrementamos o contador em 1 a cada iteração usando o operador de incremento ++.
O while continuará executando até que a condição contador < 5 se torne falsa. Assim que o contador atingir ou ultrapassar o valor 5, o loop será encerrado.

No exemplo acima, o loop while imprimirá os números de 0 a 4, já que o bloco de código será executado enquanto o contador for menor que 5. Assim que o contador atingir o valor 5, a condição se tornará falsa e o loop será encerrado.
*/