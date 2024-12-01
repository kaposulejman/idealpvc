// Funkcija za promjenu jezika
async function changeLanguage(lang) {
    try {
        // Učitaj JSON fajl za odabrani jezik
        const response = await fetch(`lang/${lang}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const translations = await response.json();

        // Ažuriraj sadržaj stranice
        document.getElementById('title').textContent = translations.title;
        document.getElementById('description').textContent = translations.description;

        // Spremi jezik u localStorage
        localStorage.setItem('language', lang);
    } catch (error) {
        console.error('Error loading language file:', error);
    }
}

// Automatski postavi zadnji odabrani jezik
const savedLang = localStorage.getItem('language') || 'en';
changeLanguage(savedLang);