import { EventEmitter } from "@angular/core";
import { Book } from "./book.model";

export class BookService{
    users:string[]= ["John","Dan","Hanna","Mike"];
    booksChanged = new EventEmitter<Book[]>();
    private books: Book[] = [
        new Book('12345678923','title1','author1',['cat1','cat2'],200,'1995-02-11'),
        new Book('12345678923','title2','author2',['cat3','cat2'],250,'1994-03-10'),
        new Book('12345678923','title3','author3',['cat1','cat4'],300,'2000-04-05')
      ];
    getBooks(){
        return this.books.slice();
    }
    getOneBook(index: number){
        return this.books[index];
    }
    deleteBook(index: number){
        this.books.splice(index,1);
        this.booksChanged.emit(this.books.slice());
    }
    getUsers(){
        return this.users.slice();
    }
    saveBook(book: Book){
      this.books.push(book);
      this.booksChanged.emit(this.books.slice());
    }
    saveEditedBook(book: Book, index: number){
      this.books.splice(index,1,book);
      this.booksChanged.emit(this.books.slice());
    }


}
