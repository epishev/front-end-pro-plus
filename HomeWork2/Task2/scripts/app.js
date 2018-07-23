// 2) Используя github API делаем запрос на ресурс: `https://api.github.com/orgs/hillel-front-end`
//
// Создаем простой интерфейс (в виде таблицы) с следующими данными.
//
// * На главной отображается список все репозиториев
// * В правом верхнем углу - логотип организации
// * Вывести `default branch` для каждого репозитория
// * Дату последнего `update`
// * Список языков, которые используются в репозитории
//
//
// Рекоменудю использовать Postman. Реализовывать следует используя фичи ES6

const data = require('./data.js');

let path = `https://api.github.com/orgs/hillel-front-end`;
let logoContainer = document.querySelector('.image');
let tableContainer = document.querySelector('.table');

data.load(path)
    .then(response => {
        data.printLogo(logoContainer,response.avatar_url);
        return data.load(response.repos_url);
    })
    .then(repos => {
        repos.forEach(repos => {
            let name = repos.name;
            let branch = repos.default_branch;
            let date = repos.updated_at;
            data.load(repos.languages_url).then(lang => {
              let languages = Object.keys(lang);
              let model = new data.Model(name,branch,date,languages);
              data.printTable(tableContainer,model);
            });
        })
    });

