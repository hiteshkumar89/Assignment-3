
let userInput = parseInt(prompt("Enter a number to count down from:"));
if (!isNaN(userInput)) {
  for (let i = userInput; i >= 0; i--) {
    console.log(i);
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}
