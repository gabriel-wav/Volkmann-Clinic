// Função moderna para injeção de componentes garantindo compatibilidade e acessibilidade
document.addEventListener("DOMContentLoaded", () => {
    fetch('components/footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Falha ao carregar o footer');
            return response.text();
        })
        .then(data => {
            const footerElement = document.getElementById('footer');
            if (footerElement) {
                footerElement.innerHTML = data;
                // Transforma a div id="footer" no comportamento correto de display flex
                footerElement.style.display = 'contents';
            }
        })
        .catch(error => console.error('Erro no carregamento do Footer:', error));
});