document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-container', '../components/header.html');
    loadComponent('footer-container', '../components/footer.html');
});

async function loadComponent(elementId, url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const html = await response.text();
            document.getElementById(elementId).innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
}