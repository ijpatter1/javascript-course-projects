function validateForm() {
    var x = document.forms["myForm"]["tel"].value;
    if (x == "") {
      alert("Phone number must be filled out");
      return false;
    }
  }