export const introSlider = {
    nav:  false, 
    dots:  true
}

export const productSlider2 = {
    nav:  false, 
    dots:  true,
    margin:  20,
    loop:  false,
    responsive: {
        0: {
            items:  1
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
            items: 3,
            nav:  true
        },
        1600: {
            items: 5,
            nav:  true
        }
    }
}

export const productSlider1 = {
    nav:  true, 
    dots:  false,
    margin:  20,
    loop:  false,
    responsive: {
        0: {
            items: 2,
            nav:  false
        },
        375: {
            items:  2
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
            items: 3
        },
        1600: {
            items: 4
        }
    }
}

export const brandSlider = {
    nav:  false, 
    dots:  false,
    margin:  20,
    loop:  false,
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
        1600: {
            items: 6,
            nav:  true
        }
    }
}

export const sidebarSlider = {
    nav:  false,
    dots:  true,
    autoHeight:  true,
    loop:  true
}