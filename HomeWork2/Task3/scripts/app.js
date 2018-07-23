// 3) Создать страницу с youtube видео. В шапке есть поле для ввода url.
//     После ввода ссылки и нажатии на кнопку "add" - видео добавляется на страницу в ряд.
//     Когда перезагружаешь страницу - все видео должны остатся в списке.
//     Изначальное каждое видео должно быть на паузе (читаем youtube API).
// Вся страница служит для временного хранения видео, которы вы запланировали посмотреть.
//     Есть также кнопка - очистить всё.
const videoContainer = document.querySelector('.container');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
let storage = {
    list: []
}

function renderVideo(container,url) {
    let video = container.firstElementChild.cloneNode();
    video.setAttribute('src', url);
    video.classList.add('show');
    container.innerHTML += video.outerHTML;
}

function renderVideoFromLocalStorage() {
   if (localStorage.getItem('videoStorage') == null) {
       return;
   }
   let videoStorage = JSON.parse(localStorage.getItem('videoStorage'));
   for (let item of videoStorage.list)
    renderVideo(videoContainer,item);
}

function replaceUrl (url) {
    return url.replace('watch?v=','embed/');
}

button.addEventListener('click', (e) => {
    let videoUrl = input.value;
    storage.list.push(replaceUrl(input.value));
    localStorage.setItem('videoStorage', JSON.stringify(storage));
    renderVideoFromLocalStorage();
});

renderVideoFromLocalStorage();

