//As funções anônimas são aquelas que não têm um nome identificador e são geralmente definidas diretamente onde são necessárias, sem a necessidade de atribuí-las a uma variável.

let saudacao = function(nome) {
    return `Olá, ${nome}! Bem-vindo(a) à nossa aplicação.`;
};

// Chamada da função anônima
console.log(saudacao('João')); // Saída: Olá, João! Bem-vindo(a) à nossa aplicação.
 
/*Neste exemplo:

Definimos uma função anônima e a atribuímos à variável saudacao.
A função recebe um parâmetro nome e retorna uma mensagem de saudação personalizada.
Em seguida, chamamos a função saudacao passando 'João' como argumento e imprimimos o resultado no console.*/

//---------------------------------------------------------------------
//Chamando a função através da tecnica "WRAPPER"
//Você pode chamar essa função anônima usando uma técnica chamada "wrapper" (ou envolvimento). Nesse caso, você pode envolver a definição da função anônima em parênteses adicionais () e, em seguida, adicionar () ao final para invocá-la imediatamente.

(function(nome) {
    let saudacao = `Olá, ${nome}! Bem-vindo(a) à nossa aplicação.`;
    console.log(saudacao);
})('João');

//Neste exemplo, a função anônima é definida dentro de parênteses adicionais (), transformando-a em uma expressão e permitindo que ela seja imediatamente invocada. O parâmetro 'João' é passado para a função durante sua invocação. 