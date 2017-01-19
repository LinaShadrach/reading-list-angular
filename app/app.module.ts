import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NewBookComponent } from './new-book.component';
import { BookListComponent } from './book-list.component';
import { EditBookComponent } from './edit-book.component';
import { FormsModule }  from '@angular/forms';

@NgModule({
  imports: [ BrowserModule,
              FormsModule ],
  declarations: [ AppComponent,
                  BookListComponent,
                  EditBookComponent,
                  NewBookComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
