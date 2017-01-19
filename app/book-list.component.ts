import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'book-list',
  template: `
    <select (change)="onFictionessChange($event.target.value)">
      <option value="allBooks">all books</option>
      <option value="fictionBooks">fiction books</option>
      <option value="nonFictionBooks">non-fiction books</option>
    </select>
    <div *ngFor="let book of childBookList | fictioness:filterByFictioness">
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
  filterByFictioness: string = "allBooks";
  editBookButtonClicked(bookToEdit: Book) {
    console.log("in edit button");
    this.clickSender.emit(bookToEdit);
  }
  onFictionessChange(optionFromMenu) {
    this.filterByFictioness = optionFromMenu;
  }
}
