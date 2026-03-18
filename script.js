document.getElementById('ano').textContent = new Date().getFullYear();

const header = document.getElementById('header');
let lastScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.transform = 'translateY(0)';
    } else if (currentScroll > lastScroll) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

const btnMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const linksMobile = menuMobile.querySelectorAll('a');

btnMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('hidden');
});

linksMobile.forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.add('hidden');
    });
});

const btnModal = document.getElementById('btn-modal');
const modal = document.getElementById('modal');
const fecharModal = document.getElementById('fechar-modal');

btnModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

fecharModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealElements);
document.addEventListener('DOMContentLoaded', revealElements);