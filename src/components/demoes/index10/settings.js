export const introSlider = {
    nav:  false
}

export const productSlider = {
    nav:  false,
    dots:  true,
    margin:  0,
    loop:  false,
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
        1200: {
            items: 4,
            nav:  true
        }
    }
}

export const blogSlider ={ 
    nav:  false, 
    dots:  true,
    items:  3,
    margin:  20,
    loop:  false,
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
        992: {
            items: 4
        }
    }
}