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

            if (!viewName || ['sneakers', 'athletic', 'slides'].indexOf(viewName) === (-1)) {
                console.log(data);
                main.innerHTML = (
                    DOMcreator('a',DOMcreator('h2', 'SNEAKERS'),null,{'href':'#catalog/sneakers'}) +
                    DOMcreator('div',
                        DOMcreator('div',
                            DOMcreator('div', null, 'wrapper')
                            , 'carousel'),
                        'catalog sneakers') +
                    DOMcreator('a',DOMcreator('h2', 'ATHLETIC'),null,{'href':'#catalog/athletic'}) +
                    DOMcreator('div',
                        DOMcreator('div',
                            DOMcreator('div', null, 'wrapper')
                            , 'carousel'),
                        'catalog athletic') +
                    DOMcreator('a',DOMcreator('h2', 'SLIDES'),null,{'href':'#catalog/slides'}) +
                    DOMcreator('div',
                        DOMcreator('div',
                            DOMcreator('div', null, 'wrapper')
                            , 'carousel'),
                        'catalog slides')
                );

                for (let dataKey in data) {

                    data[dataKey].forEach((product) => {
                        if (dataKey === 'sneakers' || dataKey === 'athletic' || dataKey === 'slides') {
                            main.querySelector('.' + dataKey + ' .wrapper').innerHTML += (
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


                        }
                    });
                }


            } else {

                main.innerHTML = (
                    DOMcreator('h3', viewName.toUpperCase()) +
                        DOMcreator('div',
                            DOMcreator('div',
                                DOMcreator('div', null, 'wrapper')
                                , 'carousel'),
                            `catalog ${viewName}`)
                );

                data[viewName].forEach((product) => {
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




            }
            return main;
        });


}

export default view;
