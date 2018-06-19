// Scoping

var x = 10;

function f() {
    var x;

    console.log(x);

    return x;
}

//let, const

// if(true) {
//     let x; //let обьявляет переменную только внутри блока
//     if (true) {
//         console.log(x); // работает
//     }
// }

// const x = 10; // Обьявляет неизменяемую переменную, кроме обьектов
//
// x = 20; //error


//Arrow Functions

// function f() {
//
// }
//
// f1 = function (item) {
//     return item*2;
// }
//
// f1_a = item => item * 2;

// let arr = [1,3,4,5,4,4];
//
// let res = arr.map(item => item * item)
//     .filter(item => item > 100)
//     .reduce((prev,item) => item + prev,0);

//Extended Parameter Handling // rest, spread (home)

  // function f(a,b = 20) {
  //
  // }
  //
  // f(2);

//Template literals
// var a = 10;
// var str = `ds${10}ds` //обратные кавычки може вставлять переменные


// Destructuring

// let [a,b,c] = [1,3,4,5,4,6,7]; //a = 1, b =3, c = 4


//ES6 классы

class Human {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    run() {

    }

    get name();
}

var p1 = new Human('Petya',20);




