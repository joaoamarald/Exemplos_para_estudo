let nome = 'Jorge' //documente.getElementById('nome').value
let idade = 29
let sexo = 'Masculino'
let profissao = 'Programador'

//--------------------- (ES5)
let objeto = {
    //atributo do objeto: valor,
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function() {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
    }
}

console.log(objeto)
objeto.exibirResumo()

//--------------------- (ES6)
let objeto2 = {
    nome,
    idade,
    sexo,
    profissao,
    exibirResumo() {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
    }
}

console.log(objeto2)
objeto.exibirResumo()

