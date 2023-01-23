

const container = document.getElementById("content");
container.style.maxWidth = "800px";
container.style.width = "800px";
container.style.maxHeight = "800px";
container.style.height = "800px";
container.style.border = "2px solid black";
container.style.display = "flex";
container.style.flexDirection = "column";

let allRowsArr = [];

createRows();

function createRows(){

    for(let i = 0; i < 16; i++){
        // creation and styling
        let row = document.createElement("div");
        row.style.height = "50px";
        row.style.display = "flex";
        row.classList.add("row");

        if (i%2 == 0)
        {row.style.backgroundColor = "pink";}
        else{row.style.backgroundColor = "lightpink";}
        // add row to container
        container.appendChild(row);
        // add row to array
        allRowsArr.push(row);
        
        createBoxes(row);
    }
    
}

function createBoxes(row) {
    for (j = 0; j < 16; j++) {
        let box = document.createElement("div");
        box.style.height = "50px";
        box.style.width = "50px";
        box.style.border = "0.25px solid grey";

        row.appendChild(box);
    }
}

