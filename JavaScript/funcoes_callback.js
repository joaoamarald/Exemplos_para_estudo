
//As funções de callback são comuns em JavaScript e são frequentemente usadas em situações em que uma função precisa ser executada após a conclusão de outra operação assíncrona ou de longa duração.

function calcular(a, b, operacao, callback) {
    let resultado;
    if (operacao === 'soma') {
        resultado = a + b;
    } else if (operacao === 'subtracao') {
        resultado = a - b;
    }
    callback(resultado);
}

function imprimirResultado(resultado) {
    console.log('O resultado é: ' + resultado);
}

calcular(5, 3, 'soma', imprimirResultado); // Chamada da função com callback

/*Explicação:
Definição da Função Principal (calcular):
A função calcular recebe dois números (a e b), uma operação (como soma ou subtracao) e uma função de callback como parâmetros.
Dependendo da operação especificada, ela calcula o resultado e chama a função de callback passando o resultado como argumento.

Definição da Função de Callback (imprimirResultado):
A função imprimirResultado é a função de callback que recebe o resultado calculado como parâmetro.
Neste exemplo simples, ela apenas imprime o resultado no console.

Chamada da Função com Callback:
A função calcular é chamada passando 5, 3, 'soma' e imprimirResultado como argumentos.
Após o cálculo, a função de callback imprimirResultado é chamada com o resultado como argumento.*/
