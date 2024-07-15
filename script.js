document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.imgSliderContainer');
    const buttonsContainer = document.querySelector('.imgSliderButtons');
    const images = slider.querySelectorAll('img');
    const imgWidth = 360; // Assuming each image has a fixed width
    const totalImages = images.length;
    let currentIndex = 0;

    // Create buttons based on the number of images
    for (let i = 0; i < totalImages; i++) {
        const button = document.createElement('img');
        button.src = i === 0 ? 'images/1.svg' : 'images/2.svg';
        button.dataset.index = i;
        button.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            currentIndex = index;
            slider.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
            updateButtons();
        });
        buttonsContainer.appendChild(button);
    }

    // Function to update button styles
    const updateButtons = () => {
        const buttons = buttonsContainer.querySelectorAll('img');
        buttons.forEach((button, index) => {
            button.src = index === currentIndex ? 'images/1.svg' : 'images/2.svg';
        });
    };
});
