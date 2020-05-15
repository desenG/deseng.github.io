import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup;

  selectedService: string;
  selectedServices: string[];

  groupedServices: SelectItemGroup[];

  ngOnInit() {
  }
  constructor(public fb: FormBuilder) {
    this.groupedServices = [
      {
        label: 'Pants',
        items: [
          { label: 'shortening', value: 'Pants-shortening' },
          { label: 'hemming', value: 'Pants-hemming' },
          { label: 'adjusting the waist', value: 'Pants-adjusting the waist' }
        ]
      },
      {
        label: 'Skirts and Dresses',
        items: [
          { label: 'shortening', value: 'Skirts and Dresses-shortening' },
          { label: 'take in sides', value: 'Skirts and Dresses-take in sides' },
          { label: 'take in waist', value: 'Skirts and Dresses-take in waist' },
          { label: 'adjusting straps', value: 'Skirts and Dresses-adjusting straps' }
        ]
      },
      {
        label: 'Jackets (including leather)',
        items: [
          { label: 'moving cuffs', value: 'Jackets-moving cuffs' },
          { label: 'shortening or lengthening sleeves', value: 'Jackets-shortening or lengthening sleeves' },
          { label: 'take in sides', value: 'Jackets-take in sides' }
        ]
      },
      {
        label: 'Others',
        items: [
          { label: 'Zippers on clothing, duvets, snow pants, etc.', value: 'Zippers on clothing, duvets, snow pants, etc.' },
          { label: 'Winter Coats repairs', value: 'Winter Coats repairs' },
          { label: 'Wedding Gowns alterations', value: 'Wedding Gowns alterations' },
          { label: 'Patches', value: 'Patches' },
          { label: 'Curtains and Cushions', value: 'Curtains and Cushions' },
          { label: 'Alterations on leather, silk, suede, velvet, and other materials', value: 'Toyota' },
          { label: 'Toyota', value: 'Alterations on leather, silk, suede, velvet, and other materials' }
        ]
      }
    ];

    this.form = fb.group({
      "name": ["", Validators.required],
      "address": ["", Validators.required],
      "phoneNumber": ["", Validators.required],
      "email": [""],
      "selectedService": [this.selectedService],
      "selectedServices": [this.selectedServices, Validators.required],
      "when": ["", Validators.required],
      "note": [""]
    });
  }

  selectService(event) {
    console.log(event.value);
    if (!this.selectedServices) this.selectedServices = [];
    this.selectedServices.indexOf(event.value) === -1 ? this.selectedServices.push(event.value) : console.log("This item already exists");
    this.form.patchValue({ selectedServices: this.selectedServices });//partialUpdate
  }

  removeService(event) {
    console.log(event.value);

    if (!this.selectedServices.length) {
      this.selectedServices = undefined;
    }
  }

  onSubmit() {
    console.log(this.form.value);
  }
}