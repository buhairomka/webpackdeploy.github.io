import DOMcreator from './creator.js';


function view(viewName) {
    let main = document.querySelector('main .container');
    document.querySelector('header').innerHTML = '';


    fetch('https://server-for-okr.herokuapp.com/',)
        .then((response) => {
            console.log(response);
            return response.json();})

        .then((data) => {
            for (let key in data) {
                data[key].forEach((sale) => {
                    if (sale.name === viewName) {
                        main.innerHTML = (
                            DOMcreator(
                                'div',

                                DOMcreator('img', null, null, {'src': sale['img']}) +
                                DOMcreator('div',
                                    DOMcreator('h3', sale['title']) +
                                    DOMcreator('p', sale['desc'])
                                    , 'content')
                                , 'content_wrapper'));
                    }
                });
            }
        });


}

export default view;
