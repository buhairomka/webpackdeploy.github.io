import DOMcreator from './creator.js';


function view(id) {
    let main = document.querySelector('main .container');
    let header = document.querySelector('header');
    header.innerHTML = '';
    if (!id) {
        main.innerHTML = (
            DOMcreator('form',
                '' +
                DOMcreator('div',
                    //name
                    DOMcreator('input', null, null, {
                        'type': 'text',
                        'name': 'name',
                        'placeholder': 'Name*',
                        'required': '',
                        'pattern': '[А-Я][а-я]{1,20}'
                    }) +
                    DOMcreator('span', 'Incorrect name', 'form__error')
                    , 'form__field') +
                //surname
                DOMcreator('div', (
                    DOMcreator('input', null, null, {
                        'type': 'text',
                        'name': 'surname',
                        'placeholder': 'Surname*',
                        'required': '',
                        'pattern': '[А-Я][а-я]{1,30}'
                    }) +
                    DOMcreator('span', 'Incorrect surname', 'form__error')
                ), 'form__field') +
                //Phone
                DOMcreator('div', (
                    DOMcreator('input', null, null, {
                        'type': 'tel',
                        'name': 'phone',
                        'placeholder': 'Phone number*',
                        'required': '',
                        'pattern': '[+][0-9]{12}'
                    }) +
                    DOMcreator('span', 'Format +380981234567', 'form__error')
                ), 'form__field') +
                //address
                DOMcreator('div', (
                    DOMcreator('input', null, null, {
                        'type': 'text',
                        'name': 'address',
                        'placeholder': 'Address*',
                        'required': ''
                    })
                ), 'form__field') +

                DOMcreator('span', '* required fields', null, {'style': 'color:grey'}) +
                DOMcreator('button', 'Submit', null, {'name': 'subbutton', 'type': 'submit'})
                , 'form', {'name': 'exportform'})
        );
    } else {
        fetch('https://server-for-okr.herokuapp.com/orders/' + id)
            .then((order) => {
                return order.json();
            }).then((orderdata) => {
                if (orderdata.id!=-1){
                    fetch('https://server-for-okr.herokuapp.com/')
                        .then(
                            (response) => {
                                console.log(response);
                                return response.json();
                            })
                        .then((data) => {

                            main.innerHTML = (
                                DOMcreator('h3', 'Order № ' + id) +
                                    DOMcreator('div',
                                        DOMcreator('div',
                                            DOMcreator('div', null, 'wrapper')
                                            , 'carousel'),
                                        `catalog ${id}`)
                            );

                            for (let i in orderdata.cart) {
                                console.log('print i ' + i);
                                for (let key in data) {
                                    data[key].forEach((product) => {
                                        if (orderdata.cart[i][0] === (product['id'])) {
                                            main.querySelector('.wrapper').innerHTML += (
                                                DOMcreator('div',
                                                    DOMcreator('img', null, null, {
                                                        'src': product['img'],
                                                        'alt': product['model']
                                                    }) +
                                                        DOMcreator('br') +
                                                        DOMcreator('h2', product['brand']) +
                                                        DOMcreator('br') +
                                                        DOMcreator('h3', product['model']) +
                                                        DOMcreator('br') +
                                                        DOMcreator('p', '$'+orderdata.cart[i][1])

                                                    , 'item', null, 'item_' + product['id'])
                                            );
                                        }


                                    });
                                }
                            }


                        }
                        );
                }else {
                    main.innerHTML = 'Order with №'+id+' does not exists';
                }


            });
    }
}

export default view;