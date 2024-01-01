setTimeout(function() {
    var projects = document.querySelectorAll('.project');
    projects[0].classList.remove('active');
    projects[1].classList.add('active');
}, 5000);


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
