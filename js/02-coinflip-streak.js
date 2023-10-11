let coinFlip
let num = parseInt(prompt('Please Enter number that amopunt of times loop executes'))

do {
    coinFlip = Math.round(Math.random())
    if(coinFlip === 0){
        console.log(`Coin Flip Value ${coinFlip} Heads `)
    }
    else {
        console.log(`Coin Flip Value ${coinFlip} Tails`)
    }
} while (coinFlip!=1);
