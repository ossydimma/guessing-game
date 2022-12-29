//assigning number to be guessed and number of attempts(line 1&2)
const number = Math.floor(Math.random() * 50) + 1;
let count = 0;
//let enter = document.getElementById("enter");
//let again = document.getElementById("again");


//creating a function and increasing it by 1 each time it runs(line 9&10)
 enter.addEventListener('click',  function () {
    count ++

    // getting input value from html and assigning it to guess
    let guess = document.getElementById('guess').value;
    
    //comparing guess to the gernerated number(line 16 to 28)
    if (guess == number) {
        document.getElementById('feedback').innerText = `You got it right, at ${count} attempts,   click Try again to refresh the game.`
        feedback.style.color = "lightgreen"
    }
    //giving user hints, whether the input is greater or less than number (line 21 to 28)
    else if (guess > number) {
        document.getElementById('feedback').innerText = "Your guess was too high"
        feedback.style.color = "red"
    }
    else if (guess < number) {
        document.getElementById('feedback').innerText = "Your guess was too low"
        feedback.style.color = "red"
    }
    //making sure the input == number(line 30 to 33)
    else if (isNaN(guess)) {
        document.getElementById('feedback').innerText = "Enter a number"
        feedback.style.color = "red"
    }

})
//recalling the function each time user clicks on TRY AGAIN
again.addEventListener("click", function () {
    location.reload();
})
