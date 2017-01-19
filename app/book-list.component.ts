import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'book-list',
  template: `
    <div *ngFor="let book of childBookList">
      <h4>{{book.title}} </h4>
      <ul>
        <li *ngFor="let currentGenre of book.genre">{{currentGenre}}</li>
      </ul>
<button (click)="editBookButtonClicked(book)">Edit</button>
    </div>
  `
})
export class BookListComponent {
  @Input() childBookList: Book[];
  @Output() clickSender = new EventEmitter();

  editBookButtonClicked(bookToEdit: Book) {
    console.log("in edit button");
    this.clickSender.emit(bookToEdit);
  }
}
