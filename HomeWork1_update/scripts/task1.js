// 1) Обладаем массивом объектов такого вида: `[ { value: 10 }, { value: 12 }, { value: 3 } ....... ]`.
// * Вернуть массив отсортированный по возрастанию (по ключу `value`)
// * Вернуть массив простых значений (по ключу `value`)

const arr = [{value:10},{value:12},{value:3},{value:5}];

function sortArray(array) {
     return array.sort((a,b) => a.value - b.value);
}

function simpleValues(array) {
     let b = [];
     array.forEach(item => {
        let isPrime = true;
        if (item.value <= 1) {
            return;
        }
        for (let i = 2; i < item.value; i++) {
                if (item.value % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        if (isPrime) {
                b.push(item.value);
        }
    });
    return b;
};
