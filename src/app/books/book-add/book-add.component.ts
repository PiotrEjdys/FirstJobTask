import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../book.model';
import { BookService } from '../books.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

        form: FormGroup;
        isbn: string;
        title: string;
        author: string;
        categories: string[];
        pages: number;
        releaseDate: string;
        listOfCategories: string[]=['cat1','cat2','cat3','cat4'];
        book: Book;

  constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<BookAddComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any, private bookService: BookService) {
        this.isbn = data.isbn;
        this.title = data.title;
        this.author = data.author;
        this.categories = data.categories;
        this.pages = data.pages
        this.releaseDate = data.releaseDate;
     }

  ngOnInit(): void {
    this.form = this.fb.group({
      isbn: [this.isbn,[Validators.required,Validators.pattern("\\d{13}")]],
      title: [this.title,[Validators.required,Validators.minLength(3)]],
      author:[this.author,[Validators.required, Validators.minLength(3)]],
      categories:[this.categories,[Validators.required]],
      pages: [this.pages,[Validators.min(1),Validators.required]],
      releaseDate: [this.releaseDate,[Validators.required]]
  });
}

  saveAddedBook(){
    this.book= this.form.value;
    this.bookService.saveBook(this.book);
    this.dialogRef.close(this.form.value);
  }

}
