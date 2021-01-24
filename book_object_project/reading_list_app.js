class Book {
    constructor(title = '', author = '', pages = 0, finished = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;        
    }
    info() {
        return `${this.title}, by ${this.author},
     ${this.pages} pages, ${this.finished ? 'has been read' : 'has not been read'}`;
    }
}
class Library {
    constructor(JSON_object = null) {
        this._shelf = [];
        this._catalogue = new Set();
        this._length = 0;
        if(JSON_object != null)
        {
            this.fromJSONObject(JSON_object);
            return;
        }

    }
    insert(book) {
        if (this._catalogue.has(book.title)) {
            window.alert('There is already a book with the same name!');
            return;
        }
        this._shelf.push(book);
        this._catalogue.add(book.title);
        ++this._length;
    }
    erase(title) {
        if (!this._catalogue.has(title)) {
            window.alert('There is no book with that name!');
            return;
        }
        let erased_book = this._shelf.splice(this._shelf.findIndex((element)=>element.title == title), 1);
        this._catalogue.delete(erased_book[0].title);
        --this._length;
    }
    find(title) {
        if (!this._catalogue.has(title)) {
            window.alert('There is no book with that name!');
            return;
        }
        return this._shelf.find(element=>element.title == title);
    }
    [Symbol.iterator] = function() {
        return {
            shelf: this._shelf,
            idx: 0,
            next() {
                if(this.idx < this.shelf.length)
                return {done: false, value: this.shelf[this.idx++]};
                else 
                return {done: true, value: this.shelf[this.idx++]};
            }
        }
    }
    fromJSONObject(JSON_object) {
        this._shelf = JSON_object._shelf;
        for(let book of this._shelf) {
            this._catalogue.add(book.title);
            this._length++;
        }
    }
}
class Display {
    static display(library) {
        let display_section = document.querySelector('section');
        let card_node = document.createElement('div');
        card_node.classList = 'book-card';
        let remove_button = document.createElement('button');
        remove_button.textContent = 'remove';
        remove_button.addEventListener('click', (e)=> {
            library.erase(e.target.parentNode.childNodes[0].textContent);
            e.target.parentNode.remove();
        });
        let read = document.createElement('button');
        read.textContent = 'toggle read';
        read.addEventListener('click', (e)=> {
            library.find(e.target.parentNode.childNodes[0].textContent).finished = !library.find(e.target.parentNode.childNodes[0].textContent).finished;
        });
        for(let book of library) {
            card_node.textContent = book.title;
            display_section.appendChild(card_node);
            card_node.appendChild(remove_button);
            card_node.appendChild(read);
            read = read.cloneNode(true);
            read.addEventListener('click', (e)=> {
            library.find(e.target.parentNode.childNodes[0].textContent).finished = !library.find(e.target.parentNode.childNodes[0].textContent).finished;
        });
            remove_button = remove_button.cloneNode(true);
            remove_button.addEventListener('click', (e)=> {
                library.erase(e.target.parentNode.childNodes[0].textContent);
                e.target.parentNode.remove();
            });
            card_node = card_node.cloneNode(true);
        }
    }
    static reset() {
        let display_section = document.querySelector('section');
        let to_remove = display_section.querySelectorAll('*');
        for(let node of to_remove)
            node.remove();
    }
}

function addToLibrary() {
    let title = window.prompt('What book did you read?');
    if(title === null) return;
    let author = window.prompt('Who was the author?');
    if(author === null) return;
    let pages = Number(window.prompt('How many pages was the book?'));
    for (let i = 0; i < 3; ++i) {
        if(pages === NaN || pages <= 0 || !Number.isInteger(pages))
            pages = Number(window.prompt('You must enter a valid positive integer.'));
    }
    if(pages === null) return;
    let finished = window.prompt('Did you finish reading the whole book? Yes or no?').toLowerCase();
    while (finished != 'yes' && finished != 'no') {
        finished = window.prompt('Please enter yes or no.');
    }
    if(finished === null) return;
    if (finished == 'yes')
        finished = true;
    else
        finished = false;
        session_library.insert(new Book(title, author, pages, finished));
}
let session_library = new Library(JSON.parse(localStorage.getItem('session_library')));
Display.display(session_library);
window.addEventListener('beforeunload', (e)=>{
    localStorage.setItem('session_library', JSON.stringify(session_library));
});
document.querySelector('#new-book').addEventListener('click', (e)=> {
    addToLibrary();
    Display.reset();
    Display.display(session_library);
});