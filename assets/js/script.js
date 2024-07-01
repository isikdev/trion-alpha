document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.partner__wrapper');

    wrapper.addEventListener('wheel', (event) => {
        if (event.deltaY !== 0) {
            event.preventDefault();
            wrapper.scrollBy({
                left: event.deltaY < 0 ? -100 : 100,
                behavior: 'smooth'
            });
        }
    });
});
