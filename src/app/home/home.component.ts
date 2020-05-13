import { Component, OnInit } from '@angular/core';
import { dbservice } from './service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  y;
  constructor(qq:dbservice) { 
    this.y = qq.getserv();
  }

  ngOnInit() {
  }

}
