import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteBuilderService {


  name: string;
  email: string;
  zipcode: number;
  builtYear: string;
  activeStyles = [];

  getName(): any {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getZipcode() {
    return this.zipcode;
  }

  getBuiltYear() {
    return this.builtYear;
  }

  getActiveStyles() {
    return this.activeStyles;
  }

  addStyle(title: string, amount: number, id: number) {
    this.activeStyles.push({id, title, amount});
  }

  addBasicInfo(name: string, email: string, zipcode: number, builtYear: string) {
    this.name = name;
    this.email = email;
    this.zipcode = zipcode;
    this.builtYear = builtYear;
  }

  clearStyles() {
    this.activeStyles = [];
  }

constructor() {
  this.name = '';
  this.email = '';
}

}
