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
            gridBox.setAttribute('style', `width: ${(800/n)-2}px; height: ${(800/n)-2}px`)
            row.appendChild(gridBox);
        }
        container.appendChild(row);
    }

    //when user hovers over the box it will change its color to black
    const gridBoxes = document.querySelectorAll('.row>div');
    gridBoxes.forEach(box => {
        box.addEventListener('mouseover', function() {
            this.classList.add('hovered');
        })
    })
}

//the starting grid
create_new_grid(16);

//button that can generate a new grid
const grid_btn = document.querySelector('#grid_generator');
grid_btn.addEventListener('click', function() {
    const n = prompt("Enter the number of rows and columns");
    if(n > 99 || n < 1){
        alert("Value should be more than 0 and less than 100");
    }
    else{
        console.log(n);
        create_new_grid(n);
    }
})
