import { Component, OnInit } from '@angular/core';

import { QuoteBuilderService } from '../quote-builder.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { validZip, windowTypes } from '../constants';

@Component({
  selector: 'app-quote-builder',
  templateUrl: './quote-builder.component.html',
  styleUrls: ['./quote-builder.component.css']
})

export class QuoteBuilderComponent implements OnInit {
  basicInfoForm: FormGroup;
  secondFormGroup: FormGroup;
  windowSelectorForm: FormGroup;
  windowTypes = windowTypes;
  windowForms: FormArray;

  constructor(
    private formBuilder: FormBuilder,
    private quoteBuilder: QuoteBuilderService
    ) {
      this.setInfoForm();
      this.buildWindowForms();
  }

  /**
   * Stepper stage 1 validation
   */
  getEmailError() {
    return this.basicInfoForm.get('email').hasError('required') ? 'You must enter an email \n' :
      this.basicInfoForm.get('email').hasError('email') ? 'Not a valid email \n' :
      '';
  }

  getNameError() {
    return this.basicInfoForm.get('name').hasError('required') ? 'You must enter a Name \n' : '';
  }

  getZipError() {
    return this.basicInfoForm.get('zipcode').hasError('required') ? 'You must enter a Zipcode \n' :
    this.basicInfoForm.get('zipcode').hasError('minlength') ? 'must enter valid zipcode \n' :
    this.basicInfoForm.get('zipcode').hasError('serviceArea') ? 'Zipcode is outside service area. \n' :
    '';
  }

  getBuiltError() {
    return this.basicInfoForm.get('builtYear').errors ? 'You must enter a year \n' : '';
  }

  zipcodeValidator(control: FormControl) {
    const zipcode = control.value;
    if (!validZip.includes(zipcode)) {
      return {serviceArea: true};
    }
    return null;
  }

  windowFormValidator(control: FormControl) {
    // const
  }

  /**
   * form setters
   */

  setInfoForm() {
    this.basicInfoForm = this.formBuilder.group ({
      name: new FormControl(this.quoteBuilder.getName(), [Validators.required]),
      email: new FormControl(this.quoteBuilder.getEmail(), [Validators.required, Validators.email]),
      zipcode: new FormControl(this.quoteBuilder.getZipcode(), [Validators.required, Validators.minLength(5), this.zipcodeValidator]),
      builtYear: new FormControl(this.quoteBuilder.getBuiltYear(), [Validators.required, Validators.minLength(4), Validators.maxLength(4)])
    });
  }

  /**
   * Form submission functions
   */

  infoSubmit(customerData: any, stepper: { next: () => void; }) {
    this.quoteBuilder.addBasicInfo(customerData.name, customerData.email, customerData.zipcode, customerData.builtYear);
    if (!this.basicInfoForm.valid) {
      let builtAlert = '';
      builtAlert += this.getZipError();
      builtAlert += this.getEmailError();
      builtAlert += this.getNameError();
      builtAlert += this.getBuiltError();
      alert(builtAlert);
    } else {
      stepper.next();
    }
    // console.log(this.basicInfoForm.valid);
    // console.log(typeof customerData.zipcode);
    // console.log(validZip.includes(customerData.zipcode));
  }

  windowSubmit(windowForms: any, stepper: { next: () => void; }) {
    this.quoteBuilder.clearStyles();
    let control = true;
    let i = 0;
    for (const windowform of windowForms) {
      if (windowform.value.active) {
        if (windowform.value.amount <= 0) {
        control = false;
        } else {
          this.quoteBuilder.addStyle(this.windowTypes[i].title, windowform.value.amount, i);
        }
      }
      i++;
    }
    console.log(this.quoteBuilder.getActiveStyles());
    if (control) {
      stepper.next();
    } else {
      alert('all selected windows must have an amount');
    }
  }

  finalSubmit() {
    this.test('lol');
  }

  buildWindowForms() {
    this.windowForms = this.formBuilder.array([this.createItem()]);
    for (let i = 1; i < windowTypes.length; i++) {
      this.windowForms.push(this.createItem());
    }
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      active: false,
      amount: null
    });
  }

  toggleActive(c: FormGroup) {
    // this.test(c.controls);
    c.controls.active.setValue(!c.value.active);
  }

  uploadFile() {

  }

  test(e: any) {
    console.log(e);
  }

  ngOnInit() {
    this.setInfoForm();
    this.buildWindowForms();
  }




}
