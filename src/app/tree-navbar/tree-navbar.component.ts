import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tree-navbar',
  templateUrl: './tree-navbar.component.html',
  styleUrls: ['./tree-navbar.component.css']
})
export class TreeNavbarComponent implements OnInit {
  sub;
  title:String;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub=this.route.data.subscribe(v=>{
      this.title=v.name;
      console.log(v)
    })
  }

}
