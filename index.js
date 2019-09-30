/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function parseTime(timeString) {
  let hours = parseInt(timeString.split(':')[0], 10)
  // let minutes = parseInt(timeString.split(':')[1], 10)
  if (hours  >= 0 && hours <= 11) {
    return 'Morning'
  } else if (hours >= 12 && hours <= 16) {
    return 'Afternoon'
  } else if (hours >= 17 && hours <= 23) {
    return "Evening"
  }
}

/* Write your implementation of greet() */
function greet(timeString) {
  let timeOfDay = parseTime(timeString)
  return `Good ${timeOfDay}`
}
/* Write your implementation of displayMessage() */

// When the function runs it should update the text inside the #greeting node with the content of the first argument.
function displayMessage(greeting) {
  document.getElementById("greeting").innerText = greeting
}
