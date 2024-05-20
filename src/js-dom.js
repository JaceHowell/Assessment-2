// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

/// TODO: replace this with your code
const button = document.querySelector("#auth")

button.addEventListener("click", () => {
    if (button.innerText === "Log in") {
        button.innerText = "Log out"
    } else if (button.innerText === "Log out") {
        button.innerText = "Log in"
    }
})
// This did only worked one way
// function change() {
//     const button = document.querySelector("#auth")
//     if (button.value === "Log in") button.value = "Log out"
//     else button.value = "Log in"
// }

// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

/// TODO: replace this with your code
const alertButton = document.querySelector("#send-alert")

alertButton.addEventListener("submit", () => {
    alert(`${document.querySelector("#alert-message").value}`)
})

// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

/// TODO: replace this with your code
const adderButton = document.querySelector("#item-adder")

adderButton.addEventListener("dblclick", () => {
    const node = document.createElement("li")
    const textNode = document.createTextNode("Item")
    node.appendChild(textNode)
    document.getElementById("list").appendChild(node)
})

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

/// TODO: replace this with your code
const redButton = document.querySelector("#red")
const blueButton = document.querySelector("#blue")
// const colorChanging = document.querySelector(".changes-colors")

redButton.addEventListener("click", () => {
    const colorChanging = document.querySelectorAll(".changes-colors")
    console.log(colorChanging)
    colorChanging.forEach( (element) => {
        element.style.color = "red"
    })
}) 
blueButton.addEventListener("click", () => {
    const colorChanging = document.querySelectorAll(".changes-colors")
    console.log(colorChanging)
    colorChanging.forEach( (element) => {
        element.style.color = "blue"
    })
}) 

// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

/// TODO: replace this with your code
const inputField = document.querySelector("#factorial-input")
const factorialButton = document.querySelector("#factorial-calculator")
const resultField = document.querySelector("#result")

factorialButton.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = inputField.value
    let f = 1
    for (let i = 1; i <= num; i++) {
        f = i * f
    }
    resultField.innerText = f
})

// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

/// TODO: replace this with your code
const wordArea = document.querySelector("#word")
const validateButton = document.querySelector("#recommend-word")
const feedbackText = document.querySelector(".form-feedback")

validateButton.addEventListener("submit", (e) => {
    e.preventDefault()
    if (wordArea.value.length < 4) {
        feedbackText.innerText = "The word must be at least 4 characters long."
        feedbackText.style.color = "red"
    } else if (wordArea.value.length >= 4) {
        feedbackText.innerText = "Thanks for your submission!"
        feedbackText.style.color = "green"
    }
})