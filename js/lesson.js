const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')
 const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/


phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerHTML = 'NOT Ok'
        phoneResult.style.color = "red"

    }
}


// Converter

const usdInput = document.querySelector('#usd');
const somInput = document.querySelector('#som');
const eurInput = document.querySelector('#eur');

const converter = (element, targetElement, twoTargetElement) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();

        request.onload = () => {
            const data = JSON.parse(request.response);
            const value = parseFloat(element.value);
            if (element.id === 'som') {
                targetElement.value = (value / data.usd).toFixed(2);
                twoTargetElement.value = (value / data.eur).toFixed(2);
            } else if (element.id === 'usd') {
                targetElement.value = (value * data.usd).toFixed(2);
                twoTargetElement.value = (value * data.usd / data.eur).toFixed(2);
            } else if (element.id === 'eur') {
                targetElement.value = (value * data.eur).toFixed(2);
                twoTargetElement.value = (value * data.eur / data.usd).toFixed(2);
            }
        };
    };
};
converter(somInput, usdInput, eurInput);
converter(usdInput, somInput, eurInput);
converter(eurInput, somInput, usdInput);

//
