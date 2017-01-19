export class Book {
  public status: string = "not started";
  public pgsRead: number = 0;
  public startDate: Date = null;
  public endDate: Date = null;
  public dateAbandoned: Date = null;
  public description: string = "No description provided yet";
  public review: string = null;
  public rating: number = null;

  constructor(public title: string, public author: string, public fiction: boolean, public genre: string[]){

  }
}
