// Função moderna para injeção de componentes garantindo compatibilidade e acessibilidade
document.addEventListener("DOMContentLoaded", () => {
    fetch('header.html')
        .then(response => {
            if (!response.ok) throw new Error('Falha ao carregar o header');
            return response.text();
        })
        .then(data => {
            const headerElement = document.getElementById('header');
            if (headerElement) {
                headerElement.innerHTML = data;
                // Transforma a div id="header" no comportamento correto de display flex
                headerElement.style.display = 'contents';
            }
        })
        .catch(error => console.error('Erro no carregamento do Header:', error));
});