export const introSlider = {
    nav: false,
    dots: true,
    margin: 0,
    loop: true,
    responsive: {
        1200: {
            nav: false,
            dots: false
        }
    }
}

export const productSlider = {
    nav: true, 
    dots: false,
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
            items:4
        }
    }
}

export const brandSlider = {
    nav: true,
    dots: false,
    margin: 10,
    loop: false,
    responsive: {
        0: {
            items:2,
            nav: false
        }, 
        375: {
            item: 2,
            nav: false
        },
        420: {
            items: 3
        }, 
        600: {
            items: 4
        }, 
        900: {
            items: 5
        }, 
        1024: {
            items :6
        }
    }
}