/* Set the width of the side navigation to 250px */
function openNav() {
    if(screen.width >= 1200) {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("menu_btn").style.display = "none";
    }
    else if(screen.width <= 1000){
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("menu_btn").style.display = "none";
    }
}
  
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("login").style.display = "none";
    document.getElementById("menu_btn").style.display = "block";
    document.getElementById("mySidenav").style.width = "0";
}

function showLogin(){
    document.getElementById("login").style.display = "block";
}

function login(){
    var userIn = document.getElementById("usr").value;
    var passIn = document.getElementById("pass").value;
    if(userIn == usr && passIn == pass){
        alert("Success");
        document.getElementById("login").style.display = "none";
        document.getElementById("label1").style.display = "none";
        document.getElementById("label2").style.display = "none";
        document.getElementById("title").innerHTML = userIn.toUpperCase() + ",";
        document.getElementById("title").style.display = "block";
        document.getElementById("loginScreen").style.display = "block";
    }
    else{
        alert("Incorrect login")
    }
}

var usr = "admin";
var pass = "admin";