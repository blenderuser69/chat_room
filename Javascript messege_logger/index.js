const message = document.getElementById("Messagefield");
const canvas = document.getElementById("message_canvas");
const button = document.getElementById("text_input");

// Load saved messages
const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
savedMessages.forEach(text => addMessage(text));

button.addEventListener("click", function() {
    const text = message.value.trim();
    if (text === "") return alert("This message contains no text!");

    addMessage(text);

    // Save to localStorage
    savedMessages.push(text);
    localStorage.setItem("messages", JSON.stringify(savedMessages));

    message.value = "";
});

function addMessage(text) {
    const msgElement = document.createElement("p");
    msgElement.textContent = text;
    msgElement.className = "bg-pink-600 text-white p-2 my-1 rounded-lg shadow";
    canvas.appendChild(msgElement);
    canvas.scrollTop = canvas.scrollHeight;
}
