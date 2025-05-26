let btns = document.querySelectorAll(".btn");
let reset = document.querySelector("#rs");
let newBtn = document.querySelector("#msg-btn");
let mCntr = document.querySelector(".msg-cntr");
let bh = document.querySelector("h3");

let turno = true;
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
];


btns.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("btn was clicked");
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X"
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    })
});

function disableBtn() {
    for (let box of btns) {
        box.disabled = true;
    }
}
function ableBtn() {
    for (let box of btns) {
        box.disabled = false;
        box.innerText = "";
    }
}

function showWinner(winner) {
    bh.innerText = `Congratution, Winner is ${winner}`;
    mCntr.classList.remove("hide");
    disableBtn();
}
const checkwinner = () => {
    for (let pattern of winPattern) {
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                showWinner(pos1);
            }
        } 
     }
};

const reSet = () => {
    turno = true;
    ableBtn();
    mCntr.classList.add("hide");
}

newBtn.addEventListener( "click", reSet);

