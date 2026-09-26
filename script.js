let task_input = document.querySelector("#todo-input");
let add_btn = document.querySelector("#add-todo-btn");
let todo_list = document.querySelector("#todo-list");


add_btn.addEventListener("click", async function () {

    let task = task_input.value;

    await postTodo();

});


async function getTodos() {

    try {

        const response = await fetch(
            "https://6ab54e7824ee9d3caa1c5f70.mockapi.io/api/v1/todos"
        );

        const data = await response.json();

        console.log(data);

        if (data) {

            todo_list.innerHTML = "";

            data.forEach(function (todo) {

                let li = document.createElement("li");

                li.className = "todo-task-container";

                li.innerHTML = `
                
                    <div class="todo-tasks">

                        <p class="todo-text">${todo.text}</p>

                        <input 
                            class="edit-input" 
                            type="text" 
                            value="${todo.text}"
                            style="display: none;"
                        >

                        <div class="task-btn">

                            <button class="delete-btn">
                                Delete
                            </button>

                            <button class="edit-btn">
                                Edit
                            </button>

                            <button 
                                class="save-btn"
                                style="display: none;"
                            >
                                Save
                            </button>

                        </div>

                    </div>

                `;


                // -------------------------
                // DELETE
                // -------------------------

                li.querySelector(".delete-btn")
                    .addEventListener("click", function () {

                        deleteTodo(todo.id);

                    });


                // -------------------------
                // EDIT
                // -------------------------

                li.querySelector(".edit-btn")
                    .addEventListener("click", function () {

                        let todoText = li.querySelector(".todo-text");
                        let editInput = li.querySelector(".edit-input");

                        let editButton = li.querySelector(".edit-btn");
                        let saveButton = li.querySelector(".save-btn");


                        // Get Todo ID
                        let todoId = todo.id;

                        console.log("Todo ID:", todoId);


                        // Put existing text into input
                        editInput.value = todoText.innerText;


                        // Hide paragraph
                        todoText.style.display = "none";


                        // Show input
                        editInput.style.display = "inline-block";


                        // Hide Edit button
                        editButton.style.display = "none";


                        // Show Save button
                        saveButton.style.display = "inline-block";

                    });


                // -------------------------
                // SAVE
                // -------------------------

                li.querySelector(".save-btn")
                    .addEventListener("click", async function () {

                        let todoText = li.querySelector(".todo-text");
                        let editInput = li.querySelector(".edit-input");

                        let editButton = li.querySelector(".edit-btn");
                        let saveButton = li.querySelector(".save-btn");


                        // Get Todo ID
                        let todoId = todo.id;

                        console.log("Todo ID:", todoId);


                        // Get new value
                        let newValue = editInput.value.trim();

                        console.log("New Todo:", newValue);


                        // Don't save empty Todo
                        if (newValue === "") {

                            alert("Todo cannot be empty");

                            return;

                        }


                        // Update Todo in API
                        await updateTodo(todoId, newValue);


                        // Update displayed text
                        todoText.innerText = newValue;


                        // Hide input
                        editInput.style.display = "none";


                        // Show paragraph
                        todoText.style.display = "block";


                        // Hide Save button
                        saveButton.style.display = "none";


                        // Show Edit button
                        editButton.style.display = "inline-block";

                    });


                todo_list.appendChild(li);

            });

        }

    } catch (error) {

        console.log("Error:", error);

    }

}


// -------------------------
// POST TODO
// -------------------------

async function postTodo() {

    let value = task_input.value;

    let objData = {

        text: value.trim()

    };


    let response = await fetch(
        "https://6ab54e7824ee9d3caa1c5f70.mockapi.io/api/v1/todos",
        {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(objData)

        }
    );


    if (response.status === 201) {

        task_input.value = "";

        getTodos();

    }


    return response;

}


// -------------------------
// DELETE TODO
// -------------------------

async function deleteTodo(id) {

    let response = await fetch(
        `https://6ab54e7824ee9d3caa1c5f70.mockapi.io/api/v1/todos/${id}`,
        {

            method: "DELETE"

        }
    );


    if (response.status === 200) {

        getTodos();

    }

}


// -------------------------
// UPDATE TODO
// -------------------------

async function updateTodo(id, newValue) {

    let response = await fetch(
        `https://6ab54e7824ee9d3caa1c5f70.mockapi.io/api/v1/todos/${id}`,
        {

            method: "PUT",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                text: newValue

            })

        }
    );


    if (response.ok) {

        console.log("Todo updated successfully");

    } else {

        console.log("Failed to update Todo");

    }


    return response;

}


// -------------------------
// LOAD TODOS
// -------------------------

getTodos();