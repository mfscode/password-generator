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

let popUp = document.getElementById("footer")

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
    popUp.classList.add("active");
}

function copy2() {
    var copyThis = document.getElementById("2")
    navigator.clipboard.writeText(copyThis.value)
    popUp.classList.add("active");
}

function copy3() {
    var copyThis = document.getElementById("3")
    navigator.clipboard.writeText(copyThis.value)
    popUp.classList.add("active");
}

function copy4() {
    var copyThis = document.getElementById("4")
    navigator.clipboard.writeText(copyThis.value)
    popUp.classList.add("active");
}

function removeClass() {
    popUp.classList.remove("active");
}

function completeSet1() {
    copy1()
    setTimeout(removeClass, 2000);
}

function completeSet2() {
    copy2()
    setTimeout(removeClass, 2000);
}

function completeSet3() {
    copy3()
    setTimeout(removeClass, 2000);
}

function completeSet4() {
    copy4()
    setTimeout(removeClass, 2000);
}


// console.log(available)