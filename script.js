const display = document.getElementById('display')

function appendCharacter(char) {
    if (display.innerText == '0' && char != '.') {
        display.innerText = char;
    } else if (!(char == '.' && display.innerText[display.innerText.length - 1] == '.')) {
        display.innerText += char;
    }
}

function limpar() {
    display.innerText = 0;
}

function resultado() {
    display.innerText = eval(display.innerText)
}