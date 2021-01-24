let board = document.querySelector('.board');
let row_node = document.createElement('div');
row_node.classList = 'row';
let column_node = document.createElement('div');
column_node.classList = 'column';
for(let i = 0; i < 3; ++i) {
    row_node.appendChild(column_node);
    column_node = column_node.cloneNode(true);
}
for(let i = 0; i < 3; ++i) {
    board.appendChild(row_node);
    row_node = row_node.cloneNode(true);
}