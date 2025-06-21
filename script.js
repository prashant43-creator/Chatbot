const userInput = document.getElementById("user-input");
const btn = document.getElementById("send-btn");
const chatbox = document.getElementById("chat-box");

btn.addEventListener("click",()=> {
  
  const input = userInput.value.trim();
  if (input !== "") {
    addmessage("user",input);
    botreply(input)
    userInput.value = "";
  }
}  )
function addmessage(sender,text){
  const message = document.createElement("div");
  message.classList.add("message",sender)
  message.innerText = text ;
  chatbox.appendChild(message)
   chatbox.scrollTop = chatbox.scrollHeight ;
  
}
function botreply(input){
  let response = ""; 
   const lowercase = input.toLowerCase()
   if (lowercase.includes("hi")||lowercase.includes("hello")  ) {
     response = "yes sir , how are you ?"
   }else if (lowercase.includes("fine") ) {
     response = `ok.
     
     sir which Programming langauge you are learning now 🤔??
     `
   }else if(lowercase.includes("javascript")  ){
     response = "nice sir. keep learning.🤗"
   }else if(lowercase.includes("thank you")  ){
     response = "welcome!"
   }else if(lowercase.includes("bye")  ){
     response = "Goodbye! Have a nice day"
   }
   
   else{
     response = "Sorry I didn't understand that."
   }
   
   
   
   
   setTimeout(()=> {
     addmessage("bot",response )
     
   },500)
}
const optionBtns = document.querySelectorAll(".option");

optionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const text = btn.innerText;
    addmessage("user", text);
    botreply(text);
  });
});
