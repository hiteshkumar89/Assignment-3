let coinFlip;
let numberOfFlips = parseInt(prompt("How many times do you want to flip the coin?"));

for (let i = 0; i < numberOfFlips; i++) {
  coinFlip = Math.round(Math.random());

  if (coinFlip === 0) {
    console.log("Heads");
  } else {
    console.log("Tails");
  }
   console.log(`Coinflip result ${coinFlip}`)
}
