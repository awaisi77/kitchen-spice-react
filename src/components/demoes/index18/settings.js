export const introSlider = {
    nav: false,
    dots: true
}

export const brandSlider = {
    nav: false,
    dots: true,
    margin: 30,
    loop: false,
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
            items : 6
        },
        1200: {
            items: 6,
            nav: true,
            dots: false
        }
    }
}

export const sidebarSlider = {
    nav: false, 
    dots: true, 
    loop: false
}