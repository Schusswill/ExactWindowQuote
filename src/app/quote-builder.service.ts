import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteBuilderService {


  name: string;
  email: string;
  zipcode: number;
  builtYear: string;
  activeWindows = [];
  style = {
    woodTrim: false,
    capping: false,
    grids: false,
    interiorColor: ''
  };

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

  getActiveWindows() {
    return this.activeWindows;
  }

  getStyle() {
    return this.style;
  }

  addWindow(title: string, amount: number, id: number) {
    this.activeWindows.push({id, title, amount});
  }

  addBasicInfo(name: string, email: string, zipcode: number, builtYear: string) {
    this.name = name;
    this.email = email;
    this.zipcode = zipcode;
    this.builtYear = builtYear;
  }

  setStyle(woodTrim: boolean, capping: boolean, grids: boolean, interiorColor: string) {
    this.style = {
      woodTrim,
      capping,
      grids,
      interiorColor
    };
  }

  clearWindows() {
    this.activeWindows = [];
  }

  print() {
    return {
      name: this.name,
      email: this.email,
      windows: this.activeWindows,
      style: this.style
    };
  }

constructor() {
  this.name = '';
  this.email = '';
}

}
