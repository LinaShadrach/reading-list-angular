import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookListComponent } from './book-list.component';
import { Book } from './book.model';

@Component ({
  selector: 'edit-book',
  template: `
  <div>
    <div *ngIf="childBookToEdit">
      <h3>Edit Book Entry</h3>

        <label for="title">Title</label>
        <input [(ngModel)]="childBookToEdit.title" type="text">
        <label for="author">Author</label>
        <input [(ngModel)]="childBookToEdit.author" type="text">
        <br>
        <label>fiction or non-fiction?</label>
        <br>
        <input [(ngModel)]="childBookToEdit.fiction" type="radio" [value]="true"> fiction
        <input [(ngModel)]="childBookToEdit.fiction" type="radio" [value]="false"> non-fiction
        <br>
        <label>genre:</label><br>
        <div *ngIf="childBookToEdit.fiction">
          <div *ngFor="let fictionGenre of masterFictionGenreList">
            <input [value]="fictionGenre" type="checkbox" (change)="collectChecks(fictionGenre)"> {{fictionGenre}}
          </div>
        </div>
        <div *ngIf="!childBookToEdit.fiction">
          <div *ngFor="let nonFictionGenre of masterNonFictionGenreList">
            <input [value]="nonFictionGenre" type="checkbox" (change)="collectChecks(nonFictionGenre)"> {{nonFictionGenre}}
          </div>
        </div>
        <h3 *ngFor="let genre of childBookToEdit.genre">{{genre}}</h3>
        <button (click)="doneEditingClicked()">Done Editing</button>
    </div>
  </div>
  `
})

export class EditBookComponent {
  @Input() childBookToEdit: Book;
  @Output() doneEditingClickedSender = new EventEmitter();
  fictioness: boolean = false;
  masterFictionGenreList: string[] = [
    "sci-fi", "fantasy", "adventure", "coming-of-age", "satire", "mystery", "horror"
  ];
  masterNonFictionGenreList: string[] = [
    "biography", "autobiography", "self-help", "biology", "chemistry", "psychology", "astronomy"
  ];

  collectChecks(genre: string) {
    if(this.childBookToEdit.genre.indexOf(genre)===-1){
      this.childBookToEdit.genre.push(genre);
    }
    else{
      var index: number = this.childBookToEdit.genre.indexOf(genre);
      this.childBookToEdit.genre.splice(index,1);
    }
  }
  doneEditingClicked() {
    this.doneEditingClickedSender.emit();
  }
}
