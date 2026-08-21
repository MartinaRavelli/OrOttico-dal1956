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
// Animazione di ingresso della hero al caricamento della pagina
gsap.from('.hero-tag, .hero h1, .hero-text, .hero-buttons', {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power2.out'
});
// Registra il plugin ScrollTrigger (va fatto una volta sola, prima di usarlo)
gsap.registerPlugin(ScrollTrigger);

// Le 4 tappe della timeline appaiono una dopo l'altra scorrendo
gsap.from('.timeline-item', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.timeline',   // l'animazione si attiva in base a questo elemento
        start: 'top 80%'        // parte quando la cima di .timeline raggiunge l'80% dell'altezza dello schermo
    }
});

// Le 6 card dei servizi appaiono una dopo l'altra scorrendo
gsap.from('.servizio-card', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.servizi-grid',
        start: 'top 80%'
    }
});