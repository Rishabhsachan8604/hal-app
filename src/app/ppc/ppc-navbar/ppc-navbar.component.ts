import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-ppc-navbar',
  templateUrl: './ppc-navbar.component.html',
  styleUrls: ['./ppc-navbar.component.css']
})
export class PpcNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    $('document').ready(function(){
      $('.ppc_logout').on('click',function(){
        location.href="ppc";
      });
    });
  }
  

}
