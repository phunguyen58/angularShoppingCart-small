import { Product } from './../product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onUpdateQuantity = new EventEmitter<{productId: string, element: any}>();
  constructor() { 
  this.products = [];
  }   

  ngOnInit(): void {
  }

  removeProduct(productId: string): void{
    this.onRemoveProduct.emit(productId);
    
  }

  updateQuantity(productId: string, element: any){
    this.onUpdateQuantity.emit({productId, element})
    
  }

}
