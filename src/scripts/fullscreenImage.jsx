export function createFullscreenView() {
    const previewImgs = document.querySelectorAll('.project-carousel img');
    let fullscreenOverlay = null;
    previewImgs.forEach(function (previewImg) {
        if (previewImg.classList !== "preview") {
            previewImg.classList.add("preview")
            previewImg.addEventListener('click', function () {
                if (window.matchMedia("(max-width: 1400px)").matches) {
                    const imgSrc = this.getAttribute('src');
                    showFullscreenPreview(imgSrc);
                }
            });
        }
    });


    function showFullscreenPreview(imgSrc) {
        let overlay = document.getElementById('fullscreen-overlay')
        if (!overlay) {
            fullscreenOverlay = document.createElement('div');
            fullscreenOverlay.classList.add('fullscreen-overlay');
            fullscreenOverlay.addEventListener('click', hideFullscreenPreview);

            // for (let i = 0; i < 3; i++) {
            const fullscreenImg = document.createElement('img');
            fullscreenImg.classList.add('fullscreen-img');
            fullscreenImg.setAttribute('src', imgSrc);

            fullscreenOverlay.appendChild(fullscreenImg);
            // }
            document.body.appendChild(fullscreenOverlay);

            document.body.style.overflow = 'hidden'; // Disable scrolling
        }
    }

    function hideFullscreenPreview() {
        if (fullscreenOverlay) {
            fullscreenOverlay.remove();
            fullscreenOverlay = null;
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    }

    //SCROLL ============================================

    function createFullscreenScroll() {
        const carouselInner = fullscreenOverlay;
        const images = previewImgs;
        const imageWidth = images[0].clientWidth;
        let currentIndex = 0;
        let isAnimating = false;

        function goToImage(index) {
            if (isAnimating) return;
            isAnimating = true;

            if (index < 0) {
                index = 0;
            } else if (index >= images.length) {
                index = images.length - 1;
            }
            console.log(index);

            const offset = -index * imageWidth;
            carouselInner.style.transition = "transform 0.5s ease";
            carouselInner.style.transform = `translateX(${offset}px)`;

            currentIndex = index;

            setTimeout(() => {
                isAnimating = false;
            }, 500);
        }

        function nextImage() {
            goToImage(currentIndex + 1);
        }

        function prevImage() {
            goToImage(currentIndex - 1);
        }

        let startX = null;
        let startY = null;

        function handleTouchStart(event) {
            startX = event.touches[0].clientX;
            startY = event.touches[0].clientY;
        }

        function handleTouchMove(event) {
            if (!startX || !startY) {
                return;
            }

            const deltaX = event.touches[0].clientX - startX;
            const deltaY = event.touches[0].clientY - startY;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                event.preventDefault();
            }
        }

        function handleTouchEnd(event) {
            if (!startX || !startY) {
                return;
            }

            const deltaX = event.changedTouches[0].clientX - startX;
            const deltaY = event.changedTouches[0].clientY - startY;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0) {
                    prevImage();
                } else {
                    nextImage();
                }
            }

            startX = null;
            startY = null;
        }

        carouselInner.addEventListener("touchstart", handleTouchStart);
        carouselInner.addEventListener("touchmove", handleTouchMove);
        carouselInner.addEventListener("touchend", handleTouchEnd);
    }
}