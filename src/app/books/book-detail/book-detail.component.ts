import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  book: Book;
  users: string[] = this.bookService.getUsers();
  username: string = '';
  detailDisplay: boolean;
  @Input() index: number;
  @Output() detailDisplayEmitter = new EventEmitter<boolean>();
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.book = this.bookService.getOneBook(this.index);
    // console.log(this.book.bookId);
  }
  goBackFromDetails() {
    this.detailDisplay = false;
    this.detailDisplayEmitter.emit(this.detailDisplay);
  }
  borrowBook() {
    if (this.username !== '') {
      this.book.isBookBorrowed = true;
      this.book.borrowBookName = this.username;
    }
  }
}
