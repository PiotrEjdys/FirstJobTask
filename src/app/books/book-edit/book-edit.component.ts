import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../book.model';
import { BookService } from '../books.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
        form: FormGroup;
        isbn: string;
        title: string;
        author: string;
        categories: string[];
        pages: number;
        releaseDate: string;
        listOfCategories: string[]=['cat1','cat2','cat3','cat4'];
        index: number;
        books:Book[] =this.bookService.getBooks();
        borrowBookName: string;
        isBookBorrowed: boolean;
        book: Book;

        constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<BookEditComponent>,
          @Inject(MAT_DIALOG_DATA) private data: any,private bookService: BookService) {
              this.isbn = data.isbn;
              this.title = data.title;
              this.author = data.author;
              this.categories = data.categories;
              this.pages = data.pages
              this.releaseDate = data.releaseDate;
              this.index=data.index;
              this.borrowBookName = data.borrowBookName;
              this.isBookBorrowed = data.isBookBorrowed;
           }

  ngOnInit(): void {
    this.form = this.fb.group({
      isbn: [this.isbn,[Validators.required,Validators.pattern("\\d{13}")]],
      title: [this.title,[Validators.required,Validators.minLength(3)]],
      author:[this.author,[Validators.required, Validators.minLength(3)]],
      categories:[this.categories,[Validators.required]],
      pages: [this.pages,[Validators.min(1),Validators.required]],
      releaseDate: [this.releaseDate,[Validators.required]],
      isBookBorrowed:[this.isBookBorrowed],
      borrowBookName: [this.borrowBookName]
  });
  this.form.get('categories').setValue(this.bookService.getOneBook(this.data.index).categories);

  }
  saveEditedBook(){
    this.book = this.form.value;
    this.bookService.saveEditedBook(this.book,this.index);
    this.dialogRef.close(this.form.value);
  }


}
