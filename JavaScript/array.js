//Um array em JavaScript é uma estrutura de dados que armazena uma coleção de elementos, onde cada elemento pode ser de qualquer tipo de dados, como números, strings, objetos, ou até mesmo outros arrays. Os arrays em JavaScript são indexados, o que significa que cada elemento é acessado por meio de um índice numérico, começando do índice 0 para o primeiro elemento.

// Criando um array vazio
let arrayVazio = []; //ou
let arrayVazi = Array();


// Criando um array com elementos
let numeros = [1, 2, 3, 4, 5];
let frutas = ["Maçã", "Banana", "Laranja"];
let misto = [1, "dois", true, {nome: "João"}];

/*Acessando Elementos do Array:
Você pode acessar os elementos de um array usando seus índices:*/
let frut4s = ["Maçã", "Banana", "Laranja"];

console.log(frutas[0]); // Saída: "Maçã"
console.log(frutas[1]); // Saída: "Banana"
console.log(frutas[2]); // Saída: "Laranja"

/* 
Alterando Elementos do Array:
Você pode alterar elementos existentes em um array atribuindo um novo valor ao seu índice:
*/
let frutaas = ["Maçã", "Banana", "Laranja"];

frutas[1] = "Morango";
console.log(frutas); // Saída: ["Maçã", "Morango", "Laranja"]



