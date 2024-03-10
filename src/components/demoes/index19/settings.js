export const bannerSlider = {
    nav: false,
    dots: true,
    margin: 0,
    loop: true,
    responsive: {
        1200: {
            nav: false
        }
    }
}

export const productSlider = {
    nav: false,
    dots: true,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        320: {
            items: 2
        },
        375: {
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
        1200: {
            items: 5,
            nav: true
        }
    }
}

export const blogSlider = {
    nav: false, 
    dots: true,
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
            items: 3
        }, 
        1200: {
            items: 4, 
            nav: true
        }
    }
}