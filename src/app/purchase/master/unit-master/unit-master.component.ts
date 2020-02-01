import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-unit-master',
  templateUrl: './unit-master.component.html',
  styleUrls: ['./unit-master.component.css']
})
export class UnitMasterComponent implements OnInit {
  unitForm: FormGroup;
  sub;
  constructor(private fb: FormBuilder,private route:ActivatedRoute) {
    this.createForm();
  }

  ngOnInit() {
    this.sub=this.route.data.subscribe(v=>{
      console.log(v.name)
      console.log(v.nacsme==undefined)
      
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  createForm() {
    console.log("hello")
    this.unitForm = this.fb.group({
      Description: ['', Validators.required],
      SelectUnit: ['', Validators.required],

    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.unitForm);
  }

}
