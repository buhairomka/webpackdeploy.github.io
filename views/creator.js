// document.querySelector('main').appendChild(parser.parseFromString(DOMcreator('div', 'smth',), 'text/html').querySelector('tag_of_DOM_element'))

function DOMcreator(tag, content = null, set_class = null, set_attr = null, setid = null) {
    let el = document.createElement(tag);
    if (set_class) {
        let temp = set_class.split(' ');
        temp.forEach((classname) => {
            el.classList.add(classname);
        });
    }
    if (content) {
        el.innerHTML = content;
    }
    if (setid) {
        el.id = setid;
    }
    if (set_attr) {
        for (let key in set_attr) {
            el.setAttribute(key, set_attr[key]);
        }
    }
    return el.outerHTML;
}
export default DOMcreator;
// let buttonn = document.getElementById('catalog')
//
// buttonn.addEventListener('click', () =>
//     fetch('https://aqueous-shelf-54848.herokuapp.com/',)
//         .then((response) => {
//             console.log(response);
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             if (document.querySelector('main .container .catalog.just_dropped') == null){
//                 document.querySelector('main .container')
//                     .appendChild(parser.parseFromString(
//                         DOMcreator('div',
//                             DOMcreator('div',
//                                 DOMcreator('div',null,'wrapper')
//                                 ,"carousel"),
//                             'catalog just_dropped' )
//                         , 'text/html').querySelector('.catalog'))
//             }
//
//             data['just_dropped'].forEach((product) =>{
//                 document.querySelector('.wrapper')
//                     .appendChild(parser.parseFromString( DOMcreator('div',
//                         DOMcreator('img',null,null,{'src':product['img'],'alt':product['model']})+
//                         DOMcreator('br')+
//                         DOMcreator('h3',product['brand'])+
//                         DOMcreator('br')+
//                         DOMcreator('h2',product['model'])+
//                         DOMcreator('br')+
//                         DOMcreator('p',product['price']),'item',null,'item_'+product['id']), 'text/html')
//                         .querySelector('div'))
//             })
//         })
// )
//
/* /get info\ */
//fetch('/get').then((response)=>{
//     console.log(response);
//     return response.json()}).then((data)=>{
//         console.log(data["just_dropped"])})

