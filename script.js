const msgForm = document.getElementsByClassName("msger-inputarea");
const msgInput = document.getElementsByClassName("msger-input");
const msgChat = document.getElementsByClassName("msger-chat");


msgForm[0].addEventListener("submit", (e) => {
    e.preventDefault();
    const msgText = msgInput[0].value;
    if(!msgText) {
        return;
    }

    appendMessage(msgText);
    msgInput[0].value = "";
})

function appendMessage(text) {
    const msgHTML = `
    <div class="msg right-msg">
      <div class="msg-img" ></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;
  
    msgChat[0].insertAdjacentHTML("beforeend", msgHTML);
    msgChat[0].scrollTop += 500;
  }

function formatDate(date) {
    const hour = "0" + date.getHours();
    const min = "0" + date.getMinutes();

    return `${hour.slice(-2)}:${min.slice(-2)}`;
}