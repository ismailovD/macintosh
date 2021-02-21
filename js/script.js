let prorgess = document.querySelectorAll('.story__skill-percent'),
    parent = document.querySelector('.story__skill');


prorgess.forEach(el => {
    let text = el.getAttribute('data-percent'),
        i = 0,
        bar = document.querySelector(`[aria-valuenow="${text}"]`),
        speed = 1000;
    bar.style.width = '0';
    el.innerHTML = i;

    upgrade();

    function upgrade() {
        
        if (i <= text) {
            el.innerHTML = i;
            bar.style.width = `${i}%`;
            i++;
            setTimeout(upgrade, text/1.8);
        }
    }

})  







