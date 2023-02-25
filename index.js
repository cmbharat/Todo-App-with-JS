document.querySelector("form").addEventListener("submit", handleSubmitForm);
document.querySelector("ul").addEventListener("click", handleDeleteOrCheck);
document.getElementById("clearAll").addEventListener("click", handleClearAll);

//event handler
function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.getElementById("task");
  if (input.value != "") {
    console.log(input.value);
    addTodo(input.value);
  }
  input.value = "";
}

function handleDeleteOrCheck(e) {
  //   e.preventDefault();
  console.log(e.target.name);
  if (e.target.name == "deleteButton") {
    deleteTodo(e);
  }
  if (e.target.name == "checkButton") {
    checkTodo(e);
  }
}

function handleClearAll() {
  document.querySelector("ul").innerHTML = "";
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
  console.log("inside delete");
  let item = e.target.parentNode;
  item.remove();
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
}
