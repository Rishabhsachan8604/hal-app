import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-ppc',
  templateUrl: './ppc.component.html',
  styleUrls: ['./ppc.component.css']
})
export class PpcComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  ngAfterViewInit(){
    $('document').ready(function(){
      
    });
  }
}
