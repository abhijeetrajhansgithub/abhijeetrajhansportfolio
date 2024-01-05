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

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var button = document.getElementById("backToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function scrollToTop() {
    // Use the "behavior: smooth" property for smooth scrolling
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
