//O for...in é usado para iterar sobre as propriedades de um objeto JavaScript. 

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
  };
  
  for (let chave in carro) {
    console.log(chave + ": " + carro[chave]);
  }
  
  //Neste exemplo, o loop for...in itera sobre as propriedades do objeto carro. A variável chave contém o nome de cada propriedade, e carro[chave] acessa o valor correspondente de cada propriedade.