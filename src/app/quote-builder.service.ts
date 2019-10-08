import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteBuilderService {

constructor() { }
  static windows = [];
  static addWindowToQuote(product: Window) {
    this.windows.push(product);
  }

  static getWindows() {
    return this.windows;
  }

  static clearQuote() {
    this.windows = [];
    return this.windows;
  }
}
