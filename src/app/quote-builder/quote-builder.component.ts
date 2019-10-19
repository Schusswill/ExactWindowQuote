import { Component, OnInit } from '@angular/core';

import { QuoteBuilderService } from '../quote-builder.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { validZip } from '../constants';

@Component({
  selector: 'app-quote-builder',
  templateUrl: './quote-builder.component.html',
  styleUrls: ['./quote-builder.component.css']
})

export class QuoteBuilderComponent implements OnInit {
  basicInfoForm: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private quoteBuilder: QuoteBuilderService
    ) {
      this.setInfoForm();
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
    this.basicInfoForm.get('zipcode').hasError('serviceArea') ? 'Zipcode is outside service area.' :
    '';
  }

  setInfoForm() {
    this.basicInfoForm = this.formBuilder.group ({
      name: new FormControl(this.quoteBuilder.getName(), [Validators.required]),
      email: new FormControl(this.quoteBuilder.getEmail(), [Validators.required, Validators.email]),
      zipcode: new FormControl(this.quoteBuilder.getZipcode(), [Validators.required, Validators.minLength(5), this.zipcodeValidator])
    });
  }

  zipcodeValidator(control: FormControl) {
    const zipcode = control.value;
    if (!validZip.includes(zipcode)) {
      return {serviceArea: true};
    }
    return null;
  }



  /**
   * Form submission functions
   */

  infoSubmit(customerData: any, stepper: { next: () => void; }) {
    this.quoteBuilder.addBasicInfo(customerData.name, customerData.email, customerData.zipcode);
    if (!this.basicInfoForm.valid) {
      console.log(this.basicInfoForm.valid);
      alert('some of the feilds were not filled in corectly');
    } else {
      stepper.next();
    }
    // console.log(this.basicInfoForm.valid);
    // console.log(typeof customerData.zipcode);
    // console.log(validZip.includes(customerData.zipcode));
  }

  ngOnInit() {
    this.setInfoForm();
  }




}
