import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookListComponent } from './book-list.component';
import { Book } from './book.model';

@Component ({
  selector: 'edit-task',
  template: `
  <div>
    <div *ngIf="childBookToEdit">
      <h3>Edit Book Entry</h3>

        <label for="title">Title</label>
        <input [(ngModel)]="childBookToEdit.title" type="text">
        <label for="author">Author</label>
        <input [(ngModel)]="childBookToEdit.author" type="text">
        <button (click)="doneEditingClicked()">Done Editing</button>
    </div>
  </div>
  `
})

export class EditBookComponent {
  @Input() childBookToEdit: Book;
  @Output() doneEditingClickedSender = new EventEmitter();

  doneEditingClicked() {
    this.doneEditingClickedSender.emit();
  }
}
