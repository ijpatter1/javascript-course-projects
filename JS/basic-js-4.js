function myDictionary() {
    var foods = {
        first: "Sushi",
        second: "Pizza",
        third: "Ramen",
        fourth: "Burritos",
        fifth: "Pie"
    }
    delete foods.fifth;
    document.getElementById("dictionary").innerHTML = foods.fifth;
}