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
  const parentDiv = createDiv(["msg", "right-msg"]);
  const imgDiv = createDiv(["msg-img"]);
  const bubble = createDiv(["msg-bubble"]);
  const infoDiv = createDiv(["msg-info"]);
  const timeDiv = createDiv(["msg-info-time"], formatDate(new Date()));
  const textDiv = createDiv(["msg-text"], text);
  
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

function createDiv(classArr, inner) {
  const newDiv = document.createElement("div");
  if(classArr !== undefined) {
    newDiv.classList.add(...classArr);
  }
  if(inner !== undefined) {
    newDiv.innerText = inner;
  }
  return newDiv;
}