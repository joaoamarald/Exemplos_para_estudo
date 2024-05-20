class sofa {
    
    constructor(cor, qtd_lugar, inclinavel) {
        this.cor = cor
        this.qtd_lugar = qtd_lugar
        this.inclinavel = inclinavel
    }

    testeInclinavel() {
        if (this.qtd_lugar <= 4) {
            this.inclinavel = false
        } else {
            this.inclinavel = true
        }
    }
}

let sofas = []
sofas.push(new sofa('red', 5, false))
console.log(sofas)