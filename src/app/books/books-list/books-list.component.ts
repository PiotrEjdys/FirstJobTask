import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookAddComponent } from '../book-add/book-add.component';
import { BookEditComponent } from '../book-edit/book-edit.component';
import { Book } from '../book.model';
import { BookService } from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  detailDisplay: boolean = false;
  @Output() detailDisplayEmitter = new EventEmitter<{display:boolean, index: number}>();
  books: Book[];
  book: Book;
  index:number;

  constructor(private bookService: BookService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.bookService.booksChanged.subscribe((books: Book[])=>{
      this.books=books;
    })
  }
  showDetails(index: number){
    this.detailDisplay = !this.detailDisplay;
    this.detailDisplayEmitter.emit({display: this.detailDisplay, index: index});

  }
  deleteBook(index: number){
    this.bookService.deleteBook(index);
  }
  openAddDialog(): void {
    console.log('open');

    const dialogRef = this.dialog.open(BookAddComponent, {

      data: {

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.book = result;
      console.log(this.book);
      this.saveBook();
    });
  }
  openEditDialog(index:number): void {
    console.log(index);
    this.index=index;

    const dialogRef = this.dialog.open(BookEditComponent, {
      data: {
        index: index
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.book = result;
      this.saveEditedBook();

    });
  }
  saveBook(){
    this.bookService.saveBook(this.book);
  }
  saveEditedBook(){
    this.bookService.saveEditedBook(this.book,this.index);
  }
}
