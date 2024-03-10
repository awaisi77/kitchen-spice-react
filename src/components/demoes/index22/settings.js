export const introSlider = {
    nav: true,
    dots: true,
    loop: true,
}

export const blogSlider = {
    nav: true, 
    dots: false,
    items: 3,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        520: {
            items: 2,
            dots: true
        },
        768: {
            items: 3
        }
    }
}

export const brandSlider = {
    nav: true,
    dots: false,
    margin: 30,
    loop: false,
    responsive: {
        0: {
            items: 2,
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
            items : 6
        }
    }
}