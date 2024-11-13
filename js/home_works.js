// gmail_block
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')


const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'Email is correct';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.innerHTML = 'Incorrect email!';
        gmailResult.style.color = 'red';
    }
};

// MOVE BLOCK
const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');

let positionX = 0, positionY = 0;

const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight


const moveBlock = () => {
    if (positionX < offsetWidth && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;

    } else if (positionX >= offsetWidth && positionY < offsetHeight) {
        positionY++;
        childBlock.style.top = `${positionY}px`;

    }else if (positionY >= offsetHeight && positionX > 0) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX === 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
    } requestAnimationFrame(moveBlock);
};
moveBlock();


// STOP WATCH BLOCK

let seconds = 0, timer = 0;


const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.onclick = () => {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            secondsDisplay.textContent = seconds;
        }, 1000);
    }
};

stopButton.onclick = ()  => {
    clearInterval(timer);
    timer = 0;
};


resetButton.onclick = () => {
    clearInterval(timer);
    timer = 0; seconds = 0;
    secondsDisplay.textContent = seconds;
};




// CHARACTERS.JSON
fetch('../data/characters.json')
    .then(response => response.json())
    .then(data => {
        const characterList = document.querySelector('.characters-list');

        data.forEach(person => {
            const card = document.createElement('div');
            card.classList.add('card');
            const img = document.createElement('img');
            img.src = person.person_photo;
            img.alt = person.name;
            const name = document.createElement('h3');
            name.textContent = person.name;
            const age = document.createElement('p');
            age.textContent = `age: ${person.age}`;
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(age);
            characterList.appendChild(card);
        });
    })
    .catch(error => console.error('error'));

// ANY JSON

//
// const button = document.querySelector('any-button');
// button.onclick = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://localhost:63342/project_AR/data/any.json')
//     xhr.setRequestHeader('Content-type', 'application/json')
//     xhr.send()
//     console.log(xhr)
// }

const button = document.getElementById('any-button');
button.onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:63342/project_AR/data/any.json');
    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(xhr);
        } else {
            console.error(xhr.status);
        }
    };
    xhr.send();
};