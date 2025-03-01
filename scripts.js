const pBox = document.getElementById("password");
const length = 12;

const btn = document.querySelector('.btn');

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = `#$%&'()*+,-./:;<=>?@[^_{|}~`;

const allChars = upperCase + lowerCase + number + symbol;

function createPass(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    pBox.value = password;
}

btn.addEventListener('click',createPass)