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
            header.innerHTML = '';
            main.innerHTML = (
                DOMcreator('h3', 'IN CART') +
                DOMcreator('div',
                    DOMcreator('div',
                        DOMcreator('div', null, 'wrapper')
                        , 'carousel'),
                    'catalog slides')
            );
            if (JSON.parse(window.localStorage.getItem('order')).cart.length===0){
                main.querySelector('.wrapper').innerHTML = (DOMcreator('div',DOMcreator('h2','EMPTY'),'item',{'style':'width: 100%'}));
            }
            for (let i in JSON.parse(window.localStorage.getItem('order')).cart) {
                console.log('print i '+i);
                for (let key in data) {
                    data[key].forEach((product) => {
                        if (JSON.parse(window.localStorage.getItem('order')).cart[i][0]===(product['id'])) {
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
                                    DOMcreator('p', product['price']) +
                                    DOMcreator('button', 'REMOVE', 'removebutton', null ,''+product['id'])
                                    , 'item', null, 'item_' + product['id'])
                            );
                        }


                    });
                }
            }
            if (JSON.parse(window.localStorage.getItem('order')).cart.length!==0) {
                let el = document.createElement('div');
                el.innerHTML =(DOMcreator('a','CONFIRM ORDER', null,{'href':'#order'},'confirmorder'));
                document.querySelector('main #main_container').appendChild(el);
            }

        });

}

export default view;
