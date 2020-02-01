import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-ppc-login',
  templateUrl: './ppc-login.component.html',
  styleUrls: ['./ppc-login.component.css']
})
export class PpcLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    $('document').ready(function(){
      $('#ppc_login').on('submit',function(e){
          e.preventDefault();
          location.href="ppc/dashboard";
      });
    });
  }

}
