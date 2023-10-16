let winnerNumber;

//HTML elements
const startElement = document.getElementById("start-game");
const buttonSideElement = document.getElementById("buttons");
const buttonListElement = document.getElementById("button-list");
const answerElement = document.getElementById("answer");
const messageElement = document.getElementById("message");

function startGame() {
    let buttonNumbers = Number(document.getElementById("number").value);
    if (300 > buttonNumbers > 0) {
        winnerNumber = Math.floor(Math.random() * buttonNumbers) + 1;
        startElement.setAttribute("hidden", "");
        createButtonsListElements(buttonNumbers);
    } else { 
        alert("You must to write a number!")
    };
};

function createButtonsListElements(number) { 
    buttonSideElement.removeAttribute("hidden");
    for (let i = 1; i <= number; i++) { 
        let btnElement = createBtnElement(i);
        buttonListElement.appendChild(btnElement);
    };
};

function createBtnElement(numberText) { 
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-primary", "m-3", "size-up");
    btn.innerText = numberText;
    btn.onclick = function () {
        if (btn.innerText == winnerNumber) {
            showWinMsg();
        } else { 
            showLoseMsg();
        }
    };
    return btn;
};

function hideButtonsShowAnswer() {
    answerElement.removeAttribute("hidden");
    buttonSideElement.setAttribute("hidden", "");
};

function showWinMsg() { 
    hideButtonsShowAnswer();
    messageElement.innerText = `You WIN!!!\n  Winner button was ${winnerNumber}`;
};

function showLoseMsg() {
    hideButtonsShowAnswer();
    messageElement.innerText = `You LOSE!!! \n  Winner button was ${winnerNumber}`;
};

function goToStart() {
    startElement.removeAttribute("hidden");
    answerElement.setAttribute("hidden", "");
    buttonListElement.innerHTML = "<!-- button content -->";
};