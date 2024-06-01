document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.toggle('dark-mode');
        });
        document.querySelectorAll('.goal').forEach(goal => {
            goal.classList.toggle('dark-mode');
        });
    });
});