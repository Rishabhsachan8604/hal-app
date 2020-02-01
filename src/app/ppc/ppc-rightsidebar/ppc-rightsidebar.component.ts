import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-ppc-rightsidebar',
  templateUrl: './ppc-rightsidebar.component.html',
  styleUrls: ['./ppc-rightsidebar.component.css']
})
export class PpcRightsidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    $('document').ready(function(){
     
    });
  }
}
