import { Component, OnInit } from '@angular/core';

import { QuoteBuilderService } from '../quote-builder.service';
import { FormGroup, FormControl } from '@angular/forms';

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
  quoteForm = new FormGroup({
    email: new FormControl(),
    zipcode: new FormControl()
  });
  submit() {
    return null;
  }



  ngOnInit() {
  }

}
