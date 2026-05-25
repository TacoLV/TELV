// Countdown logic for global countdown to the end of the current year
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const endOfYear = new Date(currentYear + 1, 0, 1); // Midnight of January 1

    const timeLeft = endOfYear - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Prevent right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Disable right-click context menu
});

// Prevent copy event
document.addEventListener('copy', function(e) {
    e.preventDefault(); // Prevent copy event
    alert("Copying text is disabled.");
});

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initialize countdown immediately
