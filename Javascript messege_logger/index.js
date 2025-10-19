const message = document.getElementById("Messagefield");
const canvas = document.getElementById("message_canvas");
const button = document.getElementById("text_input");

button.addEventListener("click", function() {
    const text = message.value.trim();
    if (text === "") return alert("This message contains no text!");


//if page refreshes its jover
    const msgElement = document.createElement("p");
    msgElement.textContent = text;
    msgElement.className = "bg-pink-600 text-white p-2 my-1 rounded-lg shadow";
//


    canvas.appendChild(msgElement);
    canvas.scrollTop = canvas.scrollHeight;

    message.value = "";
});