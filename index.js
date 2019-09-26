/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */


function greet(timeString) {
  let realTime = parseInt(timeString);
  if (realTime < 12) {
    return 'Good Morning';
  } else if (12 < realTime && realTime < 17) {
    return "Good Afternoon";
  } else if (realTime > 17) {
    return "Good Evening";
  }
};
/* Write your implementation of displayMessage() */
function displayMessage(content) {
   var s = document.getElementById('greeting');
   s.innerText = "TEST";
};

// describe("displayMessage() function", () => {
//   it("updates the DOM with an appropriate message", () => {
//     let testContent = "TEST"
//     displayMessage(testContent)
//     let content = document.getElementById("greeting").innerText
//     expect(content).to.equal(testContent)
//   })
// })
// })
