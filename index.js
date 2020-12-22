import Router from './router.js';
import './styles.css'
import './slider_config'

const router = new Router();


function findind(id) {
    for (let i in JSON.parse(window.localStorage.getItem('order')).cart) {
        if (JSON.parse(window.localStorage.getItem('order')).cart[i][0] === parseInt(id)) {
            return i;
        }
    }
    return -1;
}

let funcload = () => {
    console.log('onload');
    const [viewName, endpointName] = router.getState();
    console.log(viewName, endpointName);
    if (JSON.parse(window.localStorage.getItem('order')) === null) {
        window.localStorage.setItem('order', JSON.stringify({'cart': []}));
    }
    let tovars = document.getElementById('countofproducts');
    tovars.innerText = JSON.parse(window.localStorage.getItem('order')).cart.length;
    import(`./views/${viewName}.view.js`)
        .then((module) => {
            module.default(endpointName);
        });
    if (window.location.hash === '') {
        let el = document.createElement('script');
        el.id = 'ididid';
        el.setAttribute('src', 'slider_config.js');
        // el.setAttribute('defer', '')
        document.querySelector('body').appendChild(el);
    } else {
        try {
            document.getElementById('ididid').outerHTML = '';
        } catch (e) {
            console.log('err');
        }
    }

    let price = document.getElementById('price');
    let cart = JSON.parse(window.localStorage.getItem('order')).cart;
    let fprice = 0;
    cart.forEach((item) => {
        fprice += item[1];
    });
    price.innerHTML = '$' + fprice;
};
funcload()
window.onhashchange = funcload;
window.onclick = (event) => {
    if (event.target.name === 'subbutton') {
        event.preventDefault();
        console.log('found adn setting handler');
        let confirmed_order;

        let datatosend = {
            'name': document.exportform.name.value,
            'surname': document.exportform.surname.value,
            'phone': document.exportform.phone.value,
            'address': document.exportform.address.value,
            'cart': JSON.parse(window.localStorage.getItem('order')).cart,
            'price': document.getElementById('price').innerHTML.substring(1)
        };
        console.log(datatosend);
        let trushnostform = false;
        for (let i = 0; i < 5; i++) {
            trushnostform = document.exportform[i].validity.valid;
            console.log(trushnostform);
            if (!trushnostform) {
                return alert('incorrect data');
            }
        }
        if (trushnostform) {
            fetch('https://server-for-okr.herokuapp.com/', {method: 'POST', body: JSON.stringify(datatosend)})
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((data) => {
                    console.log('ID of your order is: ' + data + '\n' + 'https://server-for-okr.herokuapp.com/orders/' + data);
                    fetch('https://server-for-okr.herokuapp.com/orders/' + data)
                        .then((response) => {
                            return response.json();
                        }).then((data) => {
                        confirmed_order = data;
                        console.log(data);
                        window.localStorage.clear();
                        document.getElementById('price').innerText = '$0';
                        document.getElementById('countofproducts').innerText = 0;
                        window.location.hash = '#order/' + confirmed_order.id;
                    });
                });

        }

    }
    if (event.target.className === 'removebutton') {
        event.target.parentElement.outerHTML = '';

        let locStor = JSON.parse(window.localStorage.getItem('order'));
        let value = locStor.cart;
        let index = findind(event.target.id);
        if (index > -1) {
            value.splice(index, 1);
        }

        locStor.cart = value;
        window.localStorage.setItem('order', JSON.stringify(locStor));
        console.log(window.localStorage);
        let tovars = document.getElementById('countofproducts');
        tovars.innerText = JSON.parse(window.localStorage.getItem('order')).cart.length;
        if (JSON.parse(window.localStorage.getItem('order')).cart.length === 0) {
            document.querySelector('main .container .wrapper').innerHTML = ('<div class="item" style="width: 100%"><h2>EMPTY</h2></div>');
            document.querySelector('#confirmorder').outerHTML = '';
        }
        let price = document.getElementById('price');
        let cart = JSON.parse(window.localStorage.getItem('order')).cart;
        let fprice = 0;
        cart.forEach((item) => {
            fprice += item[1];
        });
        price.innerHTML = '$' + fprice;

    }
    if (event.target.className === 'addbutton') {
        if (JSON.parse(window.localStorage.getItem('order')) === null) {
            window.localStorage.setItem('order', JSON.stringify({'cart': []}));
        }

        let productid = window.location.hash.split('/')[1].split('_')[1];
        let locStor = JSON.parse(window.localStorage.getItem('order'));
        let value = locStor.cart;
        value.push([parseInt(productid), parseInt(document.getElementById(productid).innerHTML.substring(9))]);
        locStor.cart = value;
        window.localStorage.setItem('order', JSON.stringify(locStor));
        let tovars = document.getElementById('countofproducts');
        tovars.innerText = JSON.parse(window.localStorage.getItem('order')).cart.length;
        console.log(window.localStorage);

        let price = document.getElementById('price');
        let cart = JSON.parse(window.localStorage.getItem('order')).cart;
        let fprice = 0;
        cart.forEach((item) => {
            fprice += item[1];
        });
        price.innerHTML = '$' + fprice;

    }

};