import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-ppc-leftsidebar',
  templateUrl: './ppc-leftsidebar.component.html',
  styleUrls: ['./ppc-leftsidebar.component.css']
})
export class PpcLeftsidebarComponent implements OnInit {
  sub;
  title:String;
  constructor(private route:ActivatedRoute,private _router: Router) {
    
   }
 
  ngOnInit() {
      this.sub=this.route.data.subscribe(v=>{
      this.title=v.activepage;
      console.log(v)
    })
    console.log(this._router.url)
  }
  ngAfterViewInit(){
   
  }
}
