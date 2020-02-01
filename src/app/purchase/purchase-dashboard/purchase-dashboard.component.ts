import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-purchase-dashboard',
  templateUrl: './purchase-dashboard.component.html',
  styleUrls: ['./purchase-dashboard.component.css']
})
export class PurchaseDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    $(document).ready(()=>{
      $("h4").click(()=>{
        alert("hello")
      })
    })
  }
}
