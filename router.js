class Router {
    split_hash(hash) {
        let spl1 = hash.split('#');
        if (spl1.length === 1 && spl1[0] === '') {
            return '';
        }
        let spl2 = [];
        spl1.forEach(el => spl2.push(el.split('/')));
        spl2 = spl2[1];
        return spl2;
    }

    getState() {
        let name_of_view = 'main';
        let endpath = '';
        let res_split = this.split_hash(window.location.hash);
        if (res_split === '') {
            name_of_view = 'main';
        }
        else if (res_split.length === 1) {
            if (res_split.includes('catalog')) {
                name_of_view = 'catalog';
            } else if (res_split.includes('action')) {
                name_of_view = 'action';
            } else if (res_split.includes('cart')) {
                name_of_view = 'cart';
            } else if (res_split.includes('order')) {

                /*проконтролювать відкриття корзини*/

                if (JSON.parse(window.localStorage.getItem('order')) !== null && JSON.parse(window.localStorage.getItem('order')).cart.length!==0) {
                    name_of_view = 'order';
                } else {
                    window.location.hash='';
                }
            }
        }
        else if (res_split.length === 2) {
            if (res_split[0] === ('action')) {
                name_of_view = 'action';
                endpath = res_split[1];
            } else if (res_split.includes('catalog' && 'sneakers') || res_split.includes('catalog' && 'athletic') || res_split.includes('catalog' && 'slides')
            ) {
                name_of_view = 'catalog';
                endpath = res_split[1];
            } else if (res_split[0] === ('products') && res_split[1].includes('item_')) {
                name_of_view = 'products';
                endpath = res_split[1];
            } else if (res_split[0] === ('order')&& res_split[1]!='') {
                name_of_view = 'order';
                endpath = res_split[1];
            }
        }


        return [name_of_view, endpath];
    }
}

export default Router;