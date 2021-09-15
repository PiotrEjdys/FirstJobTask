import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth.service';
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
  filteredAuthor: string = '';
  detailDisplay: boolean = false;
  @Output() detailDisplayEmitter = new EventEmitter<{display:boolean, index: number}>();
  books: Book[];
  index:number;
  isLogged: boolean;

  constructor(private bookService: BookService, private dialog: MatDialog, private authService: AuthService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.bookService.booksChanged.subscribe((books: Book[])=>{
      this.books=books;
    });
    this.isLogged = this.authService.loggedIn;
    this.authService.changeLog.subscribe((log:boolean)=>{
      this.isLogged = log;
    });
  }
  showDetails(index: number){
    console.log(index);

    this.detailDisplay = !this.detailDisplay;
    this.detailDisplayEmitter.emit({display: this.detailDisplay, index: index});

  }
  deleteBook(index: number){
    if(confirm('Are u sure u want to delete book ' + this.bookService.getOneBook(index).title)){
      this.bookService.deleteBook(index);
    }

  }
  openAddDialog(): void {
    console.log('open');

    const dialogRef = this.dialog.open(BookAddComponent, {
      disableClose:true,
      data: {

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

    });
  }
  openEditDialog(index:number): void {
    console.log(index);
    this.index=index;

    const dialogRef = this.dialog.open(BookEditComponent, {
      disableClose:true,
      data: {
        index: index
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
  confirmFilter(filterAuthor: string){
    this.filteredAuthor= filterAuthor;
    console.log(filterAuthor);

  }
  clearFilter(){
this.filteredAuthor = '';
  }
}
