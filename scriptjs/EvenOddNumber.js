const input = document.getElementById("input");
const output = document.getElementById("output");

// function calculation() {
//     const inputValue = input.value; 
//     if(inputValue % 2 == 0) {
//         output.innerText = "even";
//     } else{
//         output.innerText = "odd";
//     }
// }

function calculation() {
    const numbers = input.value;
    if(numbers % 2 == 0) {
        return (output.innerText = `this ${numbers} is even`)
    }
    return (output.innerText = `this ${numbers} is odd`)
}