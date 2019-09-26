/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
let newTime = parseInt(time, 10);

if (newTime < 12) {
  return "Good Morning";
} else if (newTime < 17) {
  return "Good Afternoon";
} else {
  return "Good Evening"
  }

}

function displayMessage(string) {
  let input = document.getElementById("greeting")
  inputer.innerText = string
}