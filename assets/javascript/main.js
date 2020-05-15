const dieRolls = []
const rollButton = document.querySelector('#roll-button')
let userInput = document.querySelector('input')
let totalValue = document.querySelector('#total')
let allRollsButton = document.querySelector('#show-all-rolls-button')
let listElement = document.querySelector('#all-rolls')
let resetButton = document.querySelector('#reset')


rollButton.addEventListener("click", function () {
    let diceInput = document.querySelector('#dice-number').value
    let counter = 0
    let total = 0
    while (counter < userInput.value) {

        diceInput = Math.floor(Math.random() * 6) + 1;
        counter += 1
        total += diceInput
        console.log(diceInput)
        dieRolls.push(diceInput);

    }

    totalValue.innerHTML = 'The sum of the rolls is ' + total
})


allRollsButton.addEventListener("click", function () {
    let counter = 0

    while (counter < dieRolls.length) {

        listElement.innerHTML += "<li>" + dieRolls[counter] + "</li>";

        counter += 1
    }

})

resetButton.addEventListener('click', function () {
    userInput.value = newCounterValue = ' ';
    totalValue.innerHTML = newCounterValue = 'The sum of the rolls is ' + 0;
    listElement.innerHTML = newCounterValue = ' ';

})