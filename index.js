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
  document.getElementById('greeting').innerText = message
}
function greet(timeString) {
     const hourString =  timeString.split(":")[0]
     const hour = parseInt(hourString,10) 
     if ( hour < 12 ) return "Good Morning"
     if ( hour < 17 ) return "Good Afternoon"
     return "Good Evening"
}