//O for é uma estrutura de repetição em JavaScript que permite executar um bloco de código um número específico de vezes.

for (const item of coleção) {
    // código a ser executado para cada item da coleção
}

//---------------------------------------------------------------------

for (let i = 0; i < 5; i++) {
    console.log("O contador é: " + i);
}

/*
Neste exemplo:

Inicializamos uma variável i com o valor 0 na declaração do for.
A expressão de condição i < 5 é avaliada antes de cada iteração. Enquanto essa condição for verdadeira, o bloco de código dentro do for será executado.
Após cada iteração, a expressão de incremento i++ é executada, incrementando o valor de i em 1.
O for continuará executando até que a condição i < 5 se torne falsa. Quando i atingir o valor 5, o loop será encerrado.

No exemplo acima, o for imprimirá os números de 0 a 4, já que o bloco de código será executado enquanto i for menor que 5. Após a quinta iteração, quando i alcançar o valor 5, a condição se tornará falsa e o loop será encerrado.

 */
