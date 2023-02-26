document.querySelector("form").addEventListener("submit", handleSubmitForm);
document.querySelector("ul").addEventListener("click", handleDeleteOrCheck);
document.getElementById("clearAll").addEventListener("click", handleClearAll);

//event handler
function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.getElementById("task");
  if (input.value != "") {
    addTodo(input.value);
  }
  input.value = "";
}

function handleDeleteOrCheck(e) {
  if (e.target.name == "deleteButton") {
    deleteTodo(e);
  }
  if (e.target.name == "checkButton") {
    checkTodo(e);
  }
}

function handleClearAll() {
  document.querySelector("ul").innerHTML = "";
  todoCount();
}

function checkTodo(e) {
  let item = e.target.parentNode;

  if (item.style.textDecoration == "line-through") {
    item.style.textDecoration = "none";
  } else {
    item.style.textDecoration = "line-through";
  }
}

function deleteTodo(e) {
  let item = e.target.parentNode;
  item.remove();
  todoCount();
}

function addTodo(todo) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");

  li.innerHTML = `
  <span class="todo-item">${todo}</span>
  <button name="checkButton"><i class="fas fa-check-square"></i></button>
  <button name="deleteButton"><i class="fas fa-trash"></i></button>
  `;

  li.classList.add("todo-list-item");
  ul.appendChild(li);
  todoCount();
}

function todoCount() {
  let ul = document.querySelector("ul");
  let listItemCount = ul.getElementsByTagName("li");

  let countElement = document.getElementById("todoCount");
  let count = listItemCount.length;

  countElement.innerHTML = `${count} tasks left`;
}
