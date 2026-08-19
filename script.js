// Seleziona il bottone hamburger e il menu
const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('.nav-links');

// Quando l'utente clicca sul bottone hamburger...
menuToggle.addEventListener('click', function() {
    // ...aggiunge o toglie la classe "aperto" dal menu
    navLinks.classList.toggle('aperto');
});