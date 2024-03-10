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

export const productSlider = {
    nav: true, 
    dots: true, 
    margin: 20, 
    loop: false, 
    responsive: { 
        0 : { 
            items :2,
        },
        480: { 
            items:2 
        },
        768: { 
            items:3 
        },
        992: {
            items:4
        },
        1200: { 
            items:5 
        }
    }
}

export const productSlider2 = {
    nav: true, 
    dots: false, 
    margin: 20, 
    loop: false, 
    responsive: {
        0: {
            items:2
        },
        480:{
            items:2
        },
        992: {
            items:3
        },
        1200:{
            items:4,
            nav:true
        }
    }
}

export const brandSlider ={ 
    nav: false, 
    dots: false, 
    margin: 30, 
    loop: false, 
    responsive: {
        0: {
            items:2
        }, 
        420:{
            items:3
        }, 
        600: {
            items:4
        }, 
        900: {
            items:5
        }, 
        1024:{
            items:6
        }
    }
}