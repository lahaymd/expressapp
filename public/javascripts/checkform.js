console.log(1);
document.addEventListener("submit",function(e){var r=document.getElementById("inputUserName").value;return""==r?(alert("Error: Username cannot be blank!"),void e.preventDefault()):(re=/^\w+$/,re.test(r)?void 0:(alert("Error: Username must contain only letters, numbers and underscores!"),void e.preventDefault()))},!1);