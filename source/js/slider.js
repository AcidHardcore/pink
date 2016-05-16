var butPrev = document.querySelector('.review__prev-js');
var butNext = document.querySelector('.review__next-js');

//create slider
var slider = Peppermint(document.getElementById('peppermint'), {
    dots: true,
    slideshow: true,
    speed: 500,
    slideshowInterval: 5000,
    stopSlideshowAfterInteraction: true,
    onSetup: function(n) {
        console.log('Peppermint setup done. Slides found: ' + n);
    }
});

//slider prev button
butPrev.addEventListener('tap', function (event) {
    event.preventDefault();
    slider.prev();

});

//slider next button
butNext.addEventListener('tap', function (event) {
    event.preventDefault();
    slider.next();

});

/*
 butPrev.addEventListener('tap', slider.prev, false);
 butNext.addEventListener('tap', slider.next, false);*/
