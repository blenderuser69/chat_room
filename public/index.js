const message = document.getElementById("Messagefield");
const canvas = document.getElementById("message_canvas");
const button = document.getElementById("text_input");

// Load messages from server
fetch("/messages")
  .then(res => res.json())
  .then(messages => messages.forEach(addMessage));

button.addEventListener("click", async () => {
  const text = message.value.trim();
  if (text === "") return alert("Empty message");

  addMessage(text);
  message.value = "";

  // Save to server
  await fetch("/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
});

function addMessage(text) {
  const msgElement = document.createElement("p");
  msgElement.textContent = text;
  msgElement.className = "bg-pink-600 text-white p-2 my-1 rounded-lg shadow";
  canvas.appendChild(msgElement);
  canvas.scrollTop = canvas.scrollHeight;
}
