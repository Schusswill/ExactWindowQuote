import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { QuoteBuilderService } from '../quote-builder.service';

@Component({
  selector: 'app-window-form',
  templateUrl: './window-form.component.html',
  styleUrls: ['./window-form.component.css']
})
export class WindowFormComponent implements OnInit {

  constructor(private service: QuoteBuilderService) { }
  windowForm = new FormGroup ({
    type: new FormControl(),
    hight: new FormControl(),
    width: new FormControl(),
  });

  submit(product: Window) {
    QuoteBuilderService.addWindowToQuote(product);
  }

  ngOnInit() {
  }

}
