function atualizarContador() {
    const agora = new Date();
    const dataEspecifica = new Date(2024, 4, 10, 13, 20, 0);

    const diferenca = dataEspecifica - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = formatarNumero(dias);
    document.getElementById('horas').textContent = formatarNumero(horas);
    document.getElementById('minutos').textContent = formatarNumero(minutos);
    document.getElementById('segundos').textContent = formatarNumero(segundos);
}

function formatarNumero(numero) {
    return numero.toString().padStart(2, '0');
}
const title = document.getElementById('title');
const originalTitle = 'SEMANA PAULO FREIRE';
const binaryTitle = '010110 10100 110010';

let currentTitle = binaryTitle;
let currentIndex = 0;

function generateRandomBinary() {
    const binary = Math.random() < 0.5 ? '0' : '1';
    return binary;
}

function animateTitle() {
    if (currentIndex < originalTitle.length) {
        currentTitle = currentTitle.split('');
        currentTitle[currentIndex] = originalTitle[currentIndex];
        currentTitle = currentTitle.join('');
        currentIndex++;
    }

    const binaryArray = currentTitle.split('');
    for (let i = 0; i < binaryArray.length; i++) {
        if (binaryArray[i] !== ' ' && binaryArray[i] !== originalTitle[i]) {
            binaryArray[i] = generateRandomBinary();
        }
    }
    const updatedTitle = binaryArray.join('');

    title.innerText = updatedTitle;

    if (currentIndex < originalTitle.length) {
        setTimeout(animateTitle, 100);
    } else if (currentIndex === originalTitle.length) {
        title.classList.add('neon');
    }
}

animateTitle();

setInterval(atualizarContador, 1000);
atualizarContador();
