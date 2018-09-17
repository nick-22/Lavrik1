
var a = prompt('Введите "a"', 'a=');
var b = prompt('Введите "b"', 'b=');
var c = prompt('Введите "c"', 'c=');

if (a < b && a > c || a > b && a < c) {
    alert (a);
}
else if (b < a && b > c || b > a && b < c) {
    alert(b);
}
else if (a == b || a == c || b == c) {
    alert('Числа не должны быть равны');
}
else {
    alert(c);
}
