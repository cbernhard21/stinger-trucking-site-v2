export function intersectionObserver() {
    const textBox = document.querySelectorAll('.text-box');

    let options = {
        rootMargin: '-300px',
        thresold: .5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return
            }else {
                entry.target.classList.add('fade-in');
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target);
            };
        });
    }, options)

    textBox.forEach(box => {
        observer.observe(box);
    })


}