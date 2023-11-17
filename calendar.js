let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth();
    var day = currentDate.getDate();

    var calendarheaderdiv = document.getElementById("calendarheader");
    var header = document.createElement("h3");
    header.innerHTML = `<b>${months[month]} ${year}</b>`;
    calendarheaderdiv.appendChild(header);

    var today = document.getElementById(`day${day}`);
    var newdiv = document.createElement("div");
    newdiv.classList.add("container-fluid");
    newdiv.id = `today${day}`;
    newdiv.style.padding = '0px';
    today.appendChild(newdiv);
});

