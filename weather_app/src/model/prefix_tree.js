class PrefixTree {
    constructor(dict) {
        this._root = new Node('');
        this.displayState = "";
        for(let word of dict) {
            this.insert(word);
        }
    }
    insert(word) {
        let curr_node = this._root;
        for(let i = 0; i < word.length - 1; ++i) {
            if(curr_node.pointers.has(word[i])) {
                curr_node = curr_node.pointers.get(word[i]);
            } else {
                curr_node.pointers.set(word[i], new Node(word[i]));
                curr_node = curr_node.pointers.get(word[i]);
            }
        }
        curr_node.pointers.set(word[word.length - 1], new Node(word[word.length - 1], true));
    }
    displayAllWords() {
        this.displayHelp(this._root);
    }
    displayHelp(node) {
        let pointer_map = node.pointers;
        if(node._isEnd == true) {
            console.log(this.displayState);
        }
        let nodes = pointer_map.values();
        for(let pair of nodes) {
            let curr_state = this.displayState;
            this.displayState = this.displayState + pair._val;
            this.displayHelp(pair);
            this.displayState = curr_state;
        }
    }
    getTop10Suggestion(prefix) {
        let curr_node = this._root;
        for(let i = 0; i < prefix.length; ++i) {
            if(curr_node.pointers.has(word[i])) {
                curr_node = curr_node.pointers.get(word[i]);
            } else {
                return [];
            }
        }
        
    }
}
class Node {
    constructor(val, isEnd = false) {
        this._val = val;
        this.pointers = new Map();
        this._isEnd = isEnd;
    }
}
export default PrefixTree;