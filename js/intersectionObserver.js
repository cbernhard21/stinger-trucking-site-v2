export function intersectionObserver() {
    const shortBox = document.querySelectorAll('.short');
    const longBox = document.querySelectorAll('.long');

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return
            }else {
                entry.target.classList.add('fade-in');
                entry.target.classList.add('slide-up');
                observer.unobserve(entry.target);
            };
        });
    }

    const observerShort = new IntersectionObserver(callback, {
        rooMargin: '-300px',
        threshold: 0
    });

    const observerLong = new IntersectionObserver(callback, {
        rooMargin: '0px',
        threshold: 0
    });

    shortBox.forEach(box => {
        observerShort.observe(box)
    });

    longBox.forEach(box => {
        observerLong.observe(box)
    });


}