export const introSlider = {
    dots: true,
    nav: false,
    loop: false,
    responsive: {
        1200: {
            nav: false,
            dots: false
        }
    }
}

export const productSlider = {
    nav: true, 
    dots: true,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items:2
        },
        768: {
            items:3
        },
        992: {
            items:3
        },
        1200: {
            items:4
        },
        1400: {
            items:5
        }
    }
}