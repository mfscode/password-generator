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

const available = Array.from(lowerCase + upperCase + symbolsArr)

let theValue = {
    one: available[Math.floor(Math.random() * 60)],
    two: available[Math.floor(Math.random() * 60)],
    three: available[Math.floor(Math.random() * 60)],
    four: available[Math.floor(Math.random() * 60)]
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
        theValue.one += available[Math.floor(Math.random() * 60)];
        theValue.two += available[Math.floor(Math.random() * 60)];
        theValue.three += available[Math.floor(Math.random() * 60)];
        theValue.four += available[Math.floor(Math.random() * 60)];
    }
    firstBtn.value = theValue.one;
    secondBtn.value = theValue.two;
    thirdBtn.value = theValue.three;
    fourthBtn.value = theValue.four;
}

function copy1() {
    var firstPw = document.getElementById("1")
    firstPw.select()
    navigator.clipboard.writeText(firstPw.value)
}




console.log(firstBtn.innerText)