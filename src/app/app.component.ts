import { Component } from '@angular/core';
import { BOOK_INIT_VALUES, Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'pipe-pure';
  public list: Book[] = deepCopy(BOOK_INIT_VALUES);
  public searchTerm = '';

  public changeTitle(text: string) {
    this.title = text;
  }

  public changeByReference() {
    const ref: Book[] = deepCopy(this.list);
    ref[0].title = "quarto libro";
    this.list = ref;
  }

  public changeByValue() {
    this.list[0].title = "quarto libro";
  }

  public pushInArray() {
    this.list.push({ title: "primo libro 2", imei: "1234-1234-1234", pipeCounter: 0 });
  }

  public reset() {
    this.list = deepCopy(BOOK_INIT_VALUES);
  }
}

function deepCopy(item: unknown) {
  return JSON.parse(JSON.stringify(item));
}
