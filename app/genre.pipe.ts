import {Pipe, PipeTransform } from '@angular/core';
import { Book } from './book.model';

@Pipe({
  name: "byGenre",
  pure: false
})
export class ByGenrePipe implements PipeTransform {
  transform(input: Book[], desiredGenre) {
    var output: Book[] = [];
    if(desiredGenre!=="allBooks"){
      for(var i=0; i<input.length; i++) {
        if(input[i].genre.indexOf(desiredGenre)>-1){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }

  }
}
