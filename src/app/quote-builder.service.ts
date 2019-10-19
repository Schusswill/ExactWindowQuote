import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteBuilderService {

  name: string;
  email: string;
  zipcode: number;

  getName(): any {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getZipcode() {
    return this.zipcode;
  }

  addBasicInfo(name: string, email: string, zipcode: number) {
    this.name = name;
    this.email = email;
    this.zipcode = zipcode;
  }

constructor() {
  this.name = '';
  this.email = '';
}

}
