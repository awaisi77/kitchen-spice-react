export const introSlider = {
    nav: false,
    dots: false,
    margin: 0,
    loop: false
}

export const productSlider = {
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
            nav: true
        }
    }
}