  // Função para controlar a visibilidade das seções
  function showSection(sectionId) {
    document.querySelectorAll('section').forEach(function(section) {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Adiciona event listeners para os links do menu
document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        var targetId = this.getAttribute('href').substring(1); // Remove o '#'
        showSection(targetId);
        event.preventDefault(); // Evita que a âncora faça a navegação padrão
    });
});

// Adiciona event listener para o link de "ÍNICIO"
document.querySelector('.back-home').addEventListener('click', function(event) {
    showSection('cinema');
    event.preventDefault();
});