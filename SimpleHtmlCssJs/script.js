
const cards = window.document.querySelectorAll('.card'); // Select all cards
/*
IntersectionObserver is a class, so we need to create an instance of it, 
and pass it an array of callbacks, which will be called when the intersection of the target element with the viewport changes.
*/
const observer = new IntersectionObserver(entries => { 
        entries.forEach(entry => { // For each entry
                // console.log(entry);
                entry.target.classList.toggle('show', entry.isIntersecting); // toggle show class
            }
        );
    }, {
        rootMargin: '0px -200px -100px 0px' // Margin around the viewport
    }, {
        threshold: 1 
        /*
        Threshold of 1 means that the intersection ratio must be at least 1, 
        so the element is at least 100% visible, and not just 50%, for example.
        */
    }

);

cards.forEach(card => observer.observe(card));