import { Component, OnInit } from '@angular/core';
import { Retail } from '../retail-item/retail.model';

@Component({
  selector: 'app-hat',
  templateUrl: './hat.component.html',
  styleUrls: ['./hat.component.css']
})
export class HatComponent implements OnInit {

  retailItems: Retail[] = [
  new Retail('Hat', 'A hat is a head covering which is worn for various reasons, including protection against weather conditions, ceremonial reasons such as university graduation, religious reasons, safety, or as a fashion accessory.', 'assets/hat.jpg', 69)
  ];
  constructor() { }

  ngOnInit() {
  }

}
