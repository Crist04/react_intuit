
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

const passwordBox = document.getElementById("password-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}
let i=0;
const generatePassword = (password = "") => {
    i=0;
    if (upperInput.checked) {
        i=1;
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        i=1;
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        i=1;
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        i=1;
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        if(i===0){
            alert("Please select at least one check box");
            return;
        }
        return generatePassword(password)
    }
    passwordBox.value = password;
}

function generate() {
    generatePassword();
}

function copied(){
    passwordBox.select();
    document.execCommand("copy");
    alert("Password Copied");
}


