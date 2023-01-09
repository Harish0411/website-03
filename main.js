$('.brand').owlCarousel({
    loop:true,
	autoplay:true,
	rewind:true,
	items:1,
    margin:30,
    smartSpeed:300,
	stagepadding:50,
	margin:25,
    nav:true,
    responsive:{
        0:{
            items:1,
			dotsEach: 3
        },
        600:{
            items:3
        },
        1000:{
            items:4,
			dotsEach: 1
        }
    }
})