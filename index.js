/* Given Code, don't edit */

const handleClick = (e) => {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

const greet = (timeString) => {
  const chars = timeString.split(':')
  const num = parseInt(chars[0], 10) 
  if (num < 12) {
    return "Good Morning"
  } else if (num >= 12 && num <= 17) {      
    return "Good Afternoon"
  } else { 
    return "Good Evening"
  }
}

const displayMessage = (str) => {
  let string = document.getElementById("greeting")
  string.innerText = str
}






