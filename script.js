let pass = {
    one: "",
    two: "",
    three: "",
    four: ""
}

let alphabet = 'qwertyuiopasdfghjklzxcvbnm'
let lowerCase = alphabet.split(" ")
let upperCase = alphabet.toUpperCase().split(" ")
let symbols = '!@#$%&<>'
let symbolsArr = symbols.split(" ")
let numbers = Array.from(Array(10).keys())

const available = Array.from(lowerCase + upperCase + symbolsArr + numbers)

let theValue = {
    one: available[Math.floor(Math.random() * 79)],
    two: available[Math.floor(Math.random() * 79)],
    three: available[Math.floor(Math.random() * 79)],
    four: available[Math.floor(Math.random() * 79)]
}



let firstBtn = document.getElementById("1");
let secondBtn = document.getElementById("2");
let thirdBtn = document.getElementById("3");
let fourthBtn = document.getElementById("4");

onload

function generate() {
    theValue.one = ""
    theValue.two = ""
    theValue.three = ""
    theValue.four = ""
    for (let i = 0; i < 8; i++) {
        theValue.one += available[Math.floor(Math.random() * 79)];
        theValue.two += available[Math.floor(Math.random() * 79)];
        theValue.three += available[Math.floor(Math.random() * 79)];
        theValue.four += available[Math.floor(Math.random() * 79)];
    }
    firstBtn.value = theValue.one;
    secondBtn.value = theValue.two;
    thirdBtn.value = theValue.three;
    fourthBtn.value = theValue.four;
}

function copy1() {
    var copyThis = document.getElementById("1")
    navigator.clipboard.writeText(copyThis.value)
}

function copy2() {
    var copyThis = document.getElementById("2")
    navigator.clipboard.writeText(copyThis.value)
}

function copy3() {
    var copyThis = document.getElementById("3")
    navigator.clipboard.writeText(copyThis.value)
}

function copy4() {
    var copyThis = document.getElementById("4")
    navigator.clipboard.writeText(copyThis.value)
}



console.log(available)