const input = document.getElementById("input");
const output = document.getElementById("output");

function calculation() {
    const data = input.value;
    const arrayNumber = data.split(", ")
    let sum = 0;
    for(let i = 0; i < arrayNumber.length; i++){
        let index = parseFloat(arrayNumber[i])
            sum = sum + index;
        }
        output.innerText = sum;
}