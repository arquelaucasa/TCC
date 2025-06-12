//criamaos um objeto chamado "optios" com as configurações para o efeito de gitação

const options = {

    strings: [
        "BEM VINDO A BE YOU ESTÉTICA",
        "estética a vançada e integrada",
        " comunicação clara e eficiente é essencial para explicar procedimentos e resultados",
        " personalização do atendimento é crucial para fidelizar clientes."
    ],


typeSpeed: 60, // velocidade da digitação (em milisegundos por caractere)
backSpeed: 40, // velocidade em apagar os texto
loop: true,    // faz com que as frases se repitam indefinidamente
backDelay: 1500, // tempo de espera (em milisegundo) antes de começar a apagar uma frase
smartBacKspace: true // otimiza o apagamento : apaga apenas as caratecteres diferente da proxima frase
 
}


new Typed("#bem-vindo", options);