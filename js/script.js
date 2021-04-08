let prorgess = document.querySelectorAll('.story__skill-percent'),
    parent = document.querySelector('.story__skill');


prorgess.forEach(el => {
    let text = el.getAttribute('data-percent'),
        i = 0,
        bar = document.querySelector(`[aria-valuenow="${text}"]`);
    bar.style.width = '0';
    el.innerHTML = i;

    upgrade();

    function upgrade() {

        if (i <= text) {
            el.innerHTML = i;
            bar.style.width = `${i}%`;
            i++;
            setTimeout(upgrade, text / 1.8);
        }
    }

})
 
        
        
 let map = new google.maps.Map(document.querySelector('#map'));
console.log(map);
    var marker = new google.maps.Marker({
        map:map,
        position: new google.maps.LatLng(49.72964961473178, 11.395572544039274),  
        icon: '../images/contact/marker.png'
    })

    








