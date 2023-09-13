function playStrings(e) {
    const audioNode = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    const keyNode = document.querySelector(`div[data-key = "${e.keyCode}"]`)

    if(!audioNode) return;

    keyNode.classList.add('playing');
    audioNode.currentTime = 0;
    audioNode.play();
}

function removeEffects(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeEffects));
window.addEventListener('keydown', playStrings);