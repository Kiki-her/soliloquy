const msgForm = document.getElementsByClassName("msg-form");
const msgInput = document.getElementsByClassName("msg-input");
const msgChat = document.getElementsByClassName("msg-chat");

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
    //   Simple solution for small apps
    const msgHTML = `
      <div class="right-msg">
        <div class="msg-icon"></div>
  
        <div class="msg-text">
          <div class="msg-info">
            <div class="msg-time">${formatDate(new Date())}</div>
          </div>
          <div class="msg-main-text">${text}</div>
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