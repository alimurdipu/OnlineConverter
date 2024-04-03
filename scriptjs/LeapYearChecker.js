const input = document.getElementById("input");
const output = document.getElementById("output");

// function calculation() {
//     const inputValue = input.value;
//     if(inputValue % 4 == 0){
//         output.innerText = "Leapyear"
//     } else {output.innerText = "Not Leapyear"}
// }

function calculation() {
    const numbers = input.value;
    if(numbers % 4 == 0) {
        return (output.innerText =`this ${numbers} is Leapyear `)
    }
    return (output.innerText = `this ${numbers} is Not Leapyear`)
}