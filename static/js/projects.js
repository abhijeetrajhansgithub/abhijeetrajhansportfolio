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
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
    var documentHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    if (scrollTop > 20 && scrollTop + windowHeight < documentHeight) {
        // Set the button to 50% transparent while scrolling
        button.style.opacity = "0.5";
    } else {
        // Set the button to opaque when at the top or bottom of the page
        button.style.opacity = "1";
    }

    if (scrollTop > 20) {
        // Display the button when scrolling
        button.style.display = "block";
    } else {
        // Hide the button when at the top of the page
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

