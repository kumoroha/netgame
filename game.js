document.addEventListener("DOMContentLoaded", () => {
    const gameArea = document.getElementById('game');
    const scoreDisplay = document.getElementById('score');
    const gameWidth = gameArea.clientWidth;
    const gameHeight = gameArea.clientHeight;
    let score = 0;

    function updateScore() {
        scoreDisplay.textContent = `Score: ${score}`;
    }

    function createEnemy() {
        const enemy = document.createElement('div');
        enemy.classList.add('enemy');
        enemy.style.left = `${Math.random() * (gameWidth - 50)}px`;
        enemy.style.top = `${Math.random() * (gameHeight - 50)}px`;
        enemy.addEventListener('click', () => {
            gameArea.removeChild(enemy);
            score++;
            updateScore();
        });
        gameArea.appendChild(enemy);
    }

    function gameLoop() {
        createEnemy();
        setTimeout(gameLoop, 1000);
    }

    gameLoop();
});
