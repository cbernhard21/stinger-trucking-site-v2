export function intersectionObserver() {
    const shortBox = document.querySelectorAll('.short');
    const longBox = document.querySelectorAll('.long');

    let options = {
        rootMargin: '-300px',
        thresold: .5
    };


    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return
            }else {
                entry.target.classList.add('fade-in');
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target);
            };
        });
    }

    const observerShort = new IntersectionObserver(callback, {
        rooMargin: '-100px',
        threshold: .5
    });

    const observerLong = new IntersectionObserver(callback, {
        rooMargin: '-300px',
        threshold: .1
    });

    shortBox.forEach(box => {
        observerShort.observe(box)
    });

    longBox.forEach(box => {
        observerLong.observe(box)
    });


}