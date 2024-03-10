export const introSlider = {
    nav: false, 
    dots: true,
    responsive: {
        768: {
            nav: true,
            dots: false
        }
    }
}

export const trendingSlider = {
    nav: true, 
    dots: false,
    margin: 20,
    loop: false, 
    responsive: {
        320: {
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
        }
    }
}

export const productSlider = {
    nav: true, 
    dots: false,
    margin: 20,
    loop: false,
    autoPlay: false,
    responsive: {
        0: {
            items:2
        },
        320: {
            items: 2,
            margin: 10
        },
        768: {
            items:3
        },
        992: {
            items:4
        }
    }
}

export const featuredSlider = {
    nav: true, 
    dots: true,
    margin: 20,
    loop: false,
    autoPlay: false,
    responsive: {
        0: {
            items: 2,
        },
        320: {
            items: 2
        },
        375: {
            items: 2
        },
        600: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
}