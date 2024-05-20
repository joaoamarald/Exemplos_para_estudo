// Paradigma de Orientação a Objetos 

/* Entidade, identidade, caracteristicas, Ações:
Entidade: Carro
Identidade: x = new Carro()
Caracteristicas: Marca, modelo, cor qtdePortas
Ações: Ligar, acelerar, freiar, desligar*/

//modelo da objeto
class ContaBancaria {
    constructor(){
        this.agencia = 1075
        this.numeroConta = 8351125
        this.saldo = 50
        this.limite = 450
    }

    depositar(valorDeposito) {
        this.saldo += valorDeposito
    }
    sacar(valorSaque) {
        this.saldo -= valorSaque
    }
    consultarSaldo(){
        return this.saldo
    }
}

let x = new ContaBancaria()
let y = new ContaBancaria()

console.log(x.consultarSaldo())
x.depositar(30)
console.log(x.consultarSaldo())
x.sacar(25)
console.log(x.consultarSaldo())
