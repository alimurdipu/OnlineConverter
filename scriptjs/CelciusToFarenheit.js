const input = document.getElementById("input");
const output = document.getElementById("output");

function calculation() {
    const celcius = input.value;
    const farenheit = celcius * 33.8;
    const farenheitTodecimal = farenheit.toFixed(2)
    output.innerText = farenheitTodecimal;
}