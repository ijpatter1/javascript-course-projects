function addFunction() {
    var addition = 2+2;
    document.getElementById("add").innerHTML = "2 + 2 = " + addition;
}
function subFunction() {
    var subtraction = 5 - 2;
    document.getElementById("sub").innerHTML = "5 - 2 = " + subtraction;
}
function mulFunction() {
    var multiplication = 6 * 6;
    document.getElementById("mul").innerHTML = "6 * 6 = " + multiplication;
}
function divFunction() {
    var division = 48/6;
    document.getElementById("div").innerHTML = "48 / 6 = " + division;
}
function allTogetherNow() {
    var operation = (2 + 2) + (5 - 2) * (6 * 6) / (48/6);
    document.getElementById("op").innerHTML = operation;
}
function modFunction() {
    var modulo = 25 % 6;
    document.getElementById("mod").innerHTML = modulo;
}
function negFunction() {
    var x = 10;
    document.getElementById("neg").innerHTML = -x;
}
function incFunction() {
    var x = 5;
    x++;
    document.getElementById("inc").innerHTML = x;
}
function decFunction() {
    var x = 5;
    x--;
    document.getElementById("dec").innerHTML = x;
}
function rando() {
    var random = Math.random() * 100;
    document.getElementById("ran").innerHTML = random;
}
function piFunction() {
    var pi = Math.PI;
    document.getElementById("pi").innerHTML = pi;
}