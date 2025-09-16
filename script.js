let clickState = 0;
let isClickable = true;

document.addEventListener('click', () => {
    if (!isClickable) return; // Prevent further clicks during timeout

    if (clickState === 0) {
        // First click animation
        console.log(`Animation 0 triggered`);
        document.querySelectorAll('.mask').forEach(mask => {
            mask.style.transition = 'transform 1s ease';
        });
        document.querySelector('.mask-top').style.transform = 'translateY(-100%)';
        document.querySelector('.mask-bottom').style.transform = 'translateY(100%)';
    } else if (clickState === 1) {
        // Second click animation
        console.log(`Animation 1 triggered`);
        const mainCharacter = document.querySelector('.main-character');
        mainCharacter.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        mainCharacter.style.transform = 'translateX(-50%) translateY(0)';
        mainCharacter.style.opacity = '1';
    } else if (clickState === 2) {
        // Third click animation
        console.log(`Animation 2 triggered`);
        const strings = document.querySelectorAll('.main-string, .human-string');
        strings.forEach(string => {
            string.style.maskSize = '100% 100%';
            string.style.webkitMaskSize = '100% 100%';
            string.style.transition = 'mask-size 1s ease, -webkit-mask-size 1s ease';
            string.style.maskPosition = 'bottom';
            string.style.webkitMaskPosition = 'bottom';
            setTimeout(() => {
                string.style.maskImage = 'none';
                string.style.webkitMaskImage = 'none';
                }, 1000);
        });
    } else if (clickState === 3) {
        // Fourth click animation
        console.log(`Animation 3 triggered`);
        const errorImage = document.querySelector('.error');
        errorImage.style.transition = 'opacity 1s ease';
        errorImage.style.opacity = '1';
        setTimeout(() => {
                errorImage.style.animation = 'breathing 2s infinite';
            }, 1000);
    }

    // Set timeout to prevent further clicks for 3 seconds
    isClickable = false;
    setTimeout(() => {
        isClickable = true;
        clickState++;
        console.log(`Click state: ${clickState}`);
    }, 1000);
});