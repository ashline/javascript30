window.onload = function () {
    window.addEventListener('keydown', onKeydown);
    var keyDivs = document.getElementsByClassName('key');

    function onKeydown(event) {
        playSound(event.keyCode);
    }

    function onTransitionEnd(event) {
        if(event.propertyName === 'transform') {
            event.target.classList.remove('playing');
        }
    }

    function playSound(keyCode) {
        var keyPair = document.querySelectorAll('[data-key="' + keyCode + '"]');
        if (!keyPair.length) return;

        keyPair[0].classList.add('playing');

        if (keyPair[1].paused) {
            keyPair[1].play();
        } else {
            keyPair[1].currentTime = 0
        }
    }

    function onClick(event) {
        var keyCode = event.target.parentNode.getAttribute('data-key');
        playSound(keyCode);
    }

    function registerTransitionHandlers() {
        for (var i = 0; i < keyDivs.length; i++) {
            keyDivs[i].addEventListener('transitionend', onTransitionEnd);
            keyDivs[i].addEventListener('click', onClick);
        }
    }

    registerTransitionHandlers();
}
