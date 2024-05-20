//O objeto BOM (Browser Object Model) no JavaScript fornece acesso a características específicas do navegador e do ambiente em que o código está sendo executado.

/*Manipulação da janela (window):
Você pode manipular propriedades da janela atual, como redimensionamento, abertura de novas janelas, fechamento de janelas, manipulação do histórico do navegador, etc. */

// Abrir uma nova janela
window.open("https://www.exemplo.com", "_blank");

// Redimensionar a janela atual
window.resizeTo(500, 500);

// Fechar a janela atual
window.close();

/*Manipulação do documento (document):
Você pode manipular propriedades e métodos relacionados ao documento HTML atual, como localização, redirecionamento, manipulação de eventos, etc.  */

// Redirecionar para outra página
window.location.href = "https://www.novapagina.com";

// Obter a largura da janela
var larguraDaJanela = window.innerWidth;

// Adicionar um evento de clique
document.getElementById("botao").addEventListener("click", function() {
    // Código a ser executado quando o botão for clicado
});

/*Manipulação de temporizadores (setTimeout, setInterval):
Você pode usar métodos para agendar a execução de código em um determinado momento ou em intervalos regulares.  */

// Executar uma função após um atraso de 2 segundos
setTimeout(function() {
    console.log("Esta mensagem será exibida após 2 segundos.");
}, 2000);

// Executar uma função a cada 5 segundos
setInterval(function() {
    console.log("Esta mensagem será exibida a cada 5 segundos.");
}, 5000);
