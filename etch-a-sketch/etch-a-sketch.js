function reset() {
let row_to_be_coord = document.querySelectorAll('.row');

for(let item of row_to_be_coord) {
    item.remove();
    }
}
// create grid
function createGrid(grid_size = 64) {
    if(grid_size > 100 || grid_size === undefined)  {
        createGrid(window.prompt('Enter a smaller value!'));
    }
    let row_grid = document.createElement('div');
    row_grid.classList.add('uncolored');
    row_grid.classList.add('row');
    row_grid.style.height = `calc(100%/${grid_size})`;
    let column_grid = document.createElement('div');
    column_grid.classList.add('uncolored');
    column_grid.classList.add('column');
    column_grid.style.width = `calc(100%/${grid_size})`;
    let grid = document.querySelector('#grid');
    for(let i = 0; i < grid_size; ++i) {
        row_grid.appendChild(column_grid);
        column_grid = column_grid.cloneNode(true);
    }
    for(let i = 0; i < grid_size; ++i) {
        grid.appendChild(row_grid);
        row_grid = row_grid.cloneNode(true);
    }

    let row_to_be_coord = grid.querySelectorAll('.row');
    let grid_arr = new Array();
    let i = 0;
    let j = 0;
    for(let item of row_to_be_coord) {
        let col_to_be_coord = item.querySelectorAll('.column');
        for(let node of col_to_be_coord) {
            node.addEventListener('pointerover', (e)=>{
                e.target.classList.remove('uncolored');
                e.target.classList.add('colored');
            });
            node.id = `${i},${j}`;
            ++j;
        }
        ++i;
        j=0;
    }
}
let body = document.querySelector('body');
body.addEventListener('keydown', (e) => {
    if(e.key == "Escape") {
    reset();
    createGrid(window.prompt('Enter new grid size!'));        
    }
});
createGrid();
