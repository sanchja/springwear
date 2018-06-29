import { Component, OnInit } from '@angular/core';
import { Retail } from '../retail-item/retail.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  handbagItem: string[] = ["Hand bags", "Totes", "Hats", "Gloves", "Coats", "Blouses", "Jeans"];


  constructor() { }

  ngOnInit() {
  }

}
