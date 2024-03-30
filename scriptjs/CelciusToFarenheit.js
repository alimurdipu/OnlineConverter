const input = document.getElementById("input");
const output = document.getElementById("output");

function calculation() {
    const celcius = input.value;
    const farenheit = celcius * 33.8;
    output.innerText = farenheit;
}