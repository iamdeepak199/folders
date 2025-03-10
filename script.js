function showSurprise() {
    // Show the surprise message
    document.querySelector('.hidden-surprise').style.display = 'block';

    // Play background music
    document.getElementById('bg-music').play();

    // Start confetti
    startConfetti();
}

// 🎉 Confetti Effect
const confettiCanvas = document.getElementById('confetti');
const ctx = confettiCanvas.getContext('2d');
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

const confettiParticles = [];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        confettiParticles.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height,
            r: Math.random() * 6 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            speed: Math.random() * 3 + 2,
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiParticles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.y += p.speed;

        if (p.y > confettiCanvas.height) {
            p.y = 0;
            p.x = Math.random() * confettiCanvas.width;
        }
    });
}

function startConfetti() {
    createConfetti();
    setInterval(drawConfetti, 30);
}
