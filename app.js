 // Simple animation for feature cards on hover
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('transform', 'transition', 'duration-300');
            });
            card.addEventListener('mouseleave', () => {
                card.classList.remove('transform', 'transition', 'duration-300');
            });
        });
        
        // Simple alert when clicking the DeepSearch button
        document.querySelector('button').addEventListener('click', () => {
            alert('Initiating DeepSearch...');
        });