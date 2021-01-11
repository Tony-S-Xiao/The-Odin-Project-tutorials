function reset() {
let row_to_be_coord = document.querySelectorAll('.row');
let grid_arr = new Array();
for(let item of row_to_be_coord) {
    let col_to_be_coord = item.querySelectorAll('.column');
    for(let node of col_to_be_coord) {
        node.classList.remove('colored');
        node.classList.add('uncolored');
        }
    }
}
// create grid

let body = document.querySelector('body');
body.addEventListener('keydown', reset);

let row_grid = document.createElement('div');
row_grid.classList.add('uncolored');
row_grid.classList.add('row');
let column_grid = document.createElement('div');
column_grid.classList.add('uncolored');
column_grid.classList.add('column');
let grid = document.querySelector('#grid');
for(let i = 0; i < 64; ++i) {
    row_grid.appendChild(column_grid);
    column_grid = column_grid.cloneNode(true);
}
for(let i = 0; i < 64; ++i) {
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


