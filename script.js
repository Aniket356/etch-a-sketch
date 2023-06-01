//if random color mode is on, the boxes will change color to a random color when mosue is hovered
let randomColorMode = false;
const modeIndicator = document.querySelector('.controls>p')
const randomColorBtn = document.querySelector('#random_color');
randomColorBtn.addEventListener('click', function () {
    randomColorMode = randomColorMode ? false : true;
    modeIndicator.textContent = `Random Color Mode: ${randomColorMode ? "On" : "Off"}`
})

//this will generate a new grid and remove the previous one
function create_new_grid(n){
    const container = document.querySelector('.grid-container');

    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }

    for(let i = 0; i < n; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let i = 0; i < n; i++){
            const gridBox = document.createElement('div');
            gridBox.setAttribute('style', `width: ${800/n}px; height: ${800/n}px`)
            row.appendChild(gridBox);
        }
        container.appendChild(row);
    }

    //when user hovers over the box it will change its color to black
    const gridBoxes = document.querySelectorAll('.row>div');
    gridBoxes.forEach(box => {
        box.addEventListener('mouseover', function() {
            if(randomColorMode){
                //gnereate a random rgb value if random color mode is on
                const red = Math.floor(Math.random() * (256));
                const green = Math.floor(Math.random() * (256));
                const blue = Math.floor(Math.random() * (256));
                this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            }
            else{
                this.style.backgroundColor = 'black';
            }
        })
    })
}

//the starting grid
create_new_grid(16);

//button that can generate a new grid
const grid_btn = document.querySelector('#grid_generator');
grid_btn.addEventListener('click', function() {
    const n = parseInt(prompt("Enter the number of rows and columns"));
    if(n > 0 && n < 101){
        create_new_grid(n);
    }
    else{
        alert("Please enter a valid number between 1 and 100");
    }
})
