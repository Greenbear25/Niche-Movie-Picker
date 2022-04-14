var buttons = document.querySelector("#buttons");
const button1 = document.getElementById("comedy")
const button2 = document.getElementById("drama")
const button3 = document.getElementById("horror")
var buttonSelected = document.getElementsByClassName(".button")

buttons.addEventListener('click', function(event){    
    window.open(
        "2nd.html", "_blank"
    );
})

const onClick = function() {
    sessionStorage.setItem('genre', this.id);
    // console.log(sessionStorage);
    //if theres data in storage already, clear and then add
  }
  document.getElementById("comedy").onclick = onClick;
  document.getElementById("drama").onclick = onClick;
  document.getElementById("horror").onclick = onClick;