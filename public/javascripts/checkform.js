  document.addEventListener("submit", function(e) {
    var text= document.getElementById("inputUserName").value;
      if(text == "") {
        alert("Error: Username cannot be blank!");
        
        e.preventDefault(); // equivalent to return false
        return;
      }
      re = /^\w+$/;
      if(!re.test(text)) {
        alert("Error: Username must contain only letters, numbers and underscores!");
      
        e.preventDefault();
        return;
      }

    


  }, false);
