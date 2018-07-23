// 1) Создать функцию `runAsyncAll(list, async)`, которая принимает массив функций с асинхронными операциями и параметр `async.`
// Если `async == true`, то все функции запускаются параллельно и `runAsyncAll` возращает массив результатов (от всех асинхронных операций).
// Если `async == false`, то все функции запускаются синхронно по порядку, и `runAsyncAll`
// возращает массив результатов (от всех асинхронных операций).



function runAsyncAll(list,async) {
    let res = [];
    if (async) {
        Promise.all(list).then(results => {
            res = results
        });
        return res;
    }
    return list.map(async (item) => {
        return await item;
    });
}