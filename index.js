var data = 0;

document.getElementById("counting").innerText = data;

function increment() {
    data = data + 1;
    data = data < 0 ? 0 : data;
    document.getElementById("counting").innerText = data;
}

function reset() {
    data = 0;
    document.getElementById("counting").innerText = data;
}

function decrement() {
    data = data - 1;
    data = data < 0 ? 0 : data;
    document.getElementById("counting").innerText = data;
}
Footer
