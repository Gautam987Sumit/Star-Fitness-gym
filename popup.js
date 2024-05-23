document.addEventListener('DOMContentLoaded', function () {
    const openOverlayButton = document.getElementById('open-overlay');
    const closePopupButton = document.getElementById('close-popup');
    const overlay = document.getElementById('overlay');
    const formContainer = document.getElementById('form-container');

    openOverlayButton.addEventListener('click', function () {
        overlay.style.display = 'block';
        formContainer.style.display = 'block';
    });

    closePopupButton.addEventListener('click', function () {
        overlay.style.display = 'none';
        formContainer.style.display = 'none';
    });

    overlay.addEventListener('click', function () {
        overlay.style.display = 'none';
        formContainer.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const openMenuButton = document.querySelector('.openmenu');
    const closeMenuButton = document.querySelector('.closemenu');
    const mainMenu = document.querySelector('.mainmenu');

    openMenuButton.addEventListener('click', function() {
        mainMenu.classList.toggle('show');
    });

    closeMenuButton.addEventListener('click', function() {
        mainMenu.classList.remove('show');
    });
});
