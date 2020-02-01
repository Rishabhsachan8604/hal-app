import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-main-ppc-dashboard',
  templateUrl: './main-ppc-dashboard.component.html',
  styleUrls: ['./main-ppc-dashboard.component.css']
})
export class MainPpcDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      
    });
  }
}
