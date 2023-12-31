var lastScrollTop = 0;
var delta = 5;
var abhijeetrajhansDiv = document.getElementById('abhijeetrajhansDiv');

window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (Math.abs(lastScrollTop - scrollTop) <= delta)
        return;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        abhijeetrajhansDiv.classList.add('hidden');
    } else {
        // Scrolling up
        abhijeetrajhansDiv.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});
