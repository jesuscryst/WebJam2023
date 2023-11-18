let todoDict = {};

function getParentSpanID(button) {
    var parentSpan = button.closest('span');
    var parentSpanID = parentSpan.id;
    return parentSpanID;
}

function addToDict(button) {
    var parentSpanID = getParentSpanID(button);
    var addedtask = document.getElementById(`${parentSpanID}taskname`);
    todoDict[`${parentSpanID}taskname`] = addedtask.innerHTML;
}


function saveTask(button) {
    var parentSpanID = getParentSpanID(button);
    var taskinput = document.getElementById(`${parentSpanID}taskname`);
    var edittask = taskinput.isContentEditable;
    if (edittask) {
        taskinput.contentEditable = 'false';
        taskinput.disabled = true;
    } else {
        taskinput.contentEditable = 'true';
        taskinput.disabled = false;
    }
}

function changeTaskButton(button) {
    if (button.textContent === "+") {
        button.innerHTML = "&#128393;";
    } else {
        button.textContent = "+";
    };
}

function deleteTask(button) {
    var parentSpanID = getParentSpanID(button);
    delete todoDict[`${parentSpanID}taskname`];
    updateCalendar();
    
    var deletetask = document.getElementById(`${parentSpanID}`);
    deletetask.remove();

    var tododiv = document.getElementById("todotasks");
    if (tododiv.childElementCount === 0) {
        var tododiv = document.getElementById("todotasks");
        tododiv.innerHTML = '';
        var emptytask = '<span id="completedtasks" style="font-family: Kalam; padding-bottom: 10px;"><img src="sleepy.png" alt="sleepy.png" width="200px" height="200px"><br>No more tasks for today!</span>';
        tododiv.innerHTML += emptytask;
        newdiv = document.createElement("div");
        document.div.tododiv.appendChild(newdiv);
    }
}

function addTask() {
    var completedtasks = document.getElementById("completedtasks");
    if (completedtasks) {
        completedtasks.remove();
    }
    
    var tododiv = document.getElementById("todotasks");
    var lastTask = tododiv.querySelector('span:last-child');
    if (lastTask) {
        var lastTaskID = String(parseInt(lastTask.id, 10) + 1);
    } else {
        var lastTaskID = "1";
    };

    var newtask =

    `<span id="${lastTaskID}">
        <div class="input-group mb-3 container" style="height: fit-content; font-family: Overpass; background-color: white; padding: 0px; margin-bottom: 0px;">
            <div class="input-group-text" style="height: 38px; margin-bottom: 0px;">
                <input class="form-check-input mt-0" type="checkbox" value="Enter task" aria-label="Checkbox for todo" id="${lastTaskID}checkbox" onclick="checkCheckbox(this)">
            </div>
            <p class="form-control text-start" id="${lastTaskID}taskname" style="margin-bottom: 0px;">Enter Task</p>
            <button class="btn btn-outline-secondary" id="${lastTaskID}taskbutton" type="button" id="button-addon2" style="height: 100%;" onclick="changeTaskButton(this); saveTask(this); addToDict(this); updateCalendar()">&#128393;</button>
            <button type="button" class="btn btn-outline-secondary" id="delete" onclick="deleteTask(this)" style="height: 100%;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                </svg>
            </button>
        </div>
    </span>`;

    tododiv.innerHTML += newtask;
    var newdiv = document.createElement("div");
    newdiv.innerHTML = newtask;
    document.div.tododiv.appendChild(newdiv);
}

function updateCalendar(day = 0) {
    if (day === 0) {
        var currentDate = new Date();
        day = currentDate.getDate();
        var taskdiv = document.getElementById(`today${day}`);
        taskdiv.innerHTML = '';
        for (key in todoDict) {
            var newtask = document.createElement("p");
            newtask.classList.add("form-control");
            newtask.innerHTML = todoDict[key];
            taskdiv.appendChild(newtask);
        }
    } else {
        var taskdiv = document.getElementById(`day${day}`);
        var newtask = document.createElement("p");
        newtask.classList.add("form-control");
        newtask.contentEditable = true;
        taskdiv.appendChild(newtask);
    }
    
}

function checkCheckbox(checkbox) {
    var parentSpan = checkbox.parentNode.parentNode.parentNode;
    var parentSpanID = parentSpan.id;
    var taskname = `${parentSpanID}taskname`;
    var task = document.getElementById(taskname);

    var currentDate = new Date();
    var day = currentDate.getDate();
    var todayID = `today${day}`;

    var todaygrid = document.getElementById(todayID);
    var pelements = todaygrid.querySelectorAll("p");

    if (checkbox.checked) {
        pelements.forEach(function(pelement) {
            if (pelement.innerHTML === task.innerHTML) {
                pelement.innerHTML = `<s>${task.innerHTML}</s>`;
            }
        });
        task.innerHTML = `<s>${task.innerHTML}</s>`;
    } else {
        pelements.forEach(function(pelement) {
            if (pelement.innerHTML === task.innerHTML) {
                pelement.innerHTML = todoDict[taskname];
            }
        });
        task.innerHTML = todoDict[taskname];
    }
}