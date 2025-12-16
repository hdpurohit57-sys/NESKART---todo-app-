let todos = JSON.parse(localStorage.getItem("todos")) || [];

const list = document.getElementById("todoList");

function render() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span onclick="toggle(${index})" class="${todo.done ? 'done' : ''}">
        ${todo.text}
      </span>
      <button onclick="removeTodo(${index})">❌</button>
    `;
    list.appendChild(li);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {
  const input = document.getElementById("todoInput");
  if (input.value === "") return;
  todos.push({ text: input.value, done: false });
  input.value = "";
  render();
}

function removeTodo(index) {
  todos.splice(index, 1);
  render();
}

function toggle(index) {
  todos[index].done = !todos[index].done;
  render();
}

render();

