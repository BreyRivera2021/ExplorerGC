var usr = "admin";
var pass = "admin";
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("overlay").style.display = "block";
    if(screen.width >= 1200) {
        document.getElementById("mySidenav").style.width = "250px";
    }
    else if(screen.width <= 1000){
        document.getElementById("mySidenav").style.width = "100%";
    }
}
  
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("login").style.display = "none";
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

function showFriends(){
    document.getElementById("sidebar_friends").style.width = "250px";
    document.getElementById("friends_tab").style.backgroundColor = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
    document.getElementById("friend_text").style.color = "white";
    document.getElementById("close_btn").style.display = "none";
    //close stats
    document.getElementById("sidebar_stats").style.width = "0px";
    document.getElementById("stats_tab").style.backgroundColor = "transparent";
    document.getElementById("stat_text").style.color = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
    //close groups
    document.getElementById("sidebar_groups").style.width = "0px";
    document.getElementById("groups_tab").style.backgroundColor = "transparent";
    document.getElementById("group_text").style.color = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
    //close profile
    document.getElementById("sidebar_profile").style.width = "0px";
    document.getElementById("profile_tab").style.backgroundColor = "transparent";
    document.getElementById("profile_text").style.color = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
}

function closeFriends(){
    document.getElementById("sidebar_friends").style.width = "0px";
    document.getElementById("friends_tab").style.backgroundColor = "transparent";
    document.getElementById("friend_text").style.color = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
    document.getElementById("close_btn").style.display = "block";
}

function showGroups(){
    document.getElementById("sidebar_groups").style.width = "250px";
    document.getElementById("groups_tab").style.backgroundColor = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
    document.getElementById("group_text").style.color = "white";
    document.getElementById("close_btn").style.display = "none";
    //close stats
    document.getElementById("sidebar_stats").style.width = "0px";
    document.getElementById("stats_tab").style.backgroundColor = "transparent";
    document.getElementById("stat_text").style.color = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
    //close friends
    document.getElementById("sidebar_friends").style.width = "0px";
    document.getElementById("friends_tab").style.backgroundColor = "transparent";
    document.getElementById("friend_text").style.color = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
    //close profile
    document.getElementById("sidebar_profile").style.width = "0px";
    document.getElementById("profile_tab").style.backgroundColor = "transparent";
    document.getElementById("profile_text").style.color = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
}

function closeGroups(){
    document.getElementById("sidebar_groups").style.width = "0px";
    document.getElementById("groups_tab").style.backgroundColor = "transparent";
    document.getElementById("group_text").style.color = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
    document.getElementById("close_btn").style.display = "block";
}

function showStats(){
    document.getElementById("sidebar_stats").style.width = "250px";
    document.getElementById("stats_tab").style.backgroundColor = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
    document.getElementById("stat_text").style.color = "white";
    document.getElementById("close_btn").style.display = "none";
    //close groups
    document.getElementById("sidebar_groups").style.width = "0px";
    document.getElementById("groups_tab").style.backgroundColor = "transparent";
    document.getElementById("group_text").style.color = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
    //close friends
    document.getElementById("sidebar_friends").style.width = "0px";
    document.getElementById("friends_tab").style.backgroundColor = "transparent";
    document.getElementById("friend_text").style.color = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
    //close profile
    document.getElementById("sidebar_profile").style.width = "0px";
    document.getElementById("profile_tab").style.backgroundColor = "transparent";
    document.getElementById("profile_text").style.color = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
}

function closeStats(){
    document.getElementById("sidebar_stats").style.width = "0px";
    document.getElementById("stats_tab").style.backgroundColor = "transparent";
    document.getElementById("stat_text").style.color = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
    document.getElementById("close_btn").style.display = "block";
}

function showProfile(){
    document.getElementById("sidebar_profile").style.width = "250px";
    document.getElementById("profile_tab").style.backgroundColor = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
    document.getElementById("profile_text").style.color = "white";
    document.getElementById("close_btn").style.display = "none";
    //close groups
    document.getElementById("sidebar_groups").style.width = "0px";
    document.getElementById("groups_tab").style.backgroundColor = "transparent";
    document.getElementById("group_text").style.color = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
    //close friends
    document.getElementById("sidebar_friends").style.width = "0px";
    document.getElementById("friends_tab").style.backgroundColor = "transparent";
    document.getElementById("friend_text").style.color = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
    //close stats
    document.getElementById("sidebar_stats").style.width = "0px";
    document.getElementById("stats_tab").style.backgroundColor = "transparent";
    document.getElementById("stat_text").style.color = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
}

function closeProfile(){
    document.getElementById("sidebar_profile").style.width = "0px";
    document.getElementById("profile_tab").style.backgroundColor = "transparent";
    document.getElementById("profile_text").style.color = "rgb(" + 52 + "," + 60 + "," + 71 + ")";
    document.getElementById("close_btn").style.display = "block";
}