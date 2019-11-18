/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let timeHour = time.split(':')[0]
  let timeInt = parseInt(timeHour)

  if (timeInt<12){
    return("Good Morning")
  }

  if (timeInt>12 && timeInt<17){
    return("Good Afternoon")
  }

  if (timeInt>17){
    return("Good Evening")
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  let output = document.getElementById('greeting');
  output.innerText=message;
}