// JavaScript code to change the text every few seconds
const changingText = document.getElementById('changingText');
const status = document.getElementById('status');

const textArray = ["I am a CSE Undergrad", "I am a Sophomore", "I am a Programmer", "I am a Keen Learner!"];
let currentIndex = 0;

function updateText() {
    status.innerHTML = textArray[currentIndex];
    currentIndex = (currentIndex + 1) % textArray.length;
}

// Update text every 2 seconds (adjust the time interval as needed)
setInterval(updateText, 2000);

// Hide element after scrolling a certain distance
document.addEventListener('DOMContentLoaded', function () {
    var hideElement = document.querySelector('.abhijeetrajhans');
    var scrollDistance = 10; // Adjust the scroll distance as needed

    window.addEventListener('scroll', function () {
        if (window.scrollY > scrollDistance) {
            hideElement.classList.add('hidden');
        } else {
            hideElement.classList.remove('hidden');
        }
    });
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
