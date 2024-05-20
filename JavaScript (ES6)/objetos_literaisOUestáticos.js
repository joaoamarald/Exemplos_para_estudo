let produtoLiteral = {
    descrição: 'Geladeria',
    preco: 1800,
    descricao: 'Notebook',
    verDescricao: function(){
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

produtoLiteral.verDescricao()

/*
formulário -> servidor
    recupera dados e monta um objeto literal 
        obj literal -> JSON -> HTTp -> server -> Armazena 
*/