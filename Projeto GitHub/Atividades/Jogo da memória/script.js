function acao1() {
    adcionarAcao("Você clicou na Ação 1!");
}


function acao2() {
    adcionarAcao("Você clicou na Ação 2!");
}


function acao3() {
    adcionarAcao("Você clicou na Ação 3!");
}


function acao4() {
    adcionarAcao("Você clicou na Ação 4!");
}


function adcionarAcao(acao) {
    var resultado = document.getElementById("resultado");
    var paragrafo = document.createElement("p")
    paragrafo.textContent = acao;
    resultado.appendChild(paragrafo);
}


function zerarAcoes() {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}
