export const introSlider = {
    "nav": false, 
    "dots": true,
    "responsive": {
        "1200": {
            "nav": true,
            "dots": false
        }
    }
}

export const trendingSlider = {
    "nav": false, 
    "dots": true,
    "margin": 20,
    "loop": false,
    "responsive": {
        "0": {
            "items":2
        },
        "480": {
            "items":2
        },
        "768": {
            "items":3
        },
        "992": {
            "items":4
        },
        "1200": {
            "items":4,
            "dots": false
        }
    }
}

export const featuredSlider = {
    "nav": false, 
    "dots": true,
    "margin": 20,
    "loop": false,
    "responsive": {
        "0": {
            "items":2
        },
        "480": {
            "items":2
        },
        "768": {
            "items":3
        },
        "992": {
            "items":3,
            "nav": true,
            "dots": false
        }
    }
}

export const serviceSlider = {
    nav: false, 
    dots: false,
    margin: 30,
    loop: false, 
    autoplay: true,
    autoplayTimeout: 8000,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        992: {
            items: 3
        },
           1200:{
            items: 4
        }
    }
}