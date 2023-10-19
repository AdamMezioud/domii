const addTodoItemButton = document.getElementById("add-todo-item");
addTodoItemButton.addEventListener("click", () => {
  const newTodoItemText = document.getElementById("new-todo-item").value;
  const newTodoItem = {
    id: Math.random(),
    text: newTodoItemText,
    completed: false,
  };
  const todoList = document.getElementById("todo-list");
  const todoItemElement = document.createElement("li");
  todoItemElement.innerText = newTodoItem.text;
  todoItemElement.id = newTodoItem.id;
  todoList.appendChild(todoItemElement);

  document.getElementById("new-todo-item").value = "";
});
todoList.addEventListener("change", (event) => {
  const todoItemElement = event.target;
  const todoItemId = todoItemElement.id;
  todoItemElement.checked = !todoItemElement.checked;
});
s;
