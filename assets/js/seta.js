document.addEventListener('DOMContentLoaded', function() {
    var seta = document.querySelector('.seta');
    seta.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});