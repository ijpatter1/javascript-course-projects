var X = 10;
function addFunction1() {
    var y = 5;
    var z = X + y;
    return z;
}
function addFunction2() {
    var y = 17;
    var a = X + y;
    return a;
}

function get_Date() {
    if (new Date().getHours() >= 18) {
        document.getElementById("Greeting").innerHTML = "How are you this evening?"
    }
    else if (new Date().getHours() < 12) {
        document.getElementById("Greeting").innerHTML = "How are you this morning?"
    }
    else {
        document.getElementById("Greeting").innerHTML = "How are you today?"
    }
}
function one_In_A_Million() {
    var num = 42;
    if (num == document.getElementById("Guess").value) {
        document.getElementById("Result").innerHTML = "Congratulations! You know the answer to the Ultimate Question of Life, the Universe, and Everything."
    }
    else {
        document.getElementById("Result").innerHTML = "That is incorrect. Here's a hint: it took Deep Thought 7.5 million years to find the answer..."
    }
}
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!"
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is the afternoon."
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}