function openLetter() {
    const envelope = document.querySelector('.envelope-front');
    const flap = document.querySelector('.envelope-flap');
    const letterContainer = document.getElementById('letterContainer');
    const resetBtn = document.getElementById('resetBtn');

    // Agregar clases de animación
    envelope.classList.add('open');
    flap.classList.add('open');

    // Mostrar la carta después de un pequeño delay
    setTimeout(() => {
        letterContainer.classList.add('show');
        resetBtn.classList.add('show');
    }, 300);
}

function resetLetter() {
    const envelope = document.querySelector('.envelope-front');
    const flap = document.querySelector('.envelope-flap');
    const letterContainer = document.getElementById('letterContainer');
    const resetBtn = document.getElementById('resetBtn');

    // Remover clases de animación
    letterContainer.classList.remove('show');
    resetBtn.classList.remove('show');

    setTimeout(() => {
        envelope.classList.remove('open');
        flap.classList.remove('open');
    }, 300);
}

// Agregar confeti al abrir la carta
function createConfetti() {
    const colors = ['#ff1493', '#667eea', '#764ba2', '#ff69b4', '#ffd700'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9';
        
        document.body.appendChild(confetti);

        const duration = Math.random() * 2 + 2;
        const xMove = (Math.random() - 0.5) * 200;

        confetti.animate([
            { transform: 'translateY(0) translateX(0)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) translateX(${xMove}px)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        setTimeout(() => confetti.remove(), duration * 1000);
    }
}

// Escuchar cuando se abre la carta para agregar confeti
const letterContainer = document.getElementById('letterContainer');
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (letterContainer.classList.contains('show')) {
            createConfetti();
        }
    });
});

observer.observe(letterContainer, { attributes: true, attributeFilter: ['class'] });