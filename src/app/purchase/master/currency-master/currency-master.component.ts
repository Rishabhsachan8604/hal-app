import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency-master',
  templateUrl: './currency-master.component.html',
  styleUrls: ['./currency-master.component.css']
})
export class CurrencyMasterComponent implements OnInit {
  currencyForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    
    this.currencyForm = this.fb.group({
      CurrencyName: ['', Validators.required],
      CurrencyCode: ['',Validators.required]
    });
  }
  ngOnInit(){

  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.currencyForm);
  }

}
