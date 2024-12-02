// script.js

// Récupérer les éléments
const menuToggle = document.getElementById('menuToggle');
const menuList = document.getElementById('menuList');
const searchBar = document.getElementById('searchBar');

// Fonction pour afficher/masquer le menu
menuToggle.addEventListener('click', () => {
  menuList.classList.toggle('show');
});

// Fonction de recherche basique
searchBar.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const menuItems = document.querySelectorAll('.menu-list li a');
  
  menuItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.parentElement.style.display = '';
    } else {
      item.parentElement.style.display = 'none';
    }
  });
});
