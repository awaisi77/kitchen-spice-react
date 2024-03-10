export const introSlider = {
    nav: false,
    dots: false,
    loop: false
}

export const blogSlider = {
    nav: false,
    dots: true,
    items: 3,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        992: {
            items: 3,
            dots: true
        },
        1200: {
            items: 3,
            nav: true,
            dots: false
        }
    }
}

export const shopSlider = {
    nav: false, 
    dots: true,
    margin: 20,
    loop: false, 
    responsive: {
        0: {
            items: 2
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
            nav: true,
            dots: false
        }
    }
}