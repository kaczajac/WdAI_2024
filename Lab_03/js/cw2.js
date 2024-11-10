const minLength = document.getElementById("minLength");
const maxLength = document.getElementById("maxLength");
const bigLetters = document.getElementById("bigLetters");
const symbols = document.getElementById("symbols");
const generator = document.getElementById("generator");

const randomPassword = {
    lower: getRandomLower,
    upper: getRandomUpper,
    symbol: getRandomSymbol
}

function generatePassword (length, upper, symbol) {
    let password = '';
    let lower = true;

    const typesCount = upper + symbol + lower;
    const typesArray = [{upper}, {symbol}, {lower}].filter(item => Object.values(item)[0]);

    for (let i = 0; i < length; i += typesCount){
        typesArray.forEach(type => {
            const name = Object.keys(type)[0];
            password += randomPassword[name]();
        })
    }

    alert(password.slice(0, length));

}

generator.addEventListener('click', () => {
    const length = Math.floor((Math.random() * (Number(maxLength.value) + 1)) + (Number(minLength.value)));
    const haveBigLetters = bigLetters.checked;
    const haveSymbols = symbols.checked;

    generatePassword(length, haveBigLetters, haveSymbols);
})

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomSymbol() {
    const symbols = '!@#$^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
