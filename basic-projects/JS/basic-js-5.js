function nan() {
    document.getElementById("nan").innerHTML = 0/0;
}
function pos() {
    document.getElementById("pos").innerHTML = 2E310;
}
function neg() {
    document.getElementById("neg").innerHTML = -2E310;
}
document.getElementById("typeof").innerHTML = (typeof(10>2));
document.getElementById("404").innerHTML = ("\n40" + 4);
function tru() {
    document.getElementById("true").innerHTML = (10>9);
}
function fals() {
    document.getElementById("false").innerHTML = (10>11);
}
function match() {
    var a=10, b=10;
    document.getElementById("match").innerHTML = a === b;
}
function dif() {
    var c=7, d=false;
    document.getElementById("dif").innerHTML = c === d;
}
function type() {
    var e=0, f="0";
    document.getElementById("type").innerHTML = e === f;
}
function val() {
    var g=0, h=1;
    document.getElementById("val").innerHTML = g === h;
}
document.getElementById("tand").innerHTML = (10 > 2 && 17 < 33);
document.getElementById("fand").innerHTML = (10 > 2 && 17 > 33);
document.getElementById("tor").innerHTML = (10 > 2 || 17 > 33);
document.getElementById("for").innerHTML = (10 < 2 || 17 > 33);
function notfalse() {
    document.getElementById("notfalse").innerHTML = !(false);
}
function nottrue() {
    document.getElementById("nottrue").innerHTML = !(true);
}

