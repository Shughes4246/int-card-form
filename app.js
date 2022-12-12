const cNameInput = document.querySelector('input#cName');
const cNameOutput = document.querySelector('#cardName');
const cNameError = document.querySelector('.nameError');

const cNumberInput = document.querySelector('input#cNumber');
const cNumberOutput = document.querySelector('#cardNumber');
const cNumberErrorBlank = document.querySelector('.numberErrorBlank');
const cNumberErrorFormat = document.querySelector('.numberErrorFormat');

const monthInput = document.querySelector('#expMonth');
const monthOutput = document.querySelector('#expiryDateMonth');
const monthError = document.querySelector('.monthError');

const yearInput = document.querySelector('#expYear');
const yearOutput = document.querySelector('#expiryDateYear');
const yearError = document.querySelector('.yearError');

const cvcInput = document.querySelector('input#cvc');
const cvcOutput = document.querySelector('#cvcNumber');
const cvcError = document.querySelector('.cvcError');

const submitBtn = document.querySelector('input[type=submit]')
const thankYouBtn = document.querySelector('.thankYou button')

//input functions
function cNameText() {
    cNameOutput.innerHTML = cNameInput.value;
}

function cNumberText() {
    let formattedNumber = cNumberInput.value.toString().replace(/\d{4}(?=.)/g, '$& '); 
    cNumberOutput.innerHTML = formattedNumber;
}

function monthText() {
    monthOutput.innerHTML = monthInput.value + '/';
}

function yearText() {
    yearOutput.innerHTML = yearInput.value;
}

function cvcText() {
    cvcOutput.innerHTML = cvcInput.value;
}

cNameInput.addEventListener('keyup', cNameText);
cNumberInput.addEventListener('keyup', cNumberText);
cvcInput.addEventListener('keyup', cvcText);

//validation functions
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if(cNameInput.value == false) {
        cNameError.classList.add('show');
        cNameInput.style.border = "1px solid var(--red)";
    } else {
        cNameError.classList.remove('show');
        cNameInput.style.border = "1px solid var(--light-gray-violet)";
    }

    if(cNumberInput.value == false) {
        cNumberErrorBlank.classList.add('show');
        cNumberInput.style.border = "1px solid var(--red)";
    } else {
        cNumberErrorBlank.classList.remove('show');
        cNumberInput.style.border = "1px solid var(--light-gray-violet)";
    }

    // const numberFormatTest = cNameInput.value;
    // if(/[0-9]{16}/.test(numberFormatTest) == false) {
    //     cNumberErrorFormat.classList.add('show');
    //     cNumberInput.style.border = "1px solid var(--red)";
    // } else {
    //     cNumberErrorFormat.classList.remove('show');
    //     cNumberInput.style.border = "1px solid var(--light-gray-violet)";
    // }

    if(monthInput.value == false) {
        monthError.classList.add('show');
        monthInput.style.border = "1px solid var(--red)";
    } else {
        monthError.classList.remove('show');
        monthInput.style.border = "1px solid var(--light-gray-violet)";
    }

    if (yearInput.value == false) {
        yearError.classList.add('show');
        yearInput.style.border = "1px solid var(--red)";
    } else {
        yearError.classList.remove('show');
        yearInput.style.border = "1px solid var(--light-gray-violet)";
    }

    if (cvcInput.value == false) {
        cvcError.classList.add('show');
        cvcInput.style.border = "1px solid var(--red)";
    } else {
        cvcError.classList.remove('show');
        cvcInput.style.border = "1px solid var(--light-gray-violet)";
    }

    if (!cNameError.classList.contains('show') &&
    !cNumberErrorBlank.classList.contains('show') && 
    !cNumberErrorFormat.classList.contains('show') &&
    !monthError.classList.contains('show') &&
    !yearError.classList.contains('show') &&
    !cvcError.classList.contains('show')) {
        document.querySelector(".card-input").style.display = "none";
        document.querySelector(".thankYou").style.display = "flex";
    }
});

thankYouBtn.addEventListener('click', function () {
    document.querySelector(".card-input").style.display = "block";
    document.querySelector(".thankYou").style.display = "none";
    document.querySelector('.card-input form').reset();
    const removeQueryString = window.location.href.split('?')[0];
    window.location.href = removeQueryString;
});