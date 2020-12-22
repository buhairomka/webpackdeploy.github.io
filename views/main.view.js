import DOMcreator from './creator.js';
// import slider_starter from "../slider_config.js";


function view() {
    let main = document.querySelector('main .container');
    let header = document.querySelector('header');
    fetch('https://server-for-okr.herokuapp.com/',)
        //https://aqueous-shelf-54848.herokuapp.com/
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            header.innerHTML = (
                DOMcreator('div',
                    DOMcreator('div',
                        DOMcreator('div',
                            DOMcreator('div', null, 'wrapper_slides') +
                            DOMcreator('button', '<', 'but', null, 'left') +
                            DOMcreator('button', '>', 'but', null, 'right'),
                            'carousel')
                        , 'sales'),
                    'container')
            );
            data.sale.forEach((sale) => {
                header.querySelector('.wrapper_slides').innerHTML += (
                    DOMcreator('div',
                        DOMcreator('a',
                            DOMcreator('img', null, null, {'src': sale.img})
                            + DOMcreator('h3', sale.slider_title),
                            null, {'href': sale.url}),
                        'item_sales',)
                );
            });
            main.innerHTML = (
                DOMcreator('h3', 'RECOMENDED') +
                DOMcreator('div',
                    DOMcreator('div',
                        DOMcreator('div', null, 'wrapper')
                        , 'carousel'),
                    'catalog slides')
            );

            data['slides'].forEach((product) => {
                main.querySelector('.wrapper').innerHTML += (
                    DOMcreator('div',
                        DOMcreator('a', DOMcreator('img', null, null, {
                            'src': product['img'],
                            'alt': product['model']
                        }), null, {'href': product['url']}) +
                        DOMcreator('br') +
                        DOMcreator('h2', product['brand']) +
                        DOMcreator('br') +
                        DOMcreator('h3', product['model']) +
                        DOMcreator('br') +
                        DOMcreator('p', product['price'])
                        // + DOMcreator('a','view','item_button',null,)
                        , 'item', null, 'item_' + product['id'])
                );


            });


        });

}

// let el=document.createElement('script')
// el.setAttribute('src',"slider_config.js")
// el.id='sliderstarter'
// if (!document.getElementById('sliderstarter')){
//     document.head.appendChild(el)}


// (() => { slider_starter() })()
// `<script src="slider_config.js" defer></script>`

export default view;
