function Call_Loop() {
    var X = 1, output = "";
    while (X < 4) {
        output += X + " potato, ";
        X++;
    }
    document.getElementById("Loop").innerHTML = output + "4,";
}
function outputLength() {
    var lth = document.getElementById("Loop").innerHTML.length;
    document.getElementById("output").innerHTML = lth;
}
function potatoMore() {
    var output = "";
    for (x=5; x < 8; x++) {
        output += x + " potato, ";
    }
    document.getElementById("forLoop").innerHTML = output + "more.";
}
function array_Function() {
    var array = ["first", "second", "third", "fourth"];
    document.getElementById("Array").innerHTML = array[3];
}
function constant_Function() {
    const Panda = {species: "cat", age: "3", color: "black and white"};
    Panda.age = "four";
    Panda.sex = "male"
    document.getElementById("Constant").innerHTML = "Panda is a " +
    Panda.age + "-year-old " + Panda.sex + " " + Panda.species + ".";
}
let pet = {
    name: "Tuna",
    species: "dog",
    age: "ten",
    color: "orange",
    description : function() {
        return this.name + " is a " + this.age + "-year-old, " +
        this.color + " " + this.species + ".";
    }
};
document.getElementById("Pet_Object").innerHTML = pet.description();
