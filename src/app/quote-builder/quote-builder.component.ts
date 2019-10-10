import { Component, OnInit } from '@angular/core';

import { QuoteBuilderService } from '../quote-builder.service';

@Component({
  selector: 'app-quote-builder',
  templateUrl: './quote-builder.component.html',
  styleUrls: ['./quote-builder.component.css']
})
export class QuoteBuilderComponent implements OnInit {
  windows;
  selected;

  constructor( ) {
    this.windows = QuoteBuilderService.getWindows();
  }




  ngOnInit() {
  }

}
