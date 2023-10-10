// Função para adicionar um zero à esquerda se o valor for menor que 10
function zeroAEsquerda(valor) {
    return valor < 10 ? `0${valor}` : valor;
}

// Função para atualizar o background com base na hora
function atualizarBackground() {
    const body = document.body;
    const tempo = new Date();
    const hora = tempo.getHours();

    if (hora >= 5 && hora < 18) {
        // Se for entre 05:00 e 17:59, define o background para o amanhecer
        body.style.backgroundImage = 'url("img/amanhecerM.jpg")';
        
    } else {
        // Caso contrário, define o background para o anoitecer
        body.style.backgroundImage = 'url("img/anoitecerM.jpg")';
    }
}
// Chama a função para atualizar o background imediatamente
atualizarBackground();

// Define um intervalo para atualizar o background a cada minuto
setInterval(atualizarBackground, 60000); // Atualiza a cada minuto (60.000 milissegundos)


// Função para formatar a data e hora e exibir na página
function formataData() {
    const divCentral = document.getElementById('container');
    const tempo = new Date();

    const dia = zeroAEsquerda(tempo.getDate());
    const Mês = zeroAEsquerda(tempo.getMonth() + 1);
    const Ano = zeroAEsquerda(tempo.getFullYear());
    const Hora = zeroAEsquerda(tempo.getHours());
    const Min = zeroAEsquerda(tempo.getMinutes());
    const Seg = zeroAEsquerda(tempo.getSeconds());


    divCentral.innerHTML = `${Hora}:${Min}:${Seg} <br> ${dia}/${Mês}/${Ano}`;
}

// Chama a função para formatar a data e hora quando a página for carregada
window.onload = function() {
    formataData();
    // Define um intervalo para atualizar a hora a cada segundo
    setInterval(formataData, 1000);
};