// Botão "Não" muda de posição ao passar o mouse
document.getElementById('nao').addEventListener('mouseover', function() {
    const button = this;
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const newX = Math.random() * (containerRect.width - buttonRect.width);
    const newY = Math.random() * (containerRect.height - buttonRect.height);

    button.style.position = 'absolute';
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
});

// Botão "Sim" abre a planilha de filmes
document.getElementById('sim').addEventListener('click', function() {
    window.open('https://docs.google.com/spreadsheets/d/SUA_PLANILHA_AQUI/edit?usp=sharing', '_blank'); // Substitua pelo link da sua planilha
});
