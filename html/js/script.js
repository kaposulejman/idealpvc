// Funkcija za otvaranje i zatvaranje sidebar-a
function toggleNav() {
    const menuContainer = document.querySelector('.menu-container');
    const menuButton = document.getElementById('menuButton');

    if (menuContainer.style.left === '0px') {
        menuContainer.style.left = '-350px'; // Sakrij meni
        menuButton.style.marginLeft = '0'; // Dugme se vraća
        menuButton.textContent = '▶'; // Promijeni strelicu na desno
    } else {
        menuContainer.style.left = '0'; // Prikaži meni
        menuButton.style.marginLeft = '350px'; // Dugme se pomjera
        menuButton.textContent = '◀'; // Promijeni strelicu na lijevo
    }
}

// Funkcija za prikaz sekcija
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.style.left = '-350px'; // Sakrij meni nakon klika
    const menuButton = document.getElementById('menuButton');
    menuButton.style.marginLeft = '0'; // Dugme se vraća
    menuButton.textContent = '▶'; // Promijeni strelicu na desno
}

// Funkcija za promjenu jezika
const languageElements = document.querySelectorAll('[data-bs]');
const flags = document.querySelectorAll('.flag');

function changeLanguage(language) {
    languageElements.forEach(element => {
        const newText = element.getAttribute(`data-${language}`);
        if (newText) {
            element.textContent = newText;
        }
    });
}

// Event listeneri za zastave
flags.forEach(flag => {
    flag.addEventListener('click', () => {
        const language = flag.id; // Jezik određuje ID zastave
        changeLanguage(language);
    });
});
