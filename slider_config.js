function slider_starter() {
    if (window.location.hash === '') {
        console.log('function oaoaoaoaoaoaoa');
        let slider;
        let but_prev = document.getElementById('left');
        let but_next = document.getElementById('right');

        const findslider = () => {
            if (!slider) {
                slider = document.getElementsByClassName('wrapper_slides')[0];
            }
            else if (!but_prev) {
                but_prev = document.getElementById('left');
            }
            else if (!but_next) {
                but_next = document.getElementById('right');
            } if (slider&&but_next&&but_prev) {
                console.log('slider found');
                clearInterval(startsearch);
                console.log(slider, document, window);
                let step = -1;
                let interval = 5500;


                const slide = () => {
                    if (window.location.hash !== '') {
                        clearInterval(startslide);
                    }
                    if (step + 1 === 5) {
                        step = 0;
                    } else {
                        step += 1;
                    }
                    slider.style.transform = `translateX( calc( -65vw * ${step}))`;
                    console.log(step);
                };

                let startslide = setInterval(slide, interval);
                slide();
                but_next.addEventListener('click', () => {
                    clearInterval(startslide);
                    startslide = setInterval(slide, interval);
                    if (step + 1 === 5) {
                        step = 0;
                    } else {
                        step += 1;
                    }
                    slider.style.transform = `translateX( calc( -65vw * ${step}))`;
                    console.log(step);
                });
                but_prev.addEventListener('click', () => {
                    clearInterval(startslide);
                    startslide = setInterval(slide, interval);
                    if (step - 1 === -1) {
                        step = 4;
                    } else {
                        step -= 1;
                    }
                    slider.style.transform = `translateX( calc( -65vw * ${step}))`;
                    console.log(step);
                });
                slider.addEventListener('mouseenter', () => {
                    clearInterval(startslide);
                });
                slider.addEventListener('mouseleave', () => {
                    startslide = setInterval(slide, interval);
                });
            }
        };
        let startsearch = setInterval(findslider, 100);
    } else {
        return '';
    }
}


slider_starter();
