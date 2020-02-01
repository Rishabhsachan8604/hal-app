import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-party-master',
  templateUrl: './party-master.component.html',
  styleUrls: ['./party-master.component.css']
})
export class PartyMasterComponent implements OnInit {
  partyForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  ngOnInit() {

  }

  createForm() {
    console.log("hello")
    this.partyForm = this.fb.group({
      Partyname: ['', Validators.required],
      Address: ['', Validators.required],
      pinCode: ['', Validators.required],
      email: ['', Validators.required],
      tele: ['', Validators.required],
      telex: ['', Validators.required],
      ContactPerson: ['', Validators.required],
      StateTax: ['', Validators.required],
      cantraltax: ['', Validators.required],
      partyCode: ['', Validators.required],
      
      
    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.partyForm);
  }
}
