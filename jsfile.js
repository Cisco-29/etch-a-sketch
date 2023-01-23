

const container = document.getElementById("content");
container.style.maxWidth = "800px";
const canvasWidth = container.style.width = "800px";
container.style.maxHeight = "800px";
const canvasHeight =container.style.height = "800px";
container.style.border = "2px solid black";
container.style.display = "flex";
container.style.flexDirection = "column";

let allRowsArr = [];
let gridSize;
let boxSize;

// reference and link to button
const gridSizeBtn = document.querySelector('#gridSizeBtn');
gridSizeBtn.onclick = () => getSetGridSize();

function getSetGridSize(){
    // prompt user for grid size
    let proposedGridSize = prompt("Set a grid size between 4 and 100 \neg. 4 = 4 x 4 grid, 10 = 10 x 10 grid");
    if (proposedGridSize > 100 || proposedGridSize < 4){
        alert("Grid size must be between 4 and 100!");
        return;
    }else{
        gridSize = proposedGridSize;
        render(gridSize);
    }
}


function render(gridDimensions){
    removeGrid();
    boxSize = 800/gridDimensions;
    createRows(gridDimensions);
    
}
function removeGrid(){

    let elementsToRemove = document.getElementsByClassName("row");
    if (container.hasChildNodes())
    {   do {
            container.removeChild(elementsToRemove[0]);

        }while (container.hasChildNodes())
    }
}

function createRows(gridDimensions){

    for(let i = 0; i < gridDimensions; i++){
        // creation and styling
        let row = document.createElement("div");
        row.style.height = boxSize + "px"
        console.log(row.style.height);
        row.style.display = "flex";
        row.classList.add("row");

        if (i%2 == 0)
        {row.style.backgroundColor = "pink";}
        else{row.style.backgroundColor = "lightpink";}
        // add row to container
        container.appendChild(row);
        // add row to array
        allRowsArr.push(row);
        
        createBoxes(row, gridDimensions);
    }
    
}

function createBoxes(row, gridDimensions) {
    for (j = 0; j < gridDimensions; j++) {
        let box = document.createElement("div");
        box.style.height = boxSize + "px"
        box.style.width = boxSize + "px"
        box.style.border = "0.25px solid grey";
        box.classList.add("box");
        row.appendChild(box);
    }
}




