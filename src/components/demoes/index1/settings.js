export const introSlider = {
    nav: false
}

export const brandSlider = {
    nav: false, 
    dots: false, 
    margin: 0, 
    loop: false, 
    responsive: {
        0: {
            items: 2
        }, 
        420:{
            items: 3
        }, 
        600: {
            items: 4
        }, 
        900: {
            items: 5
        }, 
        1024: {
            items: 6
        }, 
        1360: {
            items: 7
        }
    }
}

export const productSlider = {
    nav: false,
    dots: true,
    margin: 20,
    loop: false,
    responsive: {
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
            items: 5
        },
        1600: {
            items: 6,
            nav: true
        }
    }
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
        }
    }
}