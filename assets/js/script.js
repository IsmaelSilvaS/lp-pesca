// Adicionando interatividade aos botões
document.querySelectorAll('.btn-custom').forEach(button => {
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