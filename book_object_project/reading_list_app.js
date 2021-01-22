class Library {
    constructor() {
        this._shelf = [];
        this._catalogue = new Set();
        this._length = 0;
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
        if (!this._catalogue.has(book.title)) {
            window.alert('There is no book with that name!');
            return;
        }
        let erased_book = this._shelf.splice(this._shelf.findIndex((element)=>element.title == title), 1);
        this._catalogue.delete(erased_book[0].title);
        --this.length;
    }
    
}
function Book(title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;
}
Book.prototype.info = function() {
    return `${this.title}, by ${this.author},
     ${this.pages} pages, ${this.finished ? 'has been read' : 'has not been read'}`;
}
function addToLibrary() {
    let title = window.prompt('What book did you read?');
    let author = window.prompt('Who was the author?');
    let pages = Number(window.prompt('How many pages was the book?'));
    while (pages === NaN || pages <= 0 || !Number.isInteger(pages)) {
        pages = Number(window.prompt('You must enter a valid positive integer.'));
    }
    let finished = window.prompt('Did you finish reading the whole book? Yes or no?').toLowerCase();
    while (finished != 'yes' && finished != 'no') {
        finished = window.prompt('Please enter yes or no.');
    }
    if (finished == 'yes')
        finished = true;
    else
        finished = false;
    library.push(new Book(title, author, pages, finished));
}
