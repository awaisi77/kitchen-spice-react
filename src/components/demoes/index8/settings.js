export const introSlider = {
    nav: false, 
    dots: true, 
    responsive: {
        1200: {
            nav: true, 
            dots: false
        }
    }
}

export const brandSlider = {
    nav: false, 
    dots: false, 
    margin: 30, 
    loop: true, 
    responsive: {
        0: {
            items: 2
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
            items: 6
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
            items: 2,
            margin: 10
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
            nav: true,
            dots: false
        }
    }
}