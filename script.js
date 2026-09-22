const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('.nav-links');


menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('aperto');
});

const form = document.querySelector('.contatti-form form');
const conferma = document.querySelector('.form-conferma');


form.addEventListener('submit', function(evento) {
    evento.preventDefault(); 

    
    conferma.textContent = '✓ Grazie! Ti contatteremo presto.';
    conferma.style.display = 'block';

    
    form.reset();
});

gsap.from('.hero-tag, .hero h1, .hero-text, .hero-buttons', {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power2.out'
});

gsap.registerPlugin(ScrollTrigger);


gsap.from('.timeline-item', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.timeline',   
        start: 'top 80%'        
    }
});


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

document.querySelectorAll('.numero[data-target]').forEach(function(elemento) {
    const valoreFinale = elemento.getAttribute('data-target');
    const suffisso = elemento.textContent.includes('+') ? '+' : '';
    const contatore = { valore: 0 };

    gsap.to(contatore, {
        valore: valoreFinale,
        duration: 1.5,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: '.numeri-grid',
            start: 'top 80%'
        },
        onUpdate: function() {
            elemento.textContent = Math.floor(contatore.valore) + suffisso;
        }
    });
});