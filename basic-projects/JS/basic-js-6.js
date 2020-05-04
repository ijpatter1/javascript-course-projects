function Vote_Function () {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

function Citizen(Name, Age) {
    this.Citizen_Name = Name;
    this.Citizen_Age = Age;
}
var Ian = new Citizen("Ian", 18);
function newThis() {
    document.getElementById("New_and_This").innerHTML = "My name is " + Ian.Citizen_Name + " and I am " + Ian.Citizen_Age +" years old.";
}
function nested() {
    document.getElementById("Nested_Function").innerHTML = String_Function();
    function String_Function() {
        var str = "This is a string";
        function Nested_String() {str = "This is the output of a nested function"};
        Nested_String();
        return str;
    }
}