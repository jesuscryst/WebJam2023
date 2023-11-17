let chores = {
    "Weekly": [
        "wash clothes and towels", "vacuum carpets", "sweep and mop floors", "clean bathrooms", "organize refrigerator", "wipe kitchen appliances"
    ],

    "Monthly": [
        "clean furniture", "wash bed sheets and covers", "wash curtains and tablecloths", "dust light fixtures and fan blades"
    ],

    "Seasonal": [
        "organize closet and dressers", "wash windows", "clean under furniture", "deep clean refrigerator"
    ]
};

var mychores = {};

document.addEventListener("DOMContentLoaded", function() {
    var choresdiv = document.getElementById("chores");
    
    for (key in chores) {
        var newsection = document.createElement("h6");
        newsection.id = key;
        newsection.textContent = key + " Chores";
        choresdiv.appendChild(newsection);
    
        for (let i = 0; i < chores[key].length; i++) {
            var task = 
            `<div class="input-group mb-3" id="${key}${i}" style="font-family: Overpass;">
                <p class="schedule form-control text-start" id="${key}${i}chore" aria-describedby="button-addon2">${chores[key][i]}</p>
                <button class="schedule btn btn-outline-secondary" type="button" id="${key}${i}button" style="height: fit-content;" onclick="changeChoreButton(this)">+</button>
            </div>`;
            choresdiv.innerHTML += task;
        }
        
    }
});

function handleClick(id) {
    return function(event) {
        if (event.target.classList.contains('schedule', 'btn', 'btn-outline-secondary')) {
            var parentdiv = event.target.closest("div");
            var pelement = parentdiv.querySelector(`#${parentdiv.id}chore`);
            if (Object.keys(mychores).includes(id) && (document.getElementById(id).classList.contains("highlight"))) {
                if (!mychores[id].includes(pelement.innerHTML)) {
                    mychores[id].push(pelement.innerHTML);
                    scheduleChore(`${id}newdiv`, id);
                }
            } else if (document.getElementById(id).classList.contains("highlight")) {
                mychores[id] = [pelement.innerHTML];
                scheduleChore(`${id}newdiv`, id);
            } else {
                console.log("unselected");
            }
        }
    }
}

function selectDay(gridid) {
    var selectedday = document.getElementById(gridid);
    selectedday.classList.toggle('highlight');
    var selected = selectedday.classList.contains('highlight')? true:false;
    console.log(selected);

    var griddiv = document.getElementById(gridid);
    var newdiv = document.createElement("div");
    newdiv.id = `${gridid}newdiv`;
    griddiv.appendChild(newdiv);
    newdiv.innerHTML = '';

    if (selected) {
        document.addEventListener("click", handleClick(gridid));
    }
    
}

function scheduleChore(divid, gridid) {
    var newdiv = document.getElementById(divid);
    newdiv.innerHTML = '';
    for (element in mychores[gridid]) {
        var newchore = document.createElement("p");
        newchore.classList.add("form-control");
        newchore.innerHTML = mychores[gridid][element];
        newdiv.appendChild(newchore);
    }
}

function changeChoreButton(button) {
    if (button.innerHTML === "+") {
        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg>';
    } else {
        button.innerHTML = "+";
    }
}

/* function handleClick(id) {
    return function(event) {
        if (event.target.classList.contains('schedule', 'btn', 'btn-outline-secondary')) {
            var parentdiv = event.target.closest("div");
            var pelement = parentdiv.querySelector(`#${parentdiv.id}chore`);
            if (event.target.innerHTML === "+") {
                if (Object.keys(mychores).includes(id) && (document.getElementById(id).classList.contains("highlight"))) {
                    if (!mychores[id].includes(pelement.innerHTML)) {
                        mychores[id].push(pelement.innerHTML);
                        scheduleChore(`${id}newdiv`, id);
                    }
                } else if (document.getElementById(id).classList.contains("highlight")) {
                    mychores[id] = [pelement.innerHTML];
                    scheduleChore(`${id}newdiv`, id);
                } else {
                    console.log("unselected");
                }
                event.target.innerHTML = 
            } else {
                var remove = mychores[id].indexOf(pelement.innerHTML);
                mychores[id].splice(remove, 1)
                scheduleChore(`${id}newdiv`, id);
                event.target.innerHTML = "+";
            }
        }
    }
} */