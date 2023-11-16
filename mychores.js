
document.addEventListener("DOMContentLoaded", function() {
    chores = {
        "Weekly": [
            "wash clothes and towels", "vaccum carpets", "sweep and mop floors", "clean bathrooms", "organize refrigerator", "wipe kitchen appliances"
        ],
    
        "Monthly": [
            "clean furniture", "wash bed sheets and covers", "wash curtains and tablecloths", "dust light fixtures and fan blades"
        ],
    
        "Seasonal": [
            "organize closet and dressers", "wash windows", "clean under furniture", "deep clean refrigerator"
        ]
    };
    
    var choresdiv = document.getElementById("chores");
    
    for (key in chores) {
        var newsection = document.createElement("h6");
        newsection.id = key;
        newsection.textContent = key + " Chores";
        choresdiv.appendChild(newsection);
    
        for (let i = 0; i < chores[key].length; i++) {
            var task = 
            `<div class="input-group mb-3" id="${key}${i}">
                <p class="form-control text-start" aria-describedby="button-addon2">${chores[key][i]}</p>
                <button class="btn btn-outline-secondary" type="button" id="schedule" style="height: fit-content;" onclick="scheduleChore()">+</button>
            </div>`;
            choresdiv.innerHTML += task;
        }
        
    }
});

function scheduleChore(button) {
    var parentdiv = button.closest('div');
    var parentdivID = parentdiv.id;

    
}

