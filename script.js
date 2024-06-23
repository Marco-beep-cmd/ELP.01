const questions = [
    {
        question: "¿Cuál es el menú para ir a Guardar como?",
        image: "images/1.0.jpg",
        options: [
            { text: "Archivo", isCorrect: true },
            { text: "Inicio", isCorrect: false },
            { text: "Insertar", isCorrect: false }
        ]
    },
    {
        question: "¿Como se le llama tambien al pie de página?",
        image: "logo remove.png",
        options: [
            { text: "Foter", isCorrect: false },
            { text: "Footer", isCorrect: true },
            { text: "Pages", isCorrect: false }
        ]
    },
    {
        question: "¿Cómo se le llama al encabezado?",
        image: "logo remove.png",
        options: [
            { text: "Headher", isCorrect: false },
            { text: "Header", isCorrect: true },
            { text: "Encabezado", isCorrect: false }
        ]
    },
    {
        question: "¿Cuales son los apartados mas usados? Menciona 3.",
        image: "4.1.png",
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: true }
        ]
    },
    {
        question: "¿Qué ícono representa la opción Justificar?",
        image: "images/5.png",
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: true },
            { text: "C", isCorrect: false }
        ]
    },
    {
        question: "¿Qué ícono representa la opción Viñetas/Puntos?",
        image: "images/6.png",
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: true },
            { text: "C", isCorrect: false }
        ]
    },
    {
        question: "¿Qué ícono representa la opción Numeración?",
        image: "images/7.png",
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: true },
            { text: "C", isCorrect: false }
        ]
    },
    {
        question: "¿Qué ícono representa la opción Negrita?",
        image: "images/8.png",
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: true },
            { text: "C", isCorrect: false }
        ]
    },
    {
        question: "¿Qué ícono representa la opción Cursiva?",
        image: "images/9.png",
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: true }
        ]
    },
    {
        question: "¿Qué significa estos iconos?",
        image: "10.png",
        options: [
            { text: "SmarArt y Gráficos", isCorrect: true },
            { text: "Formas y Gràfico", isCorrect: false },
            { text: "Gráfico y Formas", isCorrect: false }
        ]
    },
    {
        question: "¿Qué ícono representa la opción para crear una segunda hoja?",
        image: "11.png",
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: true }
        ]
    },
    {
        question: "¿Qué ícono representa la opción para cambiar tipo de fuente?",
        image: "images/12.png",
        options: [
            { text: "A", isCorrect: true },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: false }
        ]
    },
    {
        question: "¿En que apartado y menú va el siguiente icono?",
        image: "13.png",
        options: [
            { text: "Insertar - Tabla", isCorrect: false },
            { text: "Tabla - Insertar", isCorrect: false },
            { text: "Tablas - Insertar", isCorrect: true },
        ]
    },
    {
        question: "¿Para que sirve esta herramienta?",
        image: "14.png",
        options: [
            { text: "Manipula el texto de manera ordenada", isCorrect: false },
            { text: "Manipula la fuente", isCorrect: false },
            { text: "Manipula el texto de manera flexible", isCorrect: true},
        ]
    },
    {
        question: "¿Para que sirve esta herramienta?",
        image: "15.png",
        options: [
            { text: "Crea decoraciones", isCorrect: false },
            { text: "Crea textos decorativos", isCorrect: true },
            { text: "Crea textos bonitos", isCorrect: false}
        ]
    },
    {
        question: "¿Como mas se le llama a la siguiente herramienta?",
        image: "16.png",
        options: [
            { text: "Footer", isCorrect: true },
            { text: "Header", isCorrect: false },
        ]
    },
    {
        question: "¿Como se les llama a estas herramientas?",
        image: "17.png",
        options: [
            { text: "Formas", isCorrect: false },
            { text: "Ilustraciones", isCorrect: true }
        ]
    },
    {
        question: "¿Para que sirve esta herramienta?",
        image: "18.png",
        options: [
            { text: "Iconos", isCorrect: true },
            { text: "Plantas", isCorrect: false },
            { text: "Animales", isCorrect: false}
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const introSlides = document.querySelectorAll('.intro-slide');
let currentSlideIndex = 0;

function showSlide(index) {
    introSlides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

document.querySelectorAll('.next-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        showSlide(index + 1);
    });
});

