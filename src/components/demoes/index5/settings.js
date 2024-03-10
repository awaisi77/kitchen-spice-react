export const introSlider = {
    nav: false,
    dots: false,
    margin: 20,
    loop: true,
    responsive: {
        1200: {
            nav: false
        }
    }
}

export const trendingSlider = {
    nav: false, 
    dots: true,
    margin: 20,
    loop: false, 
    responsive: {
        320: {
            items: 2,
        },
        375: {
            items: 2,
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200:{
            items: 4,
            nav: true
        }
    }
}