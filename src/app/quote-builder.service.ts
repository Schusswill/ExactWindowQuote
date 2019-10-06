import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteBuilderService {

constructor() { }
  windows = [];

  addWindowToQuote(product) {
    this.windows.push(product);
  }

  getWindows() {
    return this.windows;
  }

  clearQuote() {
    this.windows = [];
    return this.windows;
  }
}
