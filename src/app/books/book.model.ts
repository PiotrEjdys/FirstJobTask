export class Book {
    public isbn: string;
    public title: string;
    public author: string;
    public categories: string[];
    public pages: number;
    public releaseDate: string;
    public borrowBookName: string;
    public isBookBorrowed: boolean;

    constructor(
        isbn: string,
        title: string,
        author: string,
        categories: string[],
        pages: number,
        releaseDate: string,
        borrowBookName: string = '',
        isBookBorrowed: boolean = false
        ){
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.categories = categories;
        this.pages = pages;
        this.releaseDate = releaseDate;
        this.borrowBookName = borrowBookName
        this.isBookBorrowed = isBookBorrowed;
    }
}
