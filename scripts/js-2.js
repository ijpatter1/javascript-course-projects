function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    if (x == "" || y == "") {
      alert("All fields must be filled out");
      return false;
    }
  }