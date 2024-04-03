const input = document.getElementById("input");
const output = document.getElementById("output");

function calculation() {
    const miles = input.value;
    const km = miles * 1.609344;
    const kmTodecimal = km.toFixed(2);
    output.innerText = kmTodecimal;
}