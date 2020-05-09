function getReceipt() {
    //This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (let i=0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>"
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Calzone") {
        sizeTotal = 10;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    // these variables will be passed on to each function
    getVeg(runningTotal,text1);
};
function getVeg(runningTotal,text1) {
    var vegTotal = 0;
    var selectedVeg = [];
    var vegArray = document.getElementsByClassName("vegetables");
    for (let i = 0; i < vegArray.length; i++) {
        if (vegArray[i].checked) {
            selectedVeg.push(vegArray[i]).value;
            console.log("selected vegetable item: ("+vegArray[i].value+")");
            text1 = text1+vegArray[i].value+"<br>";
        }
    }
    var vegCount = selectedVeg.length;
    if (vegCount > 3) {
        vegTotal = (vegCount - 3);
    } else {
        vegTotal = 0;
    }
    runningTotal = (runningTotal + vegTotal);
    console.log("total select vegetable items: "+vegCount);
    console.log(vegCount+" vegetables - 3 free vegeables = "+"$"+vegTotal+".00");
    console.log("vegetable text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    getMeat(runningTotal,text1);
};
function getMeat(runningTotal,text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (let i = 0; i < meatArray.length; i++) {
        if (meatArray[i].checked) {
            selectedMeat.push(meatArray[i].value);
            console.log("selected meat item: ("+meatArray[i].value+")");
            text1 = text1+meatArray[i].value+"<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    console.log("total select meat items: "+meatCount);
    console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
    console.log("meat text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"
        +runningTotal+".00"+"</strong></h3>";
};