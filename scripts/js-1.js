function switchFunction() {
    var suit_output = "Awesome! Your favourite suit is ";
    var suit = document.getElementById("input").value;
    switch(suit) {
        case "Hearts":
            suit_output += suit + ".";
        break;
        case "Diamonds":
            suit_output += suit + ".";
        break;
        case "Clubs":
            suit_output += suit + ".";
        break;
        case "Spades":
            suit_output += suit + ".";
        break;
        default:
            suit_output = "Please enter a suit exactly as written on the above list."
    }
    document.getElementById("output").innerHTML = suit_output;
}

function classTest() {
    var test = document.getElementsByClassName("test");
    test[1].innerHTML = "This element has been changed.";
}
function myCanvas() {
    var c = document.getElementById("myCanvas");
    var cxt = c.getContext("2d");
    var grd = cxt.createLinearGradient(50,0,300,0);
    grd.addColorStop(0, "white");
    grd.addColorStop(1, "green");
    cxt.fillStyle = grd;
    cxt.fillRect(0,0,300,200);
    // cxt.font = "30px Monospace";
    // cxt.fillText("Hello, World!", 10, 50);
    // cxt.moveTo(10,60);
    // cxt.lineTo(240,60);
    // cxt.stroke();
}
