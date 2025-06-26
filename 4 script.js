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


//carrossel automático sem botões ou interações

const swiper = new Swiper('.swiper', {//inicializa o carrossel na classe" .swiper" usando a biblioteca swiper
    loop: true,// faz ocarrossel repetir infinitamente (loop contínuo)
    autoplay: {//configura a reprodução automática
        delay: 1500, //tempo de espera entre os slides (1500ms = 2 segundos)
        disableOnInterection: false,//continua o autoplay msm se o usuário interagir (ex: tentar arrastar)
        },

effect: 'fade',//define o tipo de transição entre as imagens (fade = dissolver)
fadeEffect: { crossFade: true },//faz com que o slide anterior desapareça suavemente enquento o novo aparece.

allowTouchMove: true, //impede que o usuário use o toque (arraste) para mudar o slide.
});




window.revelar = ScrollReveal({reset:true});

revelar.reveal('.div-box-1', { //estou chamando a classe a qual eu quero atribuir o efeito do scrollReveal.
    duration: 2000,
    distance: '90px',
    origin: 'right'
    
});

revelar.reveal('.h3-h4', {
    duration: 2000,
    distance: '120px',
    origin: 'right'
});
