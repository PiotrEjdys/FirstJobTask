import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { BookService } from './books/books.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookAddComponent } from './books/book-add/book-add.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { DatePipe } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { FilterAuthorPipe } from './filter-author.pipe';
import { FilterTitlePipe } from './filter-title.pipe';

const routes: Routes = [
  {path: 'book-detail', component: BookDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    BooksListComponent,
    HeaderComponent,
    BookAddComponent,
    BookEditComponent,
    FilterAuthorPipe,
    FilterTitlePipe

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatListModule,
    MatSelectModule
  ],
  entryComponents:[
    BookAddComponent,
    BookEditComponent
  ],
  providers: [BookService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
