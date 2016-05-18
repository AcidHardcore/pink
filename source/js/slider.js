var butPrev = document.querySelector('.review__prev-js');
var butNext = document.querySelector('.review__next-js');

//create sliderReview
var sliderReview = Peppermint(document.getElementById('peppermint'), {
    dots: true,
    slideshow: true,
    speed: 500,
    slideshowInterval: 5000,
    stopSlideshowAfterInteraction: true
    // onSetup: function(n) {
    //     console.log('Peppermint setup done. Slides found: ' + n);
    // }
});

//sliderReview prev button
butPrev.addEventListener('tap', function (event) {
    event.preventDefault();
    sliderReview.prev();

});

//sliderReview next button
butNext.addEventListener('tap', function (event) {
    event.preventDefault();
    sliderReview.next();

});

/*
 butPrev.addEventListener('tap', slider.prev, false);
 butNext.addEventListener('tap', slider.next, false);*/

//Create sliderPrice
var sliderPrice = Peppermint(document.getElementById('sliderprice'), {
    dots: true,
    slideshow: true,
    speed: 500,
    slideshowInterval: 5000,
    startSlide: 1,
    stopSlideshowAfterInteraction: true
    // onSetup: function(n) {
    //     console.log('Peppermint setup done. Slides found: ' + n);
    // }
});
