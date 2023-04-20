import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book.model';

@Pipe({
  name: 'filterPipePure',
  pure: true
})
export class FilterPipePurePipe implements PipeTransform {
  transform(books: Book[], searchTerm: string): Book[] {
    if (!searchTerm) {
      return books;
    }
    return books.filter(
      book => book.title
        .toLowerCase()
        .indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
