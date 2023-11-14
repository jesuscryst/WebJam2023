function disableInput() {
    var taskinput = document.getElementById("taskname");
    if (taskinput.disabled === true) {
        taskinput.disabled = false;
    } else {
        taskinput.disabled = true;
    };
}

function changeTaskButton() {
    var taskbutton = document.getElementById("taskbutton");
    if (taskbutton.textContent === "+") {
        taskbutton.textContent = convertToUnicode("&#128393;");
    } else {
        taskbutton.textContent = "+";
    };
}