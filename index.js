/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

/**
 * Time passed in in format HH:MM
 * e.g.
 * 05:33
 * 12:45
 * 18:23
 * @param {*} time 
 */
function greet(time) {
  let x = time.split(':');
  let hours = parseInt(x[0], 10);
  if (hours < 12) {
    return "Good Morning";
  }
  else if (hours < 17) {
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}


function displayMessage(update) {
  const greeting = document.getElementById('greeting');
  if (greeting) {
    greeting.innerText = update;
  }

}
