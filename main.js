const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const dias = document.getElementById('dias');
    const horas = document.getElementById('horas');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor((tempo / (60 * 60 * 24)));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos)
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);

    if(qtdSegundos === 0 && qtdMinutos === 0 && qtdDias === 0 && qtdHoras === 0){
        var duration = 2.5 * 1000;
        var end = Date.now() + duration;

        (function frame() {
        
         confetti({
            particleCount: 7,
            angle: 60,
            spread: 75,
            origin: { x: 0 }
});
  
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 75,
            origin: { x: 1 }
});

  
        if (Date.now() < end) {
            requestAnimationFrame(frame);
    }
   }());
    clearInterval(countdownTimer);
    setInterval(() => {
        showForm()
        }, 2000);
    }  
} 

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if (tempo === 0){
            pararContagem();      
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);
}

const tempoRestante = () => {
    const dataEvento = new Date ('2022-12-10 00:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());











/*
const jsConfetti = new JSConfetti();

function confettiFY(){
    jsConfetti.addConfetti({
        confettiColors: [
            '#000080', '#00008B', '#0000CD', '#00BFFF', '#87CEFA', '#87CEEB',
        ],
    });
}
document.querySelector('.button').addEventListener('click', confettiFY)
*/

