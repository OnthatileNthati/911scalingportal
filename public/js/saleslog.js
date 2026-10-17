document.addEventListener("DOMContentLoaded", () => {
    const salesLogBtn = document.querySelector('.saleslog');
    if (salesLogBtn) {
        salesLogBtn.addEventListener('click', () => {
            window.location.href = '/saleslog';
        });
    }
});