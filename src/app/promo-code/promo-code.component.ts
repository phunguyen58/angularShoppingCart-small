import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.css']
})
export class PromoCodeComponent implements OnInit {
  @Output() onGetDiscount = new EventEmitter();

  
  constructor() {
   }

  ngOnInit(): void {
  }

  getDiscount(element: any): void{
    this.onGetDiscount.emit(element);    
  }

}

