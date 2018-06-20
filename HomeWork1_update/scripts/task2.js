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
        let goodsForm = '';
        for (let i = 0; i< array.length; i++) {
            goodsForm = `<div class = "block">
         <div><img src="${array[i].img}"></div>
         <div>${array[i].title}</div>
         <div>${array[i].size}</div>
         </div>`;

         container.innerHTML += goodsForm;
        }
    }
}

let goods = new ViewController();
goods.load('/data.json').then(results => {
    let container = document.querySelector('.container');
    goods.render(results,container);
});