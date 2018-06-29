import { Component, OnInit } from '@angular/core';
import { Retail } from '../retail-item/retail.model';

@Component({
  selector: 'app-gloves',
  templateUrl: './gloves.component.html',
  styleUrls: ['./gloves.component.css']
})
export class GlovesComponent implements OnInit {

  retailItems: Retail[] = [
    new Retail('Gloves', 'A glove is a garment covering the whole hand. Gloves have separate sheaths or openings for each finger and the thumb; if there is an opening but no (or a short) covering sheath for each finger they are called fingerless gloves.', 'assets/gloves.jpeg', 45)
    ];

  constructor() { }

  ngOnInit() {
  }

}
