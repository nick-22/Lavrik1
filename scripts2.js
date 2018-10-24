
// var a = +prompt('Введите "a"', 'a=');
// var b = +prompt('Введите "b"', 'b=');
// var c = +prompt('Введите "c"', 'c=');
// var res;
//
// console.log(a);
// console.log(b);
// console.log(c);
//
// if(isNaN(a) || isNaN(b) || isNaN(c)) {
//     res = 'Не все введенные значения - числа';
// }
// else if ((a < b) && (a > c) || (a > b) && (a < c)) {
//     res = a;
// }
// else if ((b < a) && (b > c) || (b > a) && (b < c)) {
//     res = b;
// }
// else if ((a == b) || (a == c) || (b == c)) {
//     res='Числа не должны быть равны';
// }
// else {
//     res = c;
// }
//
// alert(res);


// var x = +prompt('Введите "x"', 'x=');
//
// while (x >= 0) {
//     alert(x);
//     x--;
// }

// var x = +prompt('Введите "x"', 'x=');
//
// while (isNaN(x)) {
//     x = +prompt('Введите "x"', 'x=');
// }
// x*=2;
// alert(x);

// то же самое через do while

// var x;
//
// do {
//     x = +prompt('Введите "x"', 'x=');
// }
// while (isNaN(x));
// x*=2;
// alert(x);

//while сначало думает, потом делает. do while сначала делает потом думает

// еще пример. Выведет 5 , так как сначала делает, потом думает;

// var x = 5;
//
// do {
//     alert(x);
//     x--;
// }
// while (x < 0);


// for (var x = 0; x <= 100; x += 10 ) {
//     console.log(x);
// }
