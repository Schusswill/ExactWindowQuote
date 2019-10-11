import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

import { QuoteBuilderService } from '../quote-builder.service';
import { windowTypes } from '../window-examples';


@Component({
  selector: 'app-window-form',
  templateUrl: './window-form.component.html',
  styleUrls: ['./window-form.component.css']
})
export class WindowFormComponent implements OnInit {

  windowTypes = windowTypes;
  constructor(
    private service: QuoteBuilderService,
    private router: Router) { }

  windowForm = new FormGroup ({
    type: new FormControl(),
    hight: new FormControl(),
    width: new FormControl(),
  });

  submit(product: Window) {
    QuoteBuilderService.addWindowToQuote(product);
    this.router.navigate(['/quote-builder']);
  }

  ngOnInit() {
  }

}
