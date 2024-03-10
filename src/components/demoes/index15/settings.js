export const introSlider = {
    nav: false,
    dots: true,
    margin: 20,
    loop: false,
    responsive: {
        1200: {
            nav: false
        }
    }
}

export const blogSlider = {
    nav: false, 
    dots: false,
    margin: 20,
    loop: false, 
    responsive: {
        0: {
            items: 1
        },
        520: {
            items: 2
        },
        768: {
            items: 3
        },
        992:{
            items: 4
        }
    }
}

export const ctaSlider = {
    nav: false,
    dots: true,
    margin: 20,
    loop: false,
    responsive: {
        1200: {
            nav: false
        },
        1500: {
            nav: true
        }
    }
}