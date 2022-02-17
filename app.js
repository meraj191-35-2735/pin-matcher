function getPin() {
    const pin = Math.random() * 10000;
    const createdPin = parseInt(pin);
    return createdPin;
}

function generatePin() {
    const pin = getPin();
    document.getElementById('pin-display').value = pin;
}
document.getElementById('generate-pin').addEventListener('click', function() {
    generatePin();
})
document.getElementById('calc-keypad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('input-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const previousNumber = calcInput.value;
        const nextNumber = previousNumber + number;
        calcInput.value = nextNumber;
    }

})
document.getElementById('submit').addEventListener('click', function() {
    const pin = document.getElementById('pin-display').value;
    const typedPin = document.getElementById('input-numbers').value;
    if (pin == typedPin) {
        const successMessage = document.getElementById('notify-success');
        successMessage.style.display = 'block';
        const failMessage = document.getElementById('notify-failed');
        failMessage.style.display = 'none';

    } else {
        const failMessage = document.getElementById('notify-failed');
        failMessage.style.display = 'block';
        const successMessage = document.getElementById('notify-success');
        successMessage.style.display = 'none';
    }
})