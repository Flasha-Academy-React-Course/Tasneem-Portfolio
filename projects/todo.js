const input = document.getElementById("taskInput");
const button = document.getElementById("addTask");
const list = document.getElementById("taskList");

button.addEventListener("click", function () {
    if (input.value.trim() === "") {
        return;
    }

    const item = document.createElement("li");
    item.textContent = input.value;
    list.appendChild(item);
    input.value = "";
});
