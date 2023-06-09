import { Component } from '@angular/core';
import { BOOK_INIT_VALUES, Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'numero di esecuzioni';
  public titlePage = 'DEMO PURE & IMPURE PIPE';
  public list: Book[] = deepCopy(BOOK_INIT_VALUES);
  public searchTerm = '';

  public changeTitle(text: string) {
    this.title = text;
  }

  public changeTitlePage(text: string) {
    this.titlePage = text;
  }

  public changeByReference() {
    const ref: Book[] = deepCopy(this.list);
    ref[0].title = "quarto libro";
    ref[0].imei = "4444-4444-4444";
    this.list = ref;
  }

  public changeByValue() {
    this.list[0].title = "quarto libro";
    this.list[0].imei = "4444-4444-4444";
  }

  public pushInArray() {
    this.list.push({ title: "primo libro 2", imei: "9999-9999-9999"});
  }

  public reset() {
    this.list = deepCopy(BOOK_INIT_VALUES);
  }
}

function deepCopy(item: unknown) {
  return JSON.parse(JSON.stringify(item));
}
