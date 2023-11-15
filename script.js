var todoList = [];

if (todoList.length === 0) {
    var tododiv = document.getElementById("todotasks");
    var emptytask = '<img src="..." alt="...">';
    tododiv.innerHTML += emptytask;
    newdiv = document.createElement("div");
    document.div.tododiv.appendChild(newdiv);
}

function disableInput(button) {
    var parentSpan = button.closest('span');
    if (parentSpan) {
        var parentSpanID = parentSpan.id;
    }
    var taskinput = document.getElementById(`${parentSpanID}taskname`);
    if (taskinput.disabled === true) {
        taskinput.disabled = false;
    } else {
        taskinput.disabled = true;
    };
}

function changeTaskButton(button) {
    var parentSpan = button.closest('span');
    if (parentSpan) {
        var parentSpanID = parentSpan.id;
    }
    var taskbutton = document.getElementById(`${parentSpanID}taskbutton`);
    if (taskbutton.textContent === "+") {
        taskbutton.innerHTML = "&#128393;";
    } else {
        taskbutton.textContent = "+";
    };
}

function addTask() {
    var tododiv = document.getElementById("todotasks");
    var lastTask = tododiv.querySelector('span:last-child');
    if (lastTask) {
        var lastTaskID = String(parseInt(lastTask.id, 10) + 1);
    } else {
        var lastTaskID = "1";
    }

    var newtask = `<span class="${lastTaskID}" id="${lastTaskID}"><div class="input-group mb-3"><div class="input-group-text"><input class="form-check-input mt-0" type="checkbox" value="Enter task" aria-label="Checkbox for todo"></div><input type="text" class="form-control" id="${lastTaskID}taskname" aria-label="Text input with checkbox" placeholder="Enter task"><button class="btn btn-outline-secondary" id="${lastTaskID}taskbutton" type="button" id="button-addon2" style="height: fit-content;" onclick="disableInput(this); changeTaskButton(this)">+</button><button class="btn btn-outline-secondary" id="delete" onclick="deleteTask(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg></button></div></span>`;
    tododiv.innerHTML += newtask;
    var newdiv = document.createElement("div");
    newdiv.innerHTML = newtask;
    document.div.tododiv.appendChild(newdiv);
}

function deleteTask(button) {
    var parentSpan = button.closest('span');
    if (parentSpan) {
        var parentSpanID = parentSpan.id;
    }
    var deletetask = document.getElementById(`${parentSpanID}`)
    deletetask.remove();
}