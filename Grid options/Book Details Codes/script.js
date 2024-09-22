const tabs = document.querySelectorAll('.tab-label');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelector('.tab-label.active').classList.remove('active');
        document.querySelector('.tab-content.active').classList.remove('active');
        tab.classList.add('active');
        document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
    });
});