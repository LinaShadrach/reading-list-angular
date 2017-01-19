import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './book.model';
@Component({
  selector: 'new-book',
  template: `
    <div>
      <div *ngIf="childNewBook">
        <h3>Add Book</h3>
          <label for="title">Title</label>
          <input #newTitle type="text">
          <label for="author">Author</label>
          <input #newAuthor type="text">
          <button (click)="submitForm(newTitle.value, newAuthor.value)">Add</button>
      </div>
    </div>
  `
})

export class NewBookComponent {
  @Input() childNewBook: Book;
  @Output() newBookSender = new EventEmitter();
  submitForm(title: string, author: string){
    var newBook: Book = new Book(title, author, false, ["genre1", "genre2"]);
    this.newBookSender.emit(newBook);
  }
}
