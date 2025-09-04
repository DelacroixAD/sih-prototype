document.addEventListener('DOMContentLoaded', () => {
    const initialHero = document.getElementById('initialHeroImage');
    const startButton = document.getElementById('startAdventureButton');
    const animatedHero = document.getElementById('animatedHero');

    // This function handles the fade out and smooth scroll
    const startAdventure = () => {
        initialHero.style.opacity = '0';
        initialHero.style.pointerEvents = 'none'; // Make it unclickable

        // Smooth scroll to the next section after the fade transition
        initialHero.addEventListener('transitionend', () => {
            animatedHero.scrollIntoView({ behavior: 'smooth' });
        }, { once: true }); // The { once: true } ensures this listener runs only once
    };

    // Event listener for the "START YOUR ADVENTURE" button
    startButton.addEventListener('click', startAdventure);

    // Optional: You could also trigger this automatically after a delay
    // For example, to hide the initial image after a few seconds
    // setTimeout(startAdventure, 5000); // Fades out after 5 seconds
});