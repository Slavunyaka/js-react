"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// // number = 10;
// // console.log(number);

// // leftBorderWidth = 10;

// const obj = {
//     a:50
// };
// obj.a = 10;

// console.log(obj);


// console.log(name);
// var name = 'Ivan';

// {
//     var result = 50;
// }

// console.log(result);

// const obj ={
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);
// console.log(obj["name"]);


// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// const arrObj = {
//     a: 'a',
//     '1': 'b'
// };

// const b = 'b';
// arrObj[b] = '1234';
// console.log(arrObj['b']);  



// дз№2---------------------------------
// let storeName = 'ATB';
// let storeDescription = {
//     budget: 10000,
//     employees: ['MAX', 'CLA', 'KRU'],
//         products: {
//             num: 'ckay',
//             prais: 1500
//         },
//     open: true
// }; 
// END дз№2------------------------------





// Блок2/13.

// alert('hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18","18"); 
// console.log(answer);                  //выводим что получилось в консоль
// console.log(typeof(answer));         // выводим тип данных.
// const answer = +prompt("Вам есть 18","18");// Динамическая типизация(преобразуем тип данных)
// console.log(answer);
// console.log(typeof(answer));

// const answers = [];
// // answers[0] = prompt('как ваше имя?', '');
// // answers[1] = prompt('what is your surname?', '');
// // answers[2] = prompt('how old you?', '');

// // document.write(answers);
// console.log(typeof(answers));

// Блок2/14.

// const category = 'toys';
// console.log(`https://somuel.com/${category}/5`);

// const user = "Ivan";
// alert(`привет, ${user}`);

// Блок2/15.

// console.log('arr' + " - object");
// console.log(4 + +"5");//испю динамич типиз. переводим строку5 в цифру5. Унарный +

// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;//постфиксная форма 


// // ++incr;
// // --decr;//префиксная форма

// console.log(incr++);//сначало выводит заданное значение а после добавляет 1 которую мы не видем.
// console.log(--decr);//сначало минусует заданое значение а после выводит результат.


//    && -- логическое И работает когда два или больше значений правдивы.
//    || -- логическое ИЛИ работает когда один из вариантов правдив.

// const isChecked = true,
//     //isClose = true;
//     isClose = false;

// console.log(isChecked && isClose); //если оба эти выражения верны то мы получим true

// const isChecked = true,
// //const isChecked = false,
//     //isClose = true;
//     isClose = false;

// console.log(isChecked || isClose); //если хоть одно выражение true результат будет true.

//! -- оператор отрицания напр.!= не равно.и т.д.


// //Блок2/19.
// const numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из просмотренных ранее фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


//Блок2.21.Логические операторы.

// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }
// console.log((hamburger && fries));

// здч. трое чел хотят сьесть по гамбургеру один хочет еше и картошку
// const hamburger = 2;
// const fries = 1;

// if (hamburger === 3 && fries) {
//     console.log('Я сыт!');
// }else {
//     console.log('мы уходим');
// }

//Блок2.22.Циклы

// let num = 50;
// while (num <= 55) { //ПОКА
//     console.log(num);
//     num++;
// }

// let num = 50;
// do {
//     console.log(num);
//     num ++;
// }
// while (num <= 55);

// let num = 50;
// for (let i = 1; i < 8; i++){ //В течении чего-то или ОТ и ДО.
//     if (i === 6){
//         //break;
//         continue;
//     }
//     console.log(i);
// }

//----------------------------------дз
    // for(let i = 5; i <=10; i++){
        
    // console.log(i);}

    // function firstTask() {
    //     for (let i =5; i <=10;i++){
    //     console.log(i);
    //     }
    // }
    // firstTask();


    // function secondTask() {
    //     for (let i = 20; i >= 10; i--){
    //         if (i === 13){
    //             break;
    //         }
    //         console.log(i);
    //     }
    // }
    // secondTask();

    // function thirdTask() {
    //     for (let i = 2; i <= 10; i++ ){
    //         if(i % 2===0){
    //             console.log(i);
    //         }
            
    //     }
    // }
    // thirdTask();

    // for (let i = 2; i <= 16; i++) {
    //         if (i % 2 === 0) {
    //             continue;
    //         } else {
    //             console.log(i);
    //         }
    //     }
        
        // function fourthTask() {
        //     let i = 2;
        //     while (i <= 16){
        //         if(i % 2 === 0){
        //             i++;
        //             continue;
        //         }else {
        //             console.log(i);
        //            i ++;
        //         }
        //     }
        // }
        // fourthTask();

        // function fifthTask() {
        //     const arrayOfNumbers = [];
        //     for(let i = 5; i <=10; i++){
        //         arrayOfNumbers[i - 5] = i;
        //     }
        //     console.log(arrayOfNumbers);
        //     // Не трогаем
        //     return arrayOfNumbers;
        // }
        // fifthTask();

        