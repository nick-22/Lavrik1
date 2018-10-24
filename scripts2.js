
var a = +prompt('Введите "a"', 'a=');
var b = +prompt('Введите "b"', 'b=');
var c = +prompt('Введите "c"', 'c=');
var res;

console.log(a);
console.log(b);
console.log(c);

if(isNaN(a) || isNaN(b) || isNaN(c)) {
    res = 'Не все введенные значения - числа';
}
else if ((a < b) && (a > c) || (a > b) && (a < c)) {
    res = a;
}
else if ((b < a) && (b > c) || (b > a) && (b < c)) {
    res = b;
}
else if ((a == b) || (a == c) || (b == c)) {
    res='Числа не должны быть равны';
}
else {
    res = c;
}

alert(res);
