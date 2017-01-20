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
    <div *ngIf="!addBook && !selectedBook">
      <book-list [childBookList]="masterBookList" (clickSender)="editBook($event)"></book-list>
      <br>
      <button (click)="showAddBookForm();">Add New Book to List</button>
    </div>
    <edit-book [childBookToEdit]="selectedBook" (doneEditingClickedSender)="doneEditing()"></edit-book>
    <new-book [childNewBook]="addBook" (newBookSender)="addBookToList($event)"></new-book>
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
  addGenre = null;
  bookListShow = true;
  masterBookList: Book[] = [
    new Book("Sirens of Titan", "Kurt Vonnegut, Jr.", true, ["absurd", "sci-fi", "existential"]), new Book("Do Androids Dream of Electric Sheep?", "Phillip K. Dick", false, ["sci-fi", "existential"])
  ];
  // model = {
  //   bookList: this.masterBookList,
  //   genreList: masterGenreList
  // }
  editBook(clickedBook) {
    this.selectedBook = clickedBook;
  }
  doneEditing() {
    this.selectedBook = null;
  }
  showAddBookForm() {
    this.addBook = true;
  }

  addBookToList(newBookFromChild: Book) {
    this.masterBookList.push(newBookFromChild);
    this.addBook = false;

  }

}
