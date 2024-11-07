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
