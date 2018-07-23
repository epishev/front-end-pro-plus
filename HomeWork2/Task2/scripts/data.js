
class Model {
    constructor(name,branch,date,lang) {
        this.name = name;
        this.branch = branch;
        this.date = date;
        this.languages = lang;
    }
}

function load(path) {
    return fetch(path).then(response => response.json());
}

function printLogo(container,url) {
    container.innerHTML = `<img src="${url}">`
}

function printTable(container,model) {
    container.innerHTML += `<tr><td>${model.name}</td>
                                 <td>${model.branch}</td>
                                 <td>${model.date}</td>
                                 <td>${model.languages}</td>
                            </tr>`
}


module.exports = {
    load,
    printLogo,
    Model,
    printTable
}