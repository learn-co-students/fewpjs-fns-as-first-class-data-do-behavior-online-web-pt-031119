/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time) {
 let hour = time.split(":")[0]
if (parseInt(hour) < 12){
  return "Good Morning"  
} else if (parseInt(hour) < 17) {
  return "Good Afternoon"
}
else {
  return "Good Evening"
}
}

function displayMessage(string) {
  document.getElementById("greeting").innerText = string
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
