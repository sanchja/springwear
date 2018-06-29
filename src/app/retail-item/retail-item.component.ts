import { Component, OnInit } from '@angular/core';
import { Retail } from './retail.model';

@Component({
  selector: 'app-retail-item',
  templateUrl: './retail-item.component.html',
  styleUrls: ['./retail-item.component.css'],
})
export class RetailItemComponent implements OnInit {

  retailItems: Retail[] = [
    new Retail('Moccassins', 'Moccasin is a shoe, made of deerskin or other soft leather, consisting of a sole (made with leather that has not been "worked") and sides made of one piece of leather, stitched together at the top, and sometimes with a vamp (additional panel of leather).', 'assets/shoes.jpeg', 149),
     new Retail('Hat', 'A hat is a head covering which is worn for various reasons, including protection against weather conditions, ceremonial reasons such as university graduation, religious reasons, safety, or as a fashion accessory.', '../../assets/hat.jpg', 69),
     new Retail('Gloves', 'A glove is a garment covering the whole hand. Gloves have separate sheaths or openings for each finger and the thumb; if there is an opening but no (or a short) covering sheath for each finger they are called fingerless gloves.', '../../assets/gloves.jpeg', 45)
  ];

  
  // greenCurrency = "{color: '#28a745'}";

  constructor() {
    
   }

  ngOnInit() {

  }

}
