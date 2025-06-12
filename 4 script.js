//criamaos um objeto chamado "optios" com as configurações para o efeito de gitação

const options = {

    strings: [
        "BEM VINDO A BE YOU ESTÉTICA",
        "O atendimento em clínicas de estética deve focar na empatia, escuta ativa e um ambiente acolhedor. A  comunicação clara e eficiente é essencial para explicar procedimentos e resultados, e a  personalização do atendimento é crucial para fidelizar clientes.", 
           
        " Um sistema de agendamento eficiente, um ambiente físico agradável e treinamento da equipe são também importantes par um bom atendimento."
        
    
    ],


    typeSpeed: 60, // velocidade da digitação (em milisegundos por caractere)
    backSpeed: 60, // velocidade em apagar os texto
    loop: true,    // faz com que as frases se repitam indefinidamente
    backDelay: 2500, // tempo de espera (em milisegundo) antes de começar a apagar uma frase
    smartBacKspace: true // otimiza o apagamento : apaga apenas as caratecteres diferente da proxima frase

}


new Typed("#bem-vindo", options);