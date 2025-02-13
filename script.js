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
    window.open('https://docs.google.com/spreadsheets/d/1-7mNwtbKc1akStiG8iJ5kEt2ow5Au7pe3drdwxmO2bM/edit', '_blank'); // Substitua pelo link da sua planilha
});
