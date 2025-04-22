document.addEventListener('DOMContentLoaded', () => {
    // Function to handle toggle behavior for any button-content pair
    function setupToggleButtons(buttonSelector, contentSelector, openClass, toggleText = ['Read More...', 'Read Less...']) {
        const buttons = document.querySelectorAll(buttonSelector);

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Find the closest card to scope the content search
                const card = button.closest('.card');
                if (!card) return; // Skip if no card parent is found

                // Find the content to toggle within the same card
                const content = card.querySelector(contentSelector);
                if (!content) return; // Skip if content is not found

                // Toggle the open class
                content.classList.toggle(openClass);

                // Update button text based on content state
                button.textContent = content.classList.contains(openClass) ? toggleText[1] : toggleText[0];

                // Accessibility: Update ARIA attributes
                button.setAttribute('aria-expanded', content.classList.contains(openClass));
                content.setAttribute('aria-hidden', !content.classList.contains(openClass));
            });
        });
    }

    // Initialize toggle for read-more buttons
    setupToggleButtons(
        '.read-more-btn', // Button selector
        '.card__read-more', // Content selector
        'card__read-more--open', // Class to toggle
        ['Read More...', 'Read Less...'] // Button text options
    );

    // Example for future buttons (e.g., a "Show Details" button)
    // setupToggleButtons(
    //     '.show-details-btn',
    //     '.card__details',
    //     'card__details--open',
    //     ['Show Details', 'Hide Details']
    // );
});