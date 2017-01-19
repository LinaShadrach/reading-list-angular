import {Pipe, PipeTransform } from '@angular/core';
import { Book } from './book.model';
 @Pipe({
   name: "fictioness",
   pure: false
 })
 export class FictionessPipe implements PipeTransform {
   transform(input: Book[], desiredFictioness) {
     var output: Book[] = [];
     if(desiredFictioness === "fictionBooks") {
       for(var i = 0; i < input.length; i++){
         if(input[i].fiction === true) {
           output.push(input[i])
         }
       }
       return output;
     } else if (desiredFictioness === "nonFictionBooks") {
       for(var i=0; i<input.length; i++) {
         if(input[i].fiction === false) {
           output.push(input[i]);
         }
       }
       return output;
     } else {
       return input;
     }
   }
 }
