function full_Sentence() {
    var part_1 = "I have ", part_2 = "made this ", part_3 = "into a complete ", part_4 = "sentence.";
    var whole_Sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_Sentence;
}
function slice_Method() {
    var Sentence = document.getElementById("Slice").innerHTML;
    var Section = Sentence.slice(5,10);
    document.getElementById("Slice").innerHTML = Section;
}
function toString_Method() {
    var num = 8;
    var str = num.toString();
    var type = typeof str;
    document.getElementById("toString").innerHTML = "Typeof(" + str + ") = " + type;
}
function precision_Method() {
    var num = 109873.3948985378;
    document.getElementById("Precision").innerHTML = num.toPrecision(5);
}