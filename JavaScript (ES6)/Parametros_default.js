function contarHistoria (persongem, atividade = 'correr', nome_local) {
    console.log(`Uma vez, o ${persongem}, queria muito ${atividade} no ${nome_local} `)
}

contarHistoria('joao', 'nadar', 'clube') // Caso o valor de "atividade" fossse underfined, seria colocado o valor de 'correr'.