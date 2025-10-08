// Adicionando interatividade aos botões
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        // Efeito de clique
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);

        // Aqui você pode adicionar a lógica para redirecionar
        const buttonText = this.textContent.trim();
        alert(`Você selecionou: ${buttonText}\nEm um site real, você seria redirecionado para a página correspondente.`);
    });
});

// Simulação de um vídeo sendo carregado
const videoPlaceholder = document.querySelector('.video-placeholder');
setTimeout(() => {
    videoPlaceholder.innerHTML = '<div style="font-size: 16px; opacity: 0.9; z-index: 3; position: relative;">Vídeo carregado - Clique para reproduzir</div>';
}, 1500);

// Adicionar efeito de clique no vídeo
videoPlaceholder.addEventListener('click', function () {
    this.innerHTML = '<div style="font-size: 16px; opacity: 0.9; z-index: 3; position: relative;">Reproduzindo vídeo...</div>';
    setTimeout(() => {
        this.innerHTML = '<div style="font-size: 16px; opacity: 0.9; z-index: 3; position: relative;">Vídeo finalizado - Clique para reproduzir novamente</div>';
    }, 3000);
});

// Criar elementos de fundo dinamicamente
const backgroundElements = document.querySelector('.background-elements');
for (let i = 0; i < 5; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.width = `${Math.random() * 100 + 50}px`;
    circle.style.height = circle.style.width;
    circle.style.top = `${Math.random() * 100}%`;
    circle.style.left = `${Math.random() * 100}%`;
    circle.style.animationDelay = `${Math.random() * 15}s`;
    circle.style.opacity = `${Math.random() * 0.1 + 0.05}`;
    backgroundElements.appendChild(circle);
}