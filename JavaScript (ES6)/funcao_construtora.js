let Carro = function(){

    this.cor = 'amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180

    this.acelerar = function() {
        //this.valocidadeAtual += 10

        let velocidade = this.getVelocidadeAtual() + 10
        this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual 
    }

    this.setVelocidadeAtual = function(velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }
}

let carro = new Carro() 

console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`)
