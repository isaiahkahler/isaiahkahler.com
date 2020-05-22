const viewportMedia = window.matchMedia('(max-width: 1024px)');

const touchShrinkElements = document.querySelectorAll('.touch-shrink');


if (viewportMedia.matches) {
    onTouchView() 
} else {
    onDesktopView();
}

viewportMedia.addEventListener('change', (event) => {
    if (event.matches) {
        onTouchView() 
    } else {
        onDesktopView();
    }
});

function onTouchView() {
    touchShrinkElements.forEach(element => {
        element.classList.add('no-flex-grow');
    });
}

function onDesktopView() {
    touchShrinkElements.forEach(element => {
        if(element.classList.contains('no-flex-grow'))
        element.classList.remove('no-flex-grow');
    });
}

