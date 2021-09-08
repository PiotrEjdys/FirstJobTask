import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  detailDisplayInfo: boolean;
  indexParent: number;
  constructor() { }

  ngOnInit(): void {
  }
  showDetailsInfo(details){
    this.detailDisplayInfo = details.display;
    this.indexParent = details.index;
  }
}
