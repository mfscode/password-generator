let pass = {
    one: "",
    two: "",
    three: "",
    four: ""
}

let available = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    Math.ceil(Math.random() * 10)
]

function generate() {
    let first = document.getElementById("1");
    first.value = available[Math.floor(Math.random() * 2)][Math.floor(Math.random() * 24)]
}