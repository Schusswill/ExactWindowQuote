import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { QuoteBuilderService } from '../quote-builder.service';

@Component({
  selector: 'app-quote-builder',
  templateUrl: './quote-builder.component.html',
  styleUrls: ['./quote-builder.component.css']
})
export class QuoteBuilderComponent implements OnInit {
  windows = [];
  quoteForm;

  constructor(
    private quoteBuilderService: QuoteBuilderService,
    private formBuilder: FormBuilder,
  ) {
    this.windows = quoteBuilderService.getWindows();
    this.quoteForm = this.formBuilder.group({
      email: 'example@email.com',
      zipcode: ''
    });
  }

  onSubmit(customerData) {
    console.warn('Your form has been submited', customerData);
  }

  ngOnInit() {
  }

}
