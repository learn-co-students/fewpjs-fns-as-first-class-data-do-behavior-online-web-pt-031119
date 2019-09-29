/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


//const time = document.getElementById('time')

function displayMessage(message) {
  document.getElementById('greeting').innerHTML = message
}


function greet(time) {
  return `${time}`
}