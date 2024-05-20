/*var: 
var foi a primeira palavra-chave introduzida para declarar variáveis em JavaScript.
A variável declarada com var tem escopo de função, o que significa que ela é visível em toda a função em que foi declarada, não importando o bloco de código dentro da função.
Também é "hoisted", o que significa que a declaração da variável é movida para o topo do escopo da função durante a fase de compilação, mas a inicialização permanece no lugar.*/

function example() {
    if (true) {
        var x = 10;
    }
    console.log(x); // x é visível aqui
}
example(); // Imprime 10
console.log(x); // x é visível aqui também, porque var tem escopo de função

/* let:
let:
let foi introduzido no ECMAScript 6 (ES6) para solucionar algumas limitações do var.
A variável declarada com let tem escopo de bloco, o que significa que ela é visível apenas dentro do bloco onde foi declarada.
let não é "hoisted", o que significa que a variável não é inicializada até que a linha em que foi declarada seja atingida durante a execução.*/ 

function example() {
    if (true) {
        let y = 20;
    }
    console.log(y); // y não é visível aqui
}
example(); // Erro: y não está definido

/* cost:
const também foi introduzido no ES6 e é usado para declarar variáveis ​​que não mudam de valor.
Assim como let, const tem escopo de bloco.
Variáveis declaradas com const devem ser inicializadas durante a declaração e não podem ser reatribuídas a um novo valor depois disso.*/

const PI = 3.14;
PI = 3.14159; // Erro: Assignment to constant variable
