import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <h1>Reading List</h1>
      <h4>{{testBook.title}}</h4>
      <h4>{{testBook.pgsRead}}</h4>
      <ul>
      <li *ngFor="let currentGenre of testBook.genre">{{currentGenre}}</li>
      </ul>
      <h4>{{currentTime}}</h4>
  </div>
  `
})
export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  testBook: Book = new Book("Sirens of Titan", "Kurt Vonnegut, Jr.", false, ["absurd", "sci-fi", "existential"]);
}
export class Book {
  public status: string = "not started";
  public pgsRead: number = 0;
  public startDate: Date = null;
  public endDate: Date = null;
  public dateAbandoned: Date = null;
  public description: string = "No description provided yet";
  public review: string = null;
  public rating: number = null;

  constructor(public title: string, public author: string, public nf: boolean, public genre: string[]){

  }
}
