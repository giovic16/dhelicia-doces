document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        var triggerPosition = document.querySelector('#valores').offsetTop;

        console.log('Scroll Position:', scrollPosition);
        console.log('Trigger Position:', triggerPosition);

        if (window.innerWidth <= 768 && scrollPosition > triggerPosition) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
});