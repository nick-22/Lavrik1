
var a = +prompt('Введите "a"', 'a=');
var b = +prompt('Введите "b"', 'b=');
var c = +prompt('Введите "c"', 'c=');
var res;

if ((a < b) && (a > c) || (a > b) && (a < c)) {
    res = a;
}
else if ((b < a) && (b > c) || (b > a) && (b < c)) {
    res = b;
}
else if ((a == b) || (a == c) || (b == c)) {
    alert('Числа не должны быть равны');
}
else {
    res = c;
}

alert(res);
