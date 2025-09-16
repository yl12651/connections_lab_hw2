let clickState = 0;
let isClickable = true;

document.addEventListener('click', () => {
    if (!isClickable) return; // Prevent further clicks during timeout

    if (clickState === 0) {
        // First click animation
        document.querySelectorAll('.mask').forEach(mask => {
            mask.style.transition = 'transform 1s ease';
        });
        document.querySelector('.mask-top').style.transform = 'translateY(-100%)';
        document.querySelector('.mask-bottom').style.transform = 'translateY(100%)';
    }

    clickState++;

    // Set timeout to prevent further clicks for 3 seconds
    isClickable = false;
    setTimeout(() => {
        isClickable = true;
    }, 3000);
});