const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const optionBtns = document.querySelectorAll(".option");

sendBtn.addEventListener("click", () => {
  const input = userInput.value.trim();
  if (input !== "") {
    addMessage("user", input);
    botReply(input);
    userInput.value = "";
  }
});

// Suggestion buttons
optionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const text = btn.innerText;
    addMessage("user", text);
    botReply(text);
  });
});

function addMessage(sender, text) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.innerText = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(input) {
  let response = "";
  const lowerInput = input.toLowerCase();

  if (lowerInput.includes("hi") || lowerInput.includes("hello")) {
    response = "Hello! How are you bro ?";
  } else if (lowerInput.includes("fine")) {
    response = "ok bro. sir which programming langauge you are learning now?";
  } else if (lowerInput.includes("javascript")) {
    response = "nice bro !! keep learning";
  } else if (lowerInput.includes("bye")) {
    response = "Goodbye! Have a great day!";
  } else {
    response = "Sorry, I didn’t understand that.";
  }

  setTimeout(() => {
    addMessage("bot", response);
  }, 500);
}
