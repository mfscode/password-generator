let pass = {
    one: "",
    two: "",
    three: "",
    four: ""
}

let alphabet = 'qwertyuiopasdfghjklzxcvbnm'
let lowerCase = alphabet.split(" ")
let upperCase = alphabet.toUpperCase().split(" ")

const available = Array.from(lowerCase + upperCase)

let theValue = {
    one: available[Math.floor(Math.random() * 52)],
    two: available[Math.floor(Math.random() * 52)],
    three: available[Math.floor(Math.random() * 52)],
    four: available[Math.floor(Math.random() * 52)]
}



let firstBtn = document.getElementById("1");
let secondBtn = document.getElementById("2");
let thirdBtn = document.getElementById("3");
let fourthBtn = document.getElementById("4");


function generate() {
    theValue.one = ""
    theValue.two = ""
    theValue.three = ""
    theValue.four = ""
    for (let i = 0; i < 8; i++) {
        theValue.one += available[Math.floor(Math.random() * 52)];
        theValue.two += available[Math.floor(Math.random() * 52)];
        theValue.three += available[Math.floor(Math.random() * 52)];
        theValue.four += available[Math.floor(Math.random() * 52)];
    }
    firstBtn.value = theValue.one;
    secondBtn.value = theValue.two;
    thirdBtn.value = theValue.three;
    fourthBtn.value = theValue.four;
}




console.log(available)