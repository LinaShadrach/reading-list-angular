import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './book.model';
@Component({
  selector: 'new-book',
  template: `
    <div>
      <div *ngIf="childNewBook">
        <h3>add book</h3>
          <label for="title">title</label>
          <input #newTitle type="text">
          <label for="author">author</label>
          <input #newAuthor type="text">
          <br>
          <label>fiction or non-fiction?</label>
          <br>
          <input #fiction [value]="true" type="radio"> fiction
          <input #nonFiction [value]="false" type="radio"> non-fiction
          <br>
          <label>genre:</label><br>
          <input [ng-true-value]="sci-fi" type="checkbox"> sci-fi
          <input [ng-true-value]="fantasy" type="checkbox"> fantasy
          <input [ng-true-value]="adventure" type="checkbox"> adventure
          <input [ng-true-value]="coming-of-age" type="checkbox"> coming-of-age
          <input [ng-true-value]="absurd" type="checkbox"> absurd
          <br>
          <button (click)="submitForm(newTitle.value, newAuthor.value); newTitle.value=''; newAuthor.value=''">add</button>
      </div>
    </div>
  `
})

export class NewBookComponent {
  @Input() childNewBook: Book;
  @Output() newBookSender = new EventEmitter();
  submitForm(title: string, author: string){
    var newBook: Book = new Book(title, author, true, ["genre1", "genre2"]);
    this.newBookSender.emit(newBook);
  }
}
