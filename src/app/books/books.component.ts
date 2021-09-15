import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  detailDisplayInfo: boolean;
  indexParent: number;
  constructor() {}

  showDetailsInfo(details) {
    this.detailDisplayInfo = details.display;
    this.indexParent = details.index;
  }
}
