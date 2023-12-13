function moveButton() {
    var noButton = document.querySelector('.no-button');

    // Largura e altura da janela do navegador
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Novas posições aleatórias dentro das dimensões da janela
    var newLeft = Math.floor(Math.random() * (windowWidth - noButton.clientWidth));
    var newTop = Math.floor(Math.random() * (windowHeight - noButton.clientHeight));

    // Ajusta a posição do botão
    noButton.style.left = newLeft + 'px';
    noButton.style.top = newTop + 'px';
}

function showCongratulations() {
    var congratulationsMessage = document.getElementById('congratulations-message');

    // Exibe a mensagem de parabéns
    congratulationsMessage.style.display = 'block';
    congratulationsMessage.innerHTML = "Parabéns, você acaba de ganhar um vale felicidade eterna!!";
}
