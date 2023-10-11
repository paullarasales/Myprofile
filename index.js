window.addEventListener('DOMContentLoaded', function() {
    function scrollToView(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    const experties = document.getElementById('experties');
    experties.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToView('.experties');
    });

    // const services = document.getElementById('services');
    // services.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     scrollToView('.skills')
    // })
});
