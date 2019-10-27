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
    return this.basicInfoForm.get('email').hasError('required') ? 'You must enter an email' :
      this.basicInfoForm.get('email').hasError('email') ? 'Not a valid email' :
      '';
  }

  getNameError() {
    return this.basicInfoForm.get('name').hasError('required') ? 'you must enter a Name' : '';
  }

  getZipError() {
    return this.basicInfoForm.get('zipcode').hasError('required') ? 'you must ender a Zipcode' :
    this.basicInfoForm.get('zipcode').hasError('minlength') ? 'must enter valid zipcode' :
    this.basicInfoForm.get('zipcode').hasError('serviceArea') ? 'Zipcode is outside service area.' :
    '';
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
      zipcode: new FormControl(this.quoteBuilder.getZipcode(), [Validators.required, Validators.minLength(5), this.zipcodeValidator])
    });
  }

  /**
   * Form submission functions
   */

  infoSubmit(customerData: any, stepper: { next: () => void; }) {
    this.quoteBuilder.addBasicInfo(customerData.name, customerData.email, customerData.zipcode);
    if (!this.basicInfoForm.valid) {
      let builtAlert = '';
      builtAlert += this.getZipError() + '\n';
      builtAlert += this.getEmailError() + '\n';
      builtAlert += this.getNameError();
      alert(builtAlert);
    } else {
      stepper.next();
    }
    // console.log(this.basicInfoForm.valid);
    // console.log(typeof customerData.zipcode);
    // console.log(validZip.includes(customerData.zipcode));
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
