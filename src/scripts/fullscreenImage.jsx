export function createFullscreenView() {
    const previewImgs = document.querySelectorAll('.project-carousel img');
    let fullscreenOverlay = null;
    previewImgs.forEach(function (previewImg) {
        previewImg.addEventListener('click', function () {
            const imgSrc = this.getAttribute('src');
            showFullscreenPreview(imgSrc);
        });
    });


    function showFullscreenPreview(imgSrc) {
        fullscreenOverlay = document.createElement('div');
        fullscreenOverlay.id = 'fullscreen-overlay';
        fullscreenOverlay.addEventListener('click', hideFullscreenPreview);

        const fullscreenImg = document.createElement('img');
        fullscreenImg.id = 'fullscreen-img';
        fullscreenImg.setAttribute('src', imgSrc);

        fullscreenOverlay.appendChild(fullscreenImg);
        document.body.appendChild(fullscreenOverlay);

        document.body.style.overflow = 'hidden'; // Disable scrolling
    }

    function hideFullscreenPreview() {
        if (fullscreenOverlay) {
            fullscreenOverlay.remove();
            fullscreenOverlay = null;
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    }
}