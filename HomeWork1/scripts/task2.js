// 2) Используя es6 классы и шаблонные строки произвести вывод на экран товаров:
//     `[{ title: 'Title1', size: 4, img: 'url' }, { title: 'Title2', size: 35, img: 'url' }, { title: 'Title2', size: 22, img: 'url' } ......]`
//     * Товары вывести в виде карточек, верстка элементарная, на свое усмотрение
// * Используем фичи ES6, все методы по рендерингу должны хранится в классе `ViewController`
// * Дополнительно: массив товаров брать из json файла, можно использовать метод `fetch`

class Data {
    constructor() {
    }
    load(path) {
        return fetch(path).then(response => response.json());
    }
}

class ViewController extends Data {
    constructor() {
        super();

    }
    render(array,container){
        container.innerHTML = array.map(item => {
         let goodsForm = `<div class = "block">
         <div><img src="${item.img}"></div>
         <div>${item.title}</div>
         <div>${item.size}</div>
         </div>`;
         return goodsForm;
        }).join('');
    }
}

let goods = new ViewController();
goods.load('/data.json').then(results => {
    let container = document.querySelector('.container');
    goods.render(results,container);
});