import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book.model';

@Pipe({
  name: 'filterPipeImpure',
  pure: false
})
export class FilterPipeImpurePipe implements PipeTransform {
  counter = 0;

  transform(books: Book[], searchTerm: string): Book[] {
    ++this.counter;
    if (!searchTerm) {
      return books;
    }
    return books.filter(
      book => book.title
        .toLowerCase()
        .indexOf(searchTerm.toLowerCase()) !== -1
    ).map(book => {
      book.pipeCounter = this.counter
      return book;
    });
  }
}
