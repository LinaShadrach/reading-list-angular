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
          <input name="checkFiction" (change)="updateFictioness(true);" type="radio"> fiction
          <input name="checkFiction" (change)="updateFictioness(false);" type="radio"> non-fiction
          <br>
          <label>genre:</label><br>
          <div *ngIf="fiction">
            <div *ngFor="let fictionGenre of masterFictionGenreList">
              <input [value]="fictionGenre" type="checkbox" (change)="collectChecks(fictionGenre)"> {{fictionGenre}}
            </div>
          </div>
          <div *ngIf="!fiction">
            <div *ngFor="let nonFictionGenre of masterNonFictionGenreList">
              <input [value]="nonFictionGenre" type="checkbox" (change)="collectChecks(nonFictionGenre)"> {{nonFictionGenre}}
            </div>
          </div>
          <h3 *ngFor="let genre of childNewBook.genre">{{genre}}</h3>
          <button (click)="submitForm(newTitle.value, newAuthor.value); newTitle.value=''; newAuthor.value='';">add</button>
      </div>
    </div>
  `
})

export class NewBookComponent {
  @Input() childNewBook: Book;
  @Output() newBookSender = new EventEmitter();
  fiction = null;
  checkFiction = false;
  checkNonFiction = false;
  checkedGenre: string[] = [];
  masterFictionGenreList: string[] = [
    "sci-fi", "fantasy", "adventure", "coming-of-age", "satire", "mystery", "horror"
  ];
  masterNonFictionGenreList: string[] = [
    "biography", "autobiography", "self-help", "biology", "chemistry", "psychology", "astronomy"
  ];
  submitForm(title: string, author: string){
    var newBook: Book = new Book(title, author, this.fiction, this.checkedGenre);
    this.newBookSender.emit(newBook);
  }
  updateFictioness(fiction: boolean) {
    this.fiction = fiction;
    if(fiction){
      console.log('fiction');
      this.checkNonFiction = false;
    }
    if(fiction===false){
      this.checkFiction = false;
    }
  }
  collectChecks(genre: string) {
    if(this.checkedGenre.indexOf(genre)===-1){
      this.checkedGenre.push(genre);
    }
    else{
      var index: number = this.checkedGenre.indexOf(genre);
      this.checkedGenre.splice(index,1);
    }
  }
}
