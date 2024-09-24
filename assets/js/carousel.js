document.querySelectorAll('.carousel').forEach(carousel => {
    const cards = carousel.querySelectorAll('.card');
    const itemsPerPage = 5; 
    let currentPage = 1;

    function renderCards() {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        cards.forEach((card, index) => {
            card.style.display = (index >= start && index < end) ? 'flex' : 'none';
        });
    }

    function showNextPage() {
        const totalPages = Math.ceil(cards.length / itemsPerPage);
        currentPage = (currentPage < totalPages) ? currentPage + 1 : 1;
        renderCards();
    }

    function showPrevPage() {
        const totalPages = Math.ceil(cards.length / itemsPerPage);
        currentPage = (currentPage > 1) ? currentPage - 1 : totalPages;
        renderCards();
    }

    carousel.querySelector('.btnNext').addEventListener('click', showNextPage);
    carousel.querySelector('.btnPrev').addEventListener('click', showPrevPage);

    renderCards();
});
