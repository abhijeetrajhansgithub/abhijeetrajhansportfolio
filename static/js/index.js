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
