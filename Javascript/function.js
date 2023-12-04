document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const lightModeBtn = document.getElementById('light-mode');
    const darkModeBtn = document.getElementById('dark-mode');

    lightModeBtn.addEventListener('click', () => {
        body.classList.remove('dark-mode');
    });

    darkModeBtn.addEventListener('click', () => {
        body.classList.add('dark-mode');
    });
});
