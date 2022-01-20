
const cards = window.document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
                // console.log(entry);
                entry.target.classList.toggle('show', entry.isIntersecting);
            }
        );
    }, {
        rootMargin: '0px -200px -100px 0px'
    }, {
        threshold: 1
    }

);

cards.forEach(card => observer.observe(card));