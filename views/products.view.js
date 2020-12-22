import DOMcreator from './creator.js';


function view(viewName) {
    let main = document.querySelector('main .container');
    document.querySelector('header').innerHTML = '';


    fetch('https://server-for-okr.herokuapp.com/',)
        //https://aqueous-shelf-54848.herokuapp.com/
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            let itemid = viewName.split('_')[1];
            console.log('сюда нам надо', itemid);
            for (let key in data) {
                data[key].forEach((product) => {
                    if (product.id == itemid) {
                        main.innerHTML = (
                            DOMcreator(
                                'div',

                                DOMcreator('img', null, null, {'src': product['img']}) +
                                DOMcreator('div',
                                    DOMcreator('h3', product['model']) +
                                    DOMcreator('p', product['description']) +
                                    DOMcreator('button', 'To Cart ' + product['price'], 'addbutton', null, itemid)
                                    , 'content')
                                , 'content_wrapper'));
                    }
                });
            }
        });


}

export default view;
