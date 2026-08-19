// Seleziona il bottone hamburger e il menu
const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('.nav-links');

// Quando l'utente clicca sul bottone hamburger...
menuToggle.addEventListener('click', function() {
    // ...aggiunge o toglie la classe "aperto" dal menu
    navLinks.classList.toggle('aperto');
});
// Seleziona il form e il paragrafo di conferma
const form = document.querySelector('.contatti-form form');
const conferma = document.querySelector('.form-conferma');

// Quando l'utente invia il form...
form.addEventListener('submit', function(evento) {
    evento.preventDefault(); // impedisce il ricaricamento della pagina

    // Mostra il messaggio di conferma
    conferma.textContent = '✓ Grazie! Ti contatteremo presto.';
    conferma.style.display = 'block';

    // Svuota tutti i campi del form
    form.reset();
});