const board = (() => {
    let board = [];
    const initialize = () => {
        for(let i = 0; i < 3; ++i) {
            board.push(['<br>','<br>','<br>']);
        }
    }
    const reset = () => {
        board = [];
        initialize();
    }
    const getSquare = (row, column) => {
        return board[row][column] == '<br>' ? ' ' : board[row][column];
    }
    const placeSquare = (row, column, player = true) => {
        board[row][column] = player==true ? 'x' : 'o';
        return gameover();
    }
    const gameover = () => {
        return checkHorizontal() || checkVertical() || checkDiagonal();
    }
    const checkHorizontal = () => {
        for(let i = 0; i < board.length; ++i) {
            let curr_square = board[i][0];
            let found = true;
            if(curr_square == '<br>') continue;
            for(let j = 1; j < board[i].length; ++j) {
                if(curr_square != board[i][j])
                found = false;
            }
            if(found == true)
            return true;
        }
    }
    const checkVertical = () => {
        for(let i = 0; i < board.length; ++i) {
            let curr_square = board[0][i];
            let found = true;
            if(curr_square == '<br>') continue;
            for(let j = 1; j < board[i].length; ++j) {
                if(curr_square != board[j][i])
                found = false;
            }
            if(found == true)
            return true;
        }
    }
    const checkDiagonal = () => {
        return board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] != '<br>' ||
        board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[1][1] != '<br>';
    }
    return{reset, getSquare, placeSquare};
})();
const display = (() => {
    const visual_board = document.querySelector('main');
    const document_nodes = new Map();
    const initialize = () => {
        for(let i = 0; i < 3; ++i) {
            let row = document.createElement('div');
            row.classList = 'row';
            visual_board.appendChild(row);
            for(let j = 0; j < 3; ++j) {
                let column = document.createElement('div');
                column.classList = 'column';
                row.appendChild(column);
                document_nodes.set(`${i},${j}`, column);
            }
        }
    }
    const reset = () => {
        let to_delete = visual_board.querySelectorAll('*');
        for(let node of to_delete) {
            node.remove();
        }
        document_nodes.clear();
        initialize();
        print();
    }
    const print = () => {
        for(let i = 0; i < 3; ++i) {
            for(let j = 0; j < 3; ++j) {
                let node = document_nodes.get(`${i},${j}`);
                if(board.getSquare(i, j) != ' ') {
                    node.textContent = board.getSquare(i, j);
                } else {
                    node.innerHTML = '<br>';
                }
            }
        }
    }
    return {reset, initialize, print};
})();
board.reset();
display.reset();
board.placeSquare(0,0, true);
display.print();