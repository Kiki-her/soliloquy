const msgForm = document.getElementsByClassName("msger-inputarea");
const msgInput = document.getElementsByClassName("msger-input");
const msgChat = document.getElementsByClassName("msger-chat");
const main = document.getElementsByClassName("msger");
const title = document.getElementsByClassName("msger-header-title");


msgForm[0].addEventListener("submit", (e) => {
    e.preventDefault();
    const msgText = msgInput[0].value;
    if(!msgText) {
        return;
    }

    appendMessage(msgText);
    msgInput[0].value = "";
})

title[0].addEventListener("click", () => {
  title[0].innerText = "BURN IT UP";
  msgChat[0].classList.add("msger-fire");
  main[0].classList.add("fire");
  setTimeout(() => {
    location.reload();
  }, "4000")
})

function appendMessage(text) {
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("msg", "right-msg");

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("msg-img");

    const bubble = document.createElement("div");
    bubble.classList.add("msg-bubble");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("msg-info");

    const timeDiv = document.createElement("div");
    timeDiv.classList.add("msg-info-time");
    timeDiv.innerText = formatDate(new Date());

    const textDiv = document.createElement("div");
    textDiv.classList.add("msg-text");
    textDiv.innerText = text;

    const infoBlock = infoDiv.appendChild(timeDiv);
    bubble.appendChild(infoBlock);
    bubble.appendChild(textDiv);
    parentDiv.appendChild(imgDiv);
    parentDiv.appendChild(bubble);
  
    msgChat[0].appendChild(parentDiv);
    msgChat[0].scrollTop += 500;
  }

function formatDate(date) {
    const hour = "0" + date.getHours();
    const min = "0" + date.getMinutes();

    return `${hour.slice(-2)}:${min.slice(-2)}`;
}