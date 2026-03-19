document.addEventListener('DOMContentLoaded', () => {

    const track = document.querySelector('.carrosel-posic');
    const proxButton = document.querySelector('.right');
    const antButton = document.querySelector('.left');

    let currentIndex = 0;

    //Numero de elementos dentro do carrossel
    const totalSlides = track.querySelectorAll('.carrosel-slide').length;

    const calcularMaximoIndices = () => {
        const slide = track.querySelector('.carrosel-slide');
        const slideWidth = slide.getBoundingClientRect().width;

        const style = window.getComputedStyle(slide);
        const marginRight = parseFloat(style.marginRight);

        const qtdMovimentos = slideWidth + marginRight;

        const tamanhoConteiner = document.querySelector('.carrosel-posic-conteiner').getBoundingClientRect().width;
        // aqui ele verifica a quantidade de itens exibir de acordo com o tamanho do container
        const qtdExibir = Math.floor((tamanhoConteiner + marginRight) / qtdMovimentos) || 1;

        const maxIndex = Math.max(0, totalSlides - qtdExibir);

        return { qtdMovimentos, maxIndex };
    };

    let metrica = calcularMaximoIndices();


    const updateCarrossel = () => { //vamos atualizar as metricas agora
        metrica = calcularMaximoIndices();

        if (currentIndex > metrica.maxIndex) {
            currentIndex = metrica.maxIndex;
        }

        const transformValue = currentIndex * metrica.qtdMovimentos;
        track.style.transform = `translateX(-${transformValue}px)`;
    };

    // agora programamos os eventos de clique para os botões
    proxButton.addEventListener('click', () => {
        metrica = calcularMaximoIndices();

        if (currentIndex < metrica.maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarrossel();
    });

    antButton.addEventListener('click', () => {
        metrica = calcularMaximoIndices();

        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = metrica.maxIndex;
        }
        updateCarrossel();
    });

    window.addEventListener('resize', () => {
        updateCarrossel();
    });
});