//JavaScript fornece muitos métodos úteis para manipular arrays, como push(), pop(), shift(), unshift(), splice(), slice() e muitos outros.

let numeros = [1, 2, 3, 4, 5];

numeros.push(6); // Adiciona um elemento ao final do array
console.log(numeros); // Saída: [1, 2, 3, 4, 5, 6]

numeros.pop(); // Remove o último elemento do array
console.log(numeros); // Saída: [1, 2, 3, 4, 5]

numeros.splice(2, 1); // Remove 1 elemento a partir do índice 2
console.log(numeros); // Saída: [1, 2, 4, 5]

//Você pode usar loops, como for, for...of ou forEach(), para percorrer os elementos de um array:

let frutas = ["Maçã", "Banana", "Laranja"];

// Usando um loop for
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Usando um loop for...of
for (let fruta of frutas) {
    console.log(fruta);
}

// Usando o método forEach
frutas.forEach(function(fruta) {
    console.log(fruta);
});
