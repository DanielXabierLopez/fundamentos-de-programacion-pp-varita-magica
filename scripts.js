const colors = [
    '#264653',
    '#2A9D8F',
    '#E9C46A',
    '#F4A261',
    '#E76F51'
];

const gifs = [
    'assets/magic-1.gif',
    'assets/magic-2.gif',
    'assets/magic-3.gif',
    'assets/magic-4.gif',
    'assets/magic-5.gif',
    'assets/magic-6.gif'
];

// 4
const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

// 1 y 2

document.addEventListener('click', (event) => {

    event.preventDefault();

    const element = event.target;

    if (element.matches('img')) {
        element.src = getRandom(gifs);
    }

    if (element.matches('p')) {
        element.style.color = getRandom(colors);
        element.style.backgroundColor = getRandom(colors);
    }

    if (element.matches('article, section')) {
        element.style.backgroundColor = getRandom(colors);
    }
});

// 3

const elements = document.querySelectorAll(
    'img, p, article, section'
);

elements.forEach((element) => {

    element.addEventListener('mouseenter', () => {

        // guardo el estado original
        element.dataset.originalColor = element.style.color;
        element.dataset.originalBackground = element.style.backgroundColor;

        if (element.matches('img')) {
            element.dataset.originalSrc = element.src;
            element.src = 'assets/abracadabra.gif';
        }

        if (element.matches('p')) {
            element.style.color = getRandom(colors);
            element.style.backgroundColor = getRandom(colors);
        }

        if (element.matches('article, section')) {
            element.style.backgroundColor = getRandom(colors);
        }
    });

    element.addEventListener('mouseleave', () => {

        if (element.matches('img')) {
            element.src = element.dataset.originalSrc;
        }

        if (element.matches('p')) {
            element.style.color = element.dataset.originalColor;
            element.style.backgroundColor =
                element.dataset.originalBackground;
        }

        if (element.matches('article, section')) {
            element.style.backgroundColor =
                element.dataset.originalBackground;
        }
    });
});