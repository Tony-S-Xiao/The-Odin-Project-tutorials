const BOARD_SIZE = 3;

const board = (() => {
    let board = [];
    const initialize = () => {
        for(let i = 0; i < BOARD_SIZE; ++i) {
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
        display.print();
        return gameover();
    }
    const gameover = () => {
        if(checkHorizontal() || checkVertical() || checkDiagonal() || isTie()) {
            //should alert after repaint
            requestAnimationFrame(()=>{
                requestAnimationFrame(()=>{window.alert('game over!')})
            });
        return true;            
        }
    return false;
    }
    const isTie = () => {
        for(let arr of board) {
            for(let cell of arr) {
                if(cell == '<br>')
                return false;
            }
        }
        return true;
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
        for(let i = 0; i < BOARD_SIZE; ++i) {
            let row = document.createElement('div');
            row.classList = 'row';
            visual_board.appendChild(row);
            for(let j = 0; j < BOARD_SIZE; ++j) {
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
        for(let i = 0; i < BOARD_SIZE; ++i) {
            for(let j = 0; j < BOARD_SIZE; ++j) {
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
let controller = (() => {
    let turn_order = true;
    //initialize buttons
    board.reset();
    display.reset();
    display.print();
    //initialize reset
    document.querySelector('.reset').addEventListener('click', (event)=>{
        board.reset();
        display.print();
    });
    //initialize board click
    let columns = document.querySelectorAll('.column');
    for(let i = 0; i < columns.length; ++i) {
        console.log(i + " " + i % BOARD_SIZE + " " + Math.floor(i/BOARD_SIZE));
        columns[i].addEventListener('click', (e)=>{
            board.placeSquare(Math.floor(i/BOARD_SIZE), i % BOARD_SIZE, turn_order);
            turn_order = !turn_order;
        });
    }

})();

