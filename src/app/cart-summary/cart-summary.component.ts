import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  @Input() subTotal: number;
  @Input() discount: number;
  constructor() { 
    this.subTotal = 0;
    this.discount = 0;
  }

  ngOnInit(): void {
  }

}
