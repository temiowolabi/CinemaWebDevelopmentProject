//function validateForm(){
//    var x = document.forms["loginForm"]["fname"].value;
//    var y = document.forms["loginForm"]["pass"].value;
//    
//if ((x =="")&&(y==""))
//{
//   alert ("Username and Password must be filled out.");
//}
//
//else if (x == "")
//{
//    alert ("Username must be filled out!");
//}
//
//else if (y == "")
//{
//    alert ("Password must be filled out!");
//}
//else
//{
//    alert ("Welcome Back!");
//    window.location.href = 'index.html';
//}
//return false;
//}
function validateForm()
{
    var x = document.forms["loginForm"]["username"].value;
    var y = document.forms["loginForm"]["password"].value;

    if((x==="")&&(y==""))
    {
        alert("Username and Password must be filled out");
    }
    else if(x=="")
    {
        alert("Username must be filled out");
    }
    else if(y=="")
    {
        alert("Password must be filled out");
    }
    else
    {
        alert("Thank you for filling in this form");
        window.location.href = 'index.html';
    }
}

// Set the date we're counting down to
var countDownDate = new Date("Jan 17, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text

}, 1000);


var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer");
var tabPanels=document.querySelectorAll(".tabContainer .tabPanel");


function openCity(evt, cityName) {
// Declare all variables
var i, tabcontent, tablinks;

// Get all elements with class="tabcontent" and hide them
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

// Get all elements with class="tablinks" and remove the class "active"
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}

// Show the current tab, and add an "active" class to the button that opened the tab
document.getElementById(cityName).style.display = "block";
evt.currentTarget.className += " active";
}

//function validateForm()
//{
//    var x = document.forms["myForm"]["fname"].value;
//}
//
//    if(x==="")
//    {
//        alert("First and Surname must be filled out");
//    }
