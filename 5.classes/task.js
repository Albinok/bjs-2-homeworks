class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix(){
    this.state = 1.5 * this.state;
  }

  set state(number){
    if (number < 0){
      this._state = 0;
    } else if (number > 100){
      this._state = 100;
    } else {
      this._state = number;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, author){
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount, author);
    this.type = 'novel';
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount, author);
    this.type = 'fantastic';
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount, author);
    this.type = 'detective';
  }
}

class Library {
  constructor(name){
    this.name = String(name);
    this.books = [];
  }

  addBook(book){
    if (state.book > 30){
      this.books = push(book)
    }
  }

  findBookBy(type, value){
    for(let book of this.book){
      if (book[type] === value){
        return book;
      }
      return null;
    }
  }

  giveBookByName(bookName){
    let bookSearch = this.findBookBy('name', bookName);
    if (bookSearch){
      
    }

  }



}








