 const form = document.querySelector("form");
const ulEl = document.querySelector("ul");

const todos = [
  {
    id: 0,
    title: "Wake up",
    checked: true,
  },
];

let nextId = todos.length;

const drawTodos = () => {
  ulEl.innerHTML = "";
  todos.forEach((todo) => {
    const todoEl = document.createElement("li");

    const checkEl = document.createElement("input");
    checkEl.type = "checkbox";
    checkEl.checked = todo.checked;
    checkEl.addEventListener("change", () => {
        todo.checked = checkEl.checked;
        drawTodos();
    });



    const titleEl = document.createElement("span");
    titleEl.innerHTML = todo.title;
    if (todo.checked) {
        titleEl.style.textDecoration = "line-through";
    } else {
        titleEl.style.textDecoration = "none";
    }




    const deleteEl = document.createElement("button");
    deleteEl.innerText = "Delete";
    deleteEl.classList.a("delete-btn");
    deleteEl.addEventListener("click", () => {
        todos.splice(todos.indexOf(todo), 1);
        drawTodos();
    });

    todoEl.appendChild(checkEl);
    todoEl.appendChild(titleEl);
    todoEl.appendChild(deleteEl);

    ulEl.appendChild(todoEl);
  });
//   for (let i = 0; i < todos.length; i++) {
//     const todo = todos[i];

//     const todoEl = document.createElement("li");
//     todoEl.innerText = todo.title;
//     todoEl.style.textDecoration = "line-through";

//     const checkEl = document.createElement("input");
//     checkEl.type = "checkbox";
//     if (todo.checked) {
//       checkEl.checked = "checked";
//     }

//     const deleteEl = document.createElement("button");
//     deleteEl.innerText = "delete";

//     todoEl.prepend(checkEl);
//     todoEl.appendChild(deleteEl);

//     ulEl.appendChild(todoEl);
//   }
};

drawTodos();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = {
    id: nextId,
    title: form.title.value,
    checked: false,
  };
  todos.push(newTodo);
  nextId++;
  form.title.value = "";
  drawTodos();
}); 
 