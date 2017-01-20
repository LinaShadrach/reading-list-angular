import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'book-list',
  template: `
    <label>filter by fiction or non-fiction.</label>
    <select (change)="onFictionessChange($event.target.value)">
      <option value="allBooks">all books</option>
      <option value="fictionBooks">fiction books</option>
      <option value="nonFictionBooks">non-fiction books</option>
    </select>
    <label>filter by genre.</label>
    <select (change)="onGenreChange($event.target.value)">
      <option value="allBooks">all books</option>
      <option value="sci-fi">sci-fi</option>
      <option value="fantasy">fantasy</option>
    </select>
    <div *ngFor="let book of childBookList | byGenre:filterByGenre | fictioness:filterByFictioness">
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
  filterByGenre: string = "allBooks";
  editBookButtonClicked(bookToEdit: Book) {
    console.log("in edit button");
    this.clickSender.emit(bookToEdit);
  }
  onFictionessChange(optionFromMenu) {
    this.filterByFictioness = optionFromMenu;
  }
  onGenreChange(optionFromMenu) {
    this.filterByGenre = optionFromMenu;
  }
}
