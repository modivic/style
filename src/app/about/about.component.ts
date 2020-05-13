import { Component, OnInit } from '@angular/core';
import { dbserv } from './data';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  x;
  constructor(dd : dbserv) { 
    this.x = dd.getdata();
  }

  ngOnInit() {
  }

}
