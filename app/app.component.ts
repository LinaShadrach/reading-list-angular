import { Component } from '@angular/core';
import { Book } from './book.model';
import { NewBookComponent} from './new-book.component';
import { EditBookComponent } from './edit-book.component';
import { BookListComponent} from './book-list.component';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <h1>Reading List</h1>
      <book-list [childBookList]="masterBookList" (clickSender)="editBook($event)"></book-list>
      <edit-task [childBookToEdit]="selectedBook" (doneEditingClickedSender)="doneEditing()"></edit-task>
      <new-book [childNewBook]="addBook" (newBookSender)="addBookToList($event)"></new-book>
      <button *ngIf="!AddBook" (click)="showAddBookForm()">Add New Book to List</button>
      <h4>{{currentTime}}</h4>
  </div>
  `
})
export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedBook = null;
  addBook = null;
  masterBookList: Book[] = [
    new Book("Sirens of Titan", "Kurt Vonnegut, Jr.", false, ["absurd", "sci-fi", "existential"]), new Book("Do Androids Dream of Electric Sheep?", "Phillip K. Dick", false, ["sci-fi", "existential"])
  ];
  editBook(clickedBook) {
    this.selectedBook = clickedBook;
    console.log("in edit" + this.selectedBook.title);
  }
  doneEditing() {
    this.selectedBook = null;
  }
  showAddBookForm() {
    this.addBook = true;
  }
  addBookToList(newBookFromChild: Book) {
    this.masterBookList.push(newBookFromChild);
  }

}