document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('intro-container').style.display = 'none'; // Oculta el contenedor de introducción
    quizContainer.style.display = 'block'; // Muestra el contenedor del quiz
    showQuestion(); // Mostrar la primera pregunta después de hacer clic en Comenzar
});

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <img src="${currentQuestion.image}" alt="Question Image">
        <div>
            ${currentQuestion.options.map((option, index) => `
                <button class="option-btn" data-is-correct="${option.isCorrect}">${option.text}</button>
            `).join('')}
        </div>
    `;

    document.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', () => {
            if (button.getAttribute('data-is-correct') === 'true') {
                button.style.backgroundColor = 'green';
                score += 1.1; // Cada pregunta vale 1.1 puntos
            } else {
                button.style.backgroundColor = 'red';
            }
            document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion();
                } else {
                    showResult();
                }
            }, 100); // Esperar 0.1 segundos antes de pasar a la siguiente pregunta
        });
    });
}

function showResult() {
    let finalScore = Math.round(score); // Redondear el puntaje al número entero más cercano
    let message = '';
    if (finalScore <= 10) {
        message = 'Hay que mejorar 😕. Repíte los ejercicios para que ganes tu caramelito.';
    } else if (finalScore <= 17) {
        message = 'Poco a poco pero hay que seguir para adelante 💪🏻. Repíte los ejercicios para que ganes tu caramelito.';
    } else if (finalScore <= 20) {
        message = '¡FELICITACIONES, TÓMA TU CARAMELITO 🍬!';
    }
    quizContainer.innerHTML = `
        <h2>¡Has completado todas las preguntas!</h2>
        <p>Tu puntaje es ${finalScore} de 20.</p>
        <p>${message}</p>
        ${finalScore >= 20 ? '<div id="caramelito">🍬</div>' : ''}
    `;

    if (finalScore >= 20) {
        const caramelito = document.getElementById('caramelito');
        caramelito.addEventListener('click', () => {
            createExplosion(caramelito);
            createCandyRain(); // Añadir la lluvia de caramelos
        });
    }
}

function createExplosion(caramelito) {
    const explosionContainer = document.createElement('div');
    explosionContainer.style.position = 'relative';
    explosionContainer.style.width = '100%';
    explosionContainer.style.height = '100%';
    quizContainer.appendChild(explosionContainer);

    for (let i = 0; i < 20; i++) {
        const candy = document.createElement('div');
        candy.innerHTML = '🍬';
        candy.style.position = 'absolute';
        candy.style.animation = `explode 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both`;
        candy.style.top = `${caramelito.offsetTop}px`;
        candy.style.left = `${caramelito.offsetLeft}px`;
        explosionContainer.appendChild(candy);
    }

    setTimeout(() => {
        explosionContainer.remove();
    }, 800);
}

function createCandyRain() {
    const candyRainContainer = document.createElement('div');
    candyRainContainer.style.position = 'fixed';
    candyRainContainer.style.top = '0';
    candyRainContainer.style.left = '0';
    candyRainContainer.style.width = '100%';
    candyRainContainer.style.height = '100%';
    candyRainContainer.style.pointerEvents = 'none';
    candyRainContainer.style.zIndex = '1000';
    document.body.appendChild(candyRainContainer);

    for (let i = 0; i < 50; i++) {
        const candy = document.createElement('div');
        candy.innerHTML = '🍬';
        candy.style.position = 'absolute';
        candy.style.top = `${Math.random() * -100}px`;
        candy.style.left = `${Math.random() * 100}%`;
        candy.style.fontSize = '24px';
        candy.style.animation = `fall ${2 + Math.random() * 3}s linear infinite`;
        candyRainContainer.appendChild(candy);
    }

    setTimeout(() => {
        candyRainContainer.remove();
    }, 5000);
}

showSlide(0);

const style = document.createElement('style');
style.innerHTML = `
    @keyframes explode {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
            opacity: 0;
        }
    }
    @keyframes fall {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(style);
