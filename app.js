let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let inputValue = document.getElementById("input");
let output = document.getElementById("output");
let btn = document.getElementById("btn");

function thing() {
    let value = parseInt(inputValue.value)
    console.log(value);
    let h2 = document.createElement("h2")
    output.appendChild(h2)
    if (a.checked) {
        h2.innerText = value * 2;
    } else if (b.checked) {
        h2.innerText = value / 2;
    } else if (c.checked) {
        h2.innerText = value + 10;
    }
    return null;
}

btn.addEventListener("click", thing)