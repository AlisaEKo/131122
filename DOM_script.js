// document.addEventListener("click", clickMe);

// document.addEventListener("click", function clickMe() {
//     document.getElementById("hw").innerHTML = "Good Evening";
// })


// document.getElementById.addEventListener("oncopy", myFunction());

// function myFunction() {
//     document.getElementById("demo").innerHTML = "You copied text!" ;
// };



document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerText = Date();
}