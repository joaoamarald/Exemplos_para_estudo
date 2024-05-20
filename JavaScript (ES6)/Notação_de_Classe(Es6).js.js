class Produto {
    constructor(descricao, preco) {
        this.descricao = descricao
        this.preco = preco
    }

    verdescricao(){
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

let produto = new Produto ('Notebook', 2200)
produto.verdescricao()
