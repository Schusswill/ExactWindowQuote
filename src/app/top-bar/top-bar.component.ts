import { Component, OnInit, Inject } from '@angular/core';
import { HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})



export class TopBarComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

previousPosition = (this.document.documentElement.scrollTop || this.document.body.scrollTop) + this.document.documentElement.offsetHeight;
hide = false;

@HostListener('window:scroll', [])
onWindowScroll() {
    const currentPosition = (document.documentElement.scrollTop || this.document.body.scrollTop) +
     this.document.documentElement.offsetHeight;
    if (this.previousPosition > currentPosition) {
      this.hide = false;
    } else {
      this.hide = true;
    }
    this.previousPosition = currentPosition;
  }

  calculateState() {
    if (this.hide) {
      return {top: 0};
    } else {
      return {top: '-55px'};
    }
  }

ngOnInit() {
  }

}
