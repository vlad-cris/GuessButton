let winnerNumber;

function startGame() {
    let buttonNumbers = Number(document.getElementById("number").value);
    if (300 > buttonNumbers > 0) {
        winnerNumber = Math.floor(Math.random(3) * buttonNumbers) + 1;
        document.getElementById("start-game").setAttribute("hidden", "");
        createButtonsList(buttonNumbers);
    } else { 
        alert("You must to write a number!")
    }
}

function createButtonsList (number) { 
    document.getElementById("buttons").removeAttribute("hidden");
    let btnList = document.getElementById("button-list");
    for (let i = 1; i <= number; i++) { 
        let btnElement = createBtnElement(i);
        btnList.appendChild(btnElement);
    }
}

function createBtnElement (numberText) { 
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-primary", "m-3", "size-up");
    btn.innerText = numberText;
        btn.onclick = function () {
            if (btn.innerText == winnerNumber) {
                document.getElementById("answer").removeAttribute("hidden");
                document.getElementById("win_msg").innerText = `You WIN!!!\n  Winner button was ${winnerNumber}`;
                document.getElementById("buttons").setAttribute("hidden", "");
            } else { 
                document.getElementById("answer").removeAttribute("hidden");
                document.getElementById("win_msg").innerText = `You LOSE!!! \n  Winner button was ${winnerNumber}`;
                document.getElementById("buttons").setAttribute("hidden", "");
            }
        };
    return btn;
};

function goToStart () {
    document.getElementById("start-game").removeAttribute("hidden");
    document.getElementById("answer").setAttribute("hidden", "");
    document.getElementById("button-list").innerHTML = "<!-- button content -->";
};
