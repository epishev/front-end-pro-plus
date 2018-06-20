// 1) Обладаем массивом объектов такого вида: `[ { value: 10 }, { value: 12 }, { value: 3 } ....... ]`.
// * Вернуть массив отсортированный по возрастанию (по ключу `value`)
// * Вернуть массив простых значений (по ключу `value`)

const arr = [{value:10},{value:12},{value:3},{value:5}];

function sortArray(array) {
     return array.sort((a,b) => a.value - b.value);
}

function simpleValues(array) {
    let B = [];
    for(let i = 0; i < array.length;i++) {
        let isPrime = true;
        if (array[i].value > 1) {
            for (let j = 2; j < array[i].value; j++) {
                if (array[i].value % j == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                B.push(array[i].value);
            } else continue;
        }
    }
    return B;
}
